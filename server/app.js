import express from 'express';
import cors from 'cors';
import { React, Dotenv } from './config/env.js';
Dotenv()

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

    // BACKEND CODE HERE
    // ----------------------------------------------------------------------------------------

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

    // ----------------------------------------------------------------------------------------
    // END BACKEND

    await React(app)

    app.listen(process.env.PORT || port, () => {
        console.log(`http://localhost:${process.env.PORT || port}`);
    })
}

server();
