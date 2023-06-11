import { createServer, connect, createConnection } from "net";
import { Buffer } from "buffer";

// const client = createConnection({ port: 8124 }, () => {
//   // 'connect' listener.
//   console.log('connected to server!');
//   client.write('world!\r\n');
// });
// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });
// client.on('end', () => {
//   console.log('disconnected from server');
// });

const server = createServer(async (c) => {
  console.log("server started");
  c.on("connect", () => {
    console.log("socket has been connected");
  });
  c.on("end", () => {
    console.log("client disconnected");
  });
  c.on("close", () => {
    console.log("socket has been released");
  });

  console.log(c.localAddress);

  //   const sleep = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(0);
  //     }, 4000);
  //   });
  //   await sleep;

  // const isPrimse = (n: number) => {
  //   let isPrime = true;
  //   for (let i = 3; i < n; i++) {
  //     //it is not a prime break the loop,
  //     // see how long it took
  //     if (n % i === 0) {
  //       isPrime = false;
  //       break;
  //     }
  //   }
  //   console.log("isPrime: ", isPrime);
  // };

  //   isPrimse(29355126551);

  /**
   * writing using buffer
   */
  // const b = Buffer.alloc(64);
  const b = Buffer.from(
    "HTTP/1.1 200 OK\r\n\r\nHi there, this is amazing i can directly write on buffer!\r\n"
  );
  // b.write(
  //   "HTTP/1.1 200 OK\r\n\r\nHi, there this is amazing i can directly write on buffer!\r\n"
  // );

  c.write(b);

  // c.write("HTTP/1.1 200 OK\r\n\r\nHi, there!\r\n");
  // c.destroy();
  //   c.write("hello\r\n");
  //   c.writable()
  //   c.pipe(c);
});

server.on("error", (err) => {
  throw err;
});

server.listen(8124, () => {
  console.log("server bound");
});
