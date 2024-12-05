import { Hono } from "hono";
import { prisma } from "#prisma/client";
import { formatDate } from "@/helper.ts";

export const apiRouter = new Hono();

apiRouter.get("up", (c) => {
  return c.text("ok");
});

apiRouter.get("goods", async (c) => {
  const goods = await prisma.sp_goods.findMany();
  return c.json(goods);
});
