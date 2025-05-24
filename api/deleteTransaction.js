import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' });

  const { id } = req.query;

  try {
    const deleted = await prisma.transaction.delete({ where: { id: parseInt(id) } });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete transaction' });
  }
}
