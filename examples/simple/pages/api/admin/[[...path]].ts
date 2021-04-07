import type { NextApiRequest, NextApiResponse } from 'next'
import Admin from '../../../configs/admin'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const path = request.query.path

  return response.status(201).json(Admin.getRoute(path));
}