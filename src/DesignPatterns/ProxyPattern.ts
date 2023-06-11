// const person = {
//   name: "John",
//   age: 34,
//   nationality: "public",
// };
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
