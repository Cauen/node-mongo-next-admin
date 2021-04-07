import type { NextApiRequest, NextApiResponse } from 'next'
import Admin from '../../../configs/admin'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  return Admin.handleApiRequest(request, response)
}