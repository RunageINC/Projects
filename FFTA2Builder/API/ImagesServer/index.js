const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

// Directory for storing images
const IMAGES_DIR = path.join(__dirname, "images");

// Ensure the images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR);
}

// Helper to respond with a JSON message
const respondWithJSON = (res, statusCode, message) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message }));
};

// HTTP Server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  // Serve an image: GET /image?name=filename
  if (req.method === "GET" && pathname === "/image") {
    const fileName = query.name;

    if (!fileName) {
      return respondWithJSON(res, 400, "Missing 'name' query parameter");
    }

    const filePath = path.join(IMAGES_DIR, fileName);

    if (!fs.existsSync(filePath)) {
      return respondWithJSON(res, 404, "File not found");
    }

    res.writeHead(200, { "Content-Type": "image/jpeg" }); // Update MIME type if needed
    fs.createReadStream(filePath).pipe(res);

    // Save an image: POST /image
  } else if (req.method === "POST" && pathname === "/image") {
    const fileName = query.name;

    if (!fileName) {
      return respondWithJSON(res, 400, "Missing 'name' query parameter");
    }

    const filePath = path.join(IMAGES_DIR, fileName);
    const fileStream = fs.createWriteStream(filePath);

    req.pipe(fileStream);

    fileStream.on("finish", () => {
      respondWithJSON(res, 200, `File '${fileName}' saved successfully`);
    });

    fileStream.on("error", (err) => {
      respondWithJSON(res, 500, `Error saving file: ${err.message}`);
    });

    // Handle unsupported routes
  } else {
    respondWithJSON(res, 404, "Route not found");
  }
});

// Start the server
const PORT = 3010;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
