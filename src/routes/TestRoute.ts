import { Router, Request, Response } from "express";

const TestRoute = Router();

TestRoute.get('/', (req: Request, res: Response) => {
    return res.send("Hello Word, middleware is working")
});

export = TestRoute;