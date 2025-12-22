import express from 'express';
import { React, Dotenv } from './config/env.js';
import os from 'os';
import QRCode from 'qrcode';
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

    function getLocalIP() {
        const interfaces = os.networkInterfaces();
        for (const name of Object.keys(interfaces)) {
            for (const iface of interfaces[name]) {
                if (iface.family === 'IPv4' && !iface.internal) {
                    return iface.address;
                }
            }
        }
        return 'localhost';
    }
    const actualPort = process.env.PORT || port;
    app.listen(actualPort, '0.0.0.0', async () => {
        const ip = getLocalIP();
        const url = `http://${ip}:${actualPort}`;
        console.log(`Server running at:`);
        console.log(`- http://localhost:${actualPort}`);
        console.log(`- ${url}  <-- access from other devices`);
        try {
            const qr = await QRCode.toString(url, { type: 'terminal', small: true });
            console.log(qr);
        } catch (err) {
            console.error('Failed to generate QR code:', err);
        }
    });
}

server();
