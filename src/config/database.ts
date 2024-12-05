interface DatabaseConfig  { 
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
}

interface RedisConfig {
    REDIS_HOST: string;
    REDIS_PORT: number;
    REDIS_PASSWORD: string;
}

export const databaseConfig: DatabaseConfig = {
    DB_HOST: Deno.env.get("DB_HOST") || "localhost",
    DB_PORT: parseInt(Deno.env.get("DB_PORT") || "3306"),
    DB_USER: Deno.env.get("DB_USER") || "root",
    DB_PASSWORD: Deno.env.get("DB_PASSWORD") || "admin",
    DB_NAME: Deno.env.get("DB_CONNECTION") || "mysql",
};

export const redisConfig: RedisConfig = {
    REDIS_HOST: Deno.env.get("REDIS_HOST") || "localhost",
    REDIS_PORT: parseInt(Deno.env.get("REDIS_PORT") || "6379"),
    REDIS_PASSWORD: Deno.env.get("REDIS_PASSWORD") || ""
};