import { NextApiRequest, NextApiResponse } from 'next'
import { fetchPolitician } from '../../domain/politician'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const a = await fetchPolitician(139064)

  console.log({a})
  
  res.status(200).json(a)
}