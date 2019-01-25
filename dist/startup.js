"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class startup {
    constructor() {
        this.app = express();
        this.routes();
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ version: '0.0.1' });
        });
    }
}
exports.default = new startup();
