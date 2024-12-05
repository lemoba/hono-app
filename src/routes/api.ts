import { Hono } from "hono";
import { prisma } from "#prisma/client";

export const apiRouter = new Hono();

apiRouter.get("up", (c) => {
  return c.text("ok");
});

apiRouter.get("goods", (c) => {
  // const goods = await prisma.sp_goods.findMany();
  return c.json({ "a": 1, "b": 2 })
});
