const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const expressHbs = require("express-handlebars");

const app = express();

// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
// app.set("view engine", "pug");
// app.set("view engine", "hbs");
app.set("view engine", "ejs");
app.set("views", "views");
// app.use((req, res, next) => {
//   console.log("always run this code");
//   next();
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

// const server = http.createServer(app);
// server.listen(3000)
app.use((req, res, next) => {
  //   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  console.log("not found");
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
//

//=======================================DAY ONE CODE BELOW==============================================

//sa Node.js, instead of "index.html" file,
//sa .js file na lang din nakakagawa or nakakaacces ng server
//kagaya nitong app.js

// ('./http') = ang hahanapin nya is local. hahanap sya ng http.js sa files
// ('http') = eto ang hahanap ng global na http

// *** ACTUAL CODE BEFORE: const http = require('http');
// ***ACTULA CODE BEFORE: const routes = require('./routes')


// const listener = function requesListener(req, res) {

// }

// const server = http.createServer((req, res) => {

// });

// *** ACTUAL CODE BEFORE: console.log(routes.someText)
// const server = http.createServer(routes);
// *** ACTUAL CODE BEFORE: const server = http.createServer(routes.handler);

// *** ACTUAL CODE BEFORE: server.listen(3000);
//