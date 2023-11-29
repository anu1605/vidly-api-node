import { info } from "winston";
import express from "express";
import { get } from "config";
const app = express();

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || get("port");
const server = app.listen(port, () => info(`Listening on port ${port}...`));

export default server;
