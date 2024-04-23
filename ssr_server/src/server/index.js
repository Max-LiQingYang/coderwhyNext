const express = require("express");
import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../app";
import { Provider } from "react-redux";
import store from "../store";

const server = express();

server.use(express.static("build")); // 静态资源部署

server.get("/", (req, res) => {
  const AppHtmlString = ReactDOM.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <div id="root">${AppHtmlString}</div>
            <script src="client/client_bundle.js"></script>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
