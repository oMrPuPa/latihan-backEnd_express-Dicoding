import express from "express";

const app = express();
const host = "localhost";
const port = 7272;

app.listen(port , () => {
    console.log(`haii Server aktif di http://${host}:${port}`);
});