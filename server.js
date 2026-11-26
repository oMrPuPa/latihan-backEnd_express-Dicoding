import express from "express";
import routes from "./routes.js";

const app = express();
const host = "localhost";
const port = 7272;
app.use('/', routes);
app.listen(port , () => {
    console.log(`haii Server aktif di http://${host}:${port}`);
});