// const person = {
//   name: "John",
//   age: 34,
//   nationality: "public",
// };

/**
 * JavaScript builtin proxy Object
 * */

// const abc = new Proxy(person, {
//   get: (obj, prop) => {
//     console.log(
//       `The value of ${prop as string} is ${
//         obj[prop as keyof typeof obj] as string
//       }`
//     );
//   },

//   set: (obj: typeof person, prop, value: string | number) => {
//     console.log(
//       `Changed ${prop as string} from ${
//         obj[prop as keyof typeof obj]
//       } to ${value}`
//     );
//     obj[prop as keyof typeof person] = value;
//     return true;
//   },
// });

interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  request() {
    console.log("real subject request handler");
  }
}

/**
 * 1. Example
 */

class ProxySub implements Subject {
  private realSubject: RealSubject;
  constructor(subject: RealSubject) {
    this.realSubject = subject;
  }
  /**
   * The most common applications of the Proxy pattern are lazy loading,
   * caching, controlling the access, logging, etc. A Proxy can perform one of
   * these things and then, depending on the result, pass the execution to the
   * same method in a linked RealSubject object.
   */
  request() {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess() {
    // checking access for real subject
    console.log("Proxy: Checking access prior to firing a real request.");
    return true;
  }

  private logAccess(): void {
    console.log("Proxy: Logging the time of request.");
  }
}

function clientCode(subject: Subject) {
  subject.request();
}

/**
 * 2. Example
 */

interface ThirdPartyYoutubeLib {
  listVideos(): Array<string>;
  getVideoInfo(id: string): string;
  downloadVideo(id: string): void;
}

class ThirdPartyYoutubeClient implements ThirdPartyYoutubeLib {
  listVideos() {
    console.log("third party youtube class");
    return ["some"];
  }

  getVideoInfo(id: string) {
    return `${id}: somethigs`;
  }

  downloadVideo(id: string) {
    console.log("download video");
  }
}

class CachedYoutubeClient implements ThirdPartyYoutubeLib {
  private youtubeSerive: ThirdPartyYoutubeLib;
  private listCache: Array<string>;
  private videoCache: string;
  private downloadExist: Record<string, string>;

  constructor(youtubeService: ThirdPartyYoutubeLib) {
    this.youtubeSerive = youtubeService;
    this.listCache = [];
    this.videoCache = "";
    this.downloadExist = {};
  }

  listVideos() {
    if (this.listCache.length === 0) {
      console.log("listVideo from main service");
      this.listCache = this.youtubeSerive.listVideos();
    }
    return this.listCache;
  }

  getVideoInfo(id: string) {
    if (this.videoCache.length === 0) {
      console.log("getVideo from main service");
      this.videoCache = this.youtubeSerive.getVideoInfo(id);
    }
    return this.videoCache;
  }

  downloadVideo(id: string) {
    if (!this.downloadExist[id]) {
      console.log("downloading video");
      this.youtubeSerive.downloadVideo(id);
      this.downloadExist[id] = "video downloaded";
    }
  }
}

function youTubeClientConsumer(youtubeClient: ThirdPartyYoutubeLib) {
  console.log(youtubeClient.getVideoInfo("2"));
  console.log(youtubeClient.listVideos());

  /**
   * calling second time to check if cache is working
   */

  console.log(youtubeClient.getVideoInfo("2"));
  console.log(youtubeClient.listVideos());
}

export function executeProxy() {
  // console.log("Client: Executing the client code with a real subject:");
  // const realSubject = new RealSubject();
  // clientCode(realSubject);

  // console.log("Client: Executing the client code with a real subject:");
  // const proxy = new ProxySub(realSubject);
  // clientCode(proxy);

  console.log("Client: Executing the youtube client directly");
  const youtubeClient = new ThirdPartyYoutubeClient();
  //   youTubeClientConsumer(youtubeClient);

  console.log("Client: Executing the youtube proxy client");
  const youtubeProxyClient = new CachedYoutubeClient(youtubeClient);
  youTubeClientConsumer(youtubeProxyClient);
}
