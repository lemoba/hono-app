import { Hono } from "hono";

export const apiRouter = new Hono();

apiRouter.get("/up", (c) => {
    return c.text("ok");
});