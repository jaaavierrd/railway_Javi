const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hola, este es mi servidor web con railway de JAvier");
});

server.listen(process.env.PORT || 3000);
