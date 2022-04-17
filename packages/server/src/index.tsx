import React from "react";
import express from "express";
import { App } from "client";
import { renderToPipeableStream } from "react-dom/server";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    const stream = renderToPipeableStream(<App />, {
        onShellReady: () => {
            res.setHeader("Content-type", "text/html");
            stream.pipe(res);
        },
        bootstrapScriptContent: "var a = 5; console.log(a);",
    });
});

app.listen(port, () => {
    console.log(`Listening port ${port}`);
});
