import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { weekSummary } from '../../functions/week-summary'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/week-summary', async () => {
    const { summary } = await weekSummary()

    return { summary }
  })
}
