import { Hono } from 'hono'
import { apiRouter } from '@/routes/api.ts'
import { appConfig } from '@/config/index.ts'

const app = new Hono()

app.route('/api', apiRouter)

Deno.serve({
    port: appConfig.APP_PORT,
    hostname: '127.0.0.1'
}, app.fetch)