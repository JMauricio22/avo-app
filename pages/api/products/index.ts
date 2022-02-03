import { NextApiRequest, NextApiResponse } from 'next';
import Database from '../../../database/db';

export default async function getProducts(req:NextApiRequest, res:NextApiResponse) {
  const data = await Database.getAll();
  res.status(200).json({ data });
}
