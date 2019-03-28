"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const informacionController_1 = __importDefault(require("../controllers/informacionController"));
class InformacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', informacionController_1.default.list);
        this.router.post('/', informacionController_1.default.create);
        this.router.put('/:id', informacionController_1.default.update);
    }
}
const informacionRoutes = new InformacionRoutes();
exports.default = informacionRoutes.router;
