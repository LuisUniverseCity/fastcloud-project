import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function React(app) {
    const distPath = path.resolve(__dirname, '../dist');

    app.use(express.static(distPath));

    app.use((req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
}

export function Dotenv() {
    dotenv.config({ path: './.env' });
}