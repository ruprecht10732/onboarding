const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");

const path = require("path");
const cors = require("cors");
const models = require("./app/sequelize.js");

const app = express();

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024 * 1024, //10MB max file(s) size
      useTempFiles: true,
      tempFileDir: "/tmp/",
      safeFileNames: true,
      preserveExtension: true,
    },
  })
);

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

// Test DB
db.authenticate()
  .then(() => console.log("Database is working...."))
  .catch((err) => console.log(err));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API." });
});

require("./app/routes/invite.routes.js")(app);
require("./app/routes/department.routes.js")(app);
require("./app/routes/user.routes.js")(app);

// // set port, listen for requests
// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

module.exports = app;
