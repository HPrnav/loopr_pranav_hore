 export const RecentTransactionsTable = ({ transactions, count = 5 }) => {
  // Sort by date descending and take the most recent `count` transactions
  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);

  return (
    <div className="bg-[#232733] rounded-lg shadow-lg p-4 min-w-[340px]">
      <h3 className="text-lg text-white mb-3">Recent Transactions</h3>
      <table className="min-w-full">
        <thead>
          <tr className="text-[#A3AED0] text-left">
            <th className="py-2 px-2">Name</th>
            <th className="py-2 px-2">Date</th>
            <th className="py-2 px-2">Amount</th>
            <th className="py-2 px-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentTransactions.map((tx) => (
            <tr key={tx.id || tx._id}>
              <td className="py-1 px-2 text-white">{tx.user_id}</td>
              <td className="py-1 px-2 text-white">
                {tx.date ? new Date(tx.date).toLocaleDateString() : ""}
              </td>
              <td
                className={`py-1 px-2 font-semibold ${
                  tx.amount > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {tx.amount > 0 ? "+" : ""}
                {tx.amount?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className="py-1 px-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    tx.status?.toLowerCase() === "paid" ||
                    tx.status?.toLowerCase() === "completed"
                      ? "bg-green-600 text-white"
                      : tx.status?.toLowerCase() === "pending"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};