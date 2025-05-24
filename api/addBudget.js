import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, amount } = req.body;

  try {
    const budget = await prisma.budget.create({
      data: { name, amount: parseFloat(amount) },
    });
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add budget' });
  }
}
