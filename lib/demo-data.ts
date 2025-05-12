const BASE_URL = "https://defa2d00-7984-43c3-a39d-d95c7188609a-00-1wn79jhth8xj3.kirk.replit.dev:3000";
export const demoDataService = {
  getTransactions: async () => {
    const res = await fetch(`${BASE_URL}/transactions`);
    return res.json();
  },
  addTransaction: async (transaction: any) => {
    const res = await fetch(`${BASE_URL}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });
    return res.json();
  },
  updateTransaction: async (id: string, transaction: any) => {
    const res = await fetch(`${BASE_URL}/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });
    return res.json();
  },
  deleteTransaction: async (id: string) => {
    const res = await fetch(`${BASE_URL}/transactions/${id}`, {
      method: "DELETE",
    });
    return res.ok;
  },
};
