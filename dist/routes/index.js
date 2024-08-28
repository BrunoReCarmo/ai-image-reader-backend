"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const TestRoute_1 = __importDefault(require("./TestRoute"));
const express_1 = __importDefault(require("express"));
const route = (0, express_1.default)();
route.use(TestRoute_1.default);
module.exports = route;
