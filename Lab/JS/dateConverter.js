// const seconds = 13621878461;
const oneHour = 60 * 60 * 1000;

const eventDate = new Date(oneHour).toISOString().slice(11, 19);

// console.log(
//   eventDate.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: false,
//   })
// );

console.log(eventDate);
