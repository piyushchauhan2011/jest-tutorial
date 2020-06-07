import http from "http";

http
  .createServer(function (req, res) {
    const a = 23;
    console.log(a);
    res.write("Hello, World!");
    res.end();
  })
  .listen(8080);
