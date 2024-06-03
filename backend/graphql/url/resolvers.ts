import { z } from 'zod'
import { urlInputSchema } from '../../validation/url'
import URLService from '../../services/url'

const mutations = {
  createShortUrl: async (
    _: any,
    data: { url: z.infer<typeof urlInputSchema> }
  ) => {
    const res = await URLService.createShortUrl(data.url)
    return res.shortUrl
  },
}

const queries = {}

export const resolvers = { mutations, queries }
