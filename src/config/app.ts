import "jsr:@std/dotenv/load";

interface AppConfig {
  APP_NAME: string;
  APP_PORT: number;
}

export const appConfig: AppConfig = {
  APP_NAME: Deno.env.get("APP_NAME") || "deno-hono",
  APP_PORT: parseInt(Deno.env.get("APP_PORT") || "8000"),
};
