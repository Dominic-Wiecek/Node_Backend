const http = require("http");
const app = require("./app/app.js");
require("dotenv").config();

http.createServer(app).listen(process.env.port, () => {
  console.log(`PORT ${process.env.port}`);
});
