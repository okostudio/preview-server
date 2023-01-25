const express = require("express");
const path = require('path');
const fs = require("fs");
const app = express();
const port = 3000;
const head = `<head>
                <link rel="stylesheet" type="text/css" href="/public/main.css">
              </head>`;

app.use(express.static(path.join(__dirname,'public')));

app.get("*", (req, res) => {
  let requestedPath = '';
  if(req.originalUrl === '/') {
    requestedPath = __dirname;
  } else {
    requestedPath = path.join(__dirname, req.originalUrl);
  }
  fs.readdir(requestedPath, (err, files) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.status(404).send("Sorry, the requested folder does not exist.");
      } else {
        res.status(500).send(err);
      }
      return;
    }
    let html = `${head}`;
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filePath = path.join(requestedPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        if (stats.isDirectory()) {
          const match = file.match(/(\d+)x(\d+)/);
          if (match) {
            let frameWidth = match[1];
            let frameHeight = match[2];
            html += `<div><iframe src="${req.originalUrl}/${file}/index.html" width="${frameWidth}" height="${frameHeight}"></iframe></div>`;
          } else {
            html += `<div><a href="${req.protocol + '://' + req.get('host')}${req.baseUrl}${req.originalUrl}/${file}">${file}</a></div>`;
          }
          readNestedDirectory(filePath, req.originalUrl);
        } else if (stats.isFile() && imageExtensions.includes(path.extname(filePath))) {
          html += `<div><img src="${req.originalUrl}/${file}"/></div>`;
        }
        if (i === files.length - 1) {
          if (html !== "") {
            res.send(html);
          } else {
            res.status(404).send("Sorry, no subfolders or image files found in this folder.");
          }
        }
      });
    }
  });
});




function readNestedDirectory(path, originalUrl) {
  fs.readdir(path, (err, files) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.status(404).send("Sorry, the requested folder does not exist.");
      } else {
        res.status(500).send(err);
      }
      return;
    }
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filePath = path.resolve(path, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        if (stats.isDirectory()) {
            readNestedDirectory(filePath, originalUrl);
        }
      });
    }
  });
}


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});