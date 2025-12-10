import express from 'express';
import { React, Dotenv } from './config/env.js';
Dotenv()

const port = 2828

async function server() {
    const app = express()
    app.use(express.json())

    // BACKEND CODE HERE
    // ----------------------------------------------------------------------------------------

    app.get("/api", (req, res) => {
        res.json({
            "Hello": "World"
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
