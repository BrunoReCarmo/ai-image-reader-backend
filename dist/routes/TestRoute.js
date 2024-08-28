"use strict";
const express_1 = require("express");
const TestRoute = (0, express_1.Router)();
TestRoute.get('/', (req, res) => {
    return res.send("Hello Word, middleware is working");
});
module.exports = TestRoute;
