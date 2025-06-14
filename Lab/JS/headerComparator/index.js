const { writeFile } = require("fs/promises");

const fetchHeaderHttp = async () => {
  try {
    const response = await fetch("http://localhost:3000");

    const headersObj = {};
    response.headers.forEach((value, key) => {
      headersObj[key] = value;
    });

    const headers = {
      name: "with helmet",
      data: headersObj,
    };

    await writeFile("headersWithHelmet.txt", JSON.stringify(headers, null, 2));
  } catch (err) {
    console.error(err);
  }
};

fetchHeaderHttp();
