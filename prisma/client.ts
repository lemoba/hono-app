import { createRequire } from "node:module";
import type { PrismaClient } from "./generated/client/index.d.ts";
import { formatDate } from "@/helper.ts";

const require = createRequire(import.meta.url);
const Prisma = require("./generated/client/index.cjs");
const prismaClient: PrismaClient = new Prisma.PrismaClient();

export const prisma = prismaClient.$extends({
  result: {
    $allModels: {
      created_at: {
        compute(model: {created_at: Date | string}) {
          return formatDate(model.created_at);
        }
      },
      updated_at: {
        compute(model: {updated_at: Date | string}) {
          return formatDate(model.updated_at);
        }
      }
    }
  }
})

export * from "./generated/client/index.d.ts";
