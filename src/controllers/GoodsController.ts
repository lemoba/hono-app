import { Context } from "hono";
import { prisma } from "#prisma/client";
export const goodsList = (c: Context) => {
  const goods = prisma.sp_goods.count();
  return c.json(goods);
};
