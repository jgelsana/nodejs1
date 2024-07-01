const fs = require("fs");

const requestHandler = (req, res) => {
  //this can be used to check some of the important details on the req parameteer variable
  // console.log(req.url, req.method, req.headers)
  const url = req.url;
  const method = req.method;

  //buffer
  //chunk1, chunk2, chunk3 => buffer => toString()

  console.log(url);
  //non-blocking or asynchronous ang pag-run ni nodejs, walang guarantee na
  //line by line sya magraraun
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<head><title>Enter Message</title></head>`);
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
    );
    res.write(`</html>`);
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    // console.log('handle message post')
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1]

      // fs.writeFileSync('message.txt', message)
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
    // return res.end()
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html>`);
  res.write(`<head><title>My First Page</title></head>`);
  res.write(`<body><h1>Hello from my Node.js Server!</h1></body>`);
  res.write(`</html>`);
  return res.end();
};

// module.exports = requestHandler

// module.exports = {
//     handler: requestHandler,
//     someText: 'My Test'
// }

// module.exports.handler = requestHandler
// module.exports.someText = 'My Text'

exports.handler = requestHandler
exports.someText = 'My Texters'

// node.js nature is code blocking
// kung nag-iistart ka pa lang naman, mag-expressJs ka na lang muna