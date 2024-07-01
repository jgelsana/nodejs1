//sa Node.js, instead of "index.html" file,
//sa .js file na lang din nakakagawa or nakakaacces ng server
//kagaya nitong app.js

// ('./http') = ang hahanapin nya is local. hahanap sya ng http.js sa files
// ('http') = eto ang hahanap ng global na http

const http = require('http');
const routes = require('./routes')


// const listener = function requesListener(req, res) {

// }

// const server = http.createServer((req, res) => {

// });

console.log(routes.someText)
// const server = http.createServer(routes);
const server = http.createServer(routes.handler);

server.listen(3000);
//
