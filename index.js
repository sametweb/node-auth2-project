const server = require("./server");

server.listen(4000, () => console.log("server is running on port 4000"));

module.exports = server;
