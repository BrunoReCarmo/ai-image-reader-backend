import TestRoute from "./TestRoute";
import express from "express";

const route = express();

route.use(TestRoute);

export = route;