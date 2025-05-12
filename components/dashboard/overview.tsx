"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    income: 2400,
    expenses: 1400,
  },
  {
    name: "Feb",
    income: 1398,
    expenses: 980,
  },
  {
    name: "Mar",
    income: 9800,
    expenses: 2900,
  },
  {
    name: "Apr",
    income: 3908,
    expenses: 2000,
  },
  {
    name: "May",
    income: 4800,
    expenses: 2181,
  },
  {
    name: "Jun",
    income: 3800,
    expenses: 2500,
  },
  {
    name: "Jul",
    income: 4300,
    expenses: 2100,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value) => [`$${value}`, ""]} labelFormatter={(label) => `Month: ${label}`} />
        <Bar dataKey="income" fill="#4CAF50" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default { Overview }
