import { NextApiRequest, NextApiResponse } from 'next';
import Database from '../../../database/db';

export default async function getProducts(req:NextApiRequest, res:NextApiResponse) {
  const { id } = req.query;
  const entry = await Database.getById(id as string);
  res.status(200).json(entry);
}
