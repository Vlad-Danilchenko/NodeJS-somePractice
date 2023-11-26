const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("overview");
  } else if (pathName === "/product") {
    res.end("Product");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404);
    res.end("Page not found!");
  }
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Listen on port 3000");
});
