import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import React from './config/env.js';

const port = 2828

async function server() {

    const app = express()
    app.use(express.json())
    app.use(cors());

    /*
    app.use(cors({
      origin: 'http://example.com', // allow only this origin
      methods: ['GET', 'POST'],     // allow only these methods
    }));
    */

    app.get("/api", (req, res) => {
        res.json({
            "this": "is a GET"
        })
        return res
    })

    app.post("/api/test", async (req, res) => {
        const input = req.body

        return res.json({
            "this": "is a POST",
            mirror: input
        })
    })

    await React(app)

    app.listen(process.env.PORT || port, () => {
        console.log(`http://localhost:${process.env.PORT || port}`);
    })
}

server();
