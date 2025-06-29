import React, { useEffect, useState } from "react";
import { Pie, Line, Bar } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend } from "chart.js";
import { Appbar } from "../component/Appbar";
import {RecentTransactionsTable} from "../component/Rec_transaction"

Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);

const API_URL = `${import.meta.env.VITE_APP_BACKEND_URL}/api/transactions/`;

export const Dash = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setTransactions(Array.isArray(data) ? data : []);
    };
    fetchTransactions();
  }, []);

 // Pie Chart: Paid vs Unpaid
const paidCount = transactions.filter(t => t.status?.toLowerCase() === "paid").length;
const unpaidCount = transactions.filter(t => t.status?.toLowerCase() !== "pending").length;

const pieData = {
  labels: ["Paid", "pending"],
  datasets: [
    {
      data: [paidCount, unpaidCount],
      backgroundColor: ["#22c55e", "#f59e42"],
      borderWidth: 1,
    },
  ],
};

// Line Chart: Total Amount per Day
const dateMap = {};
transactions.forEach(t => {
  if (!t.date) return;
  const dateStr = new Date(t.date).toISOString().slice(0, 10); // YYYY-MM-DD
  dateMap[dateStr] = (dateMap[dateStr] || 0) + (Number(t.amount) || 0);
});
const lineLabels = Object.keys(dateMap).sort();
const lineData = {
  labels: lineLabels,
  datasets: [
    {
      label: "Total Amount",
      data: lineLabels.map(date => dateMap[date]),
      fill: false,
      borderColor: "#22c55e",
      backgroundColor: "#22c55e",
      tension: 0.3,
    },
  ],
};

   // Bar Chart: Sum of Amount per Category
const categories = [...new Set(transactions.map(t => t.category))];
const barData = {
  labels: categories,
  datasets: [
    {
      label: "Total Amount per Category",
      data: categories.map(cat =>
        transactions
          .filter(t => t.category === cat)
          .reduce((sum, t) => sum + (Number(t.amount) || 0), 0)
      ),
      backgroundColor: "#38bdf8",
    },
  ],
};

// Clustered Bar Chart: Paid vs Pending Amount per User
const users = [...new Set(transactions.map(t => t.user_id))];
const paidAmounts = users.map(user =>
  transactions
    .filter(t => t.user_id === user && t.status?.toLowerCase() === "paid")
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0)
);
const pendingAmounts = users.map(user =>
  transactions
    .filter(t => t.user_id === user && t.status?.toLowerCase() === "pending")
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0)
);

const clusteredBarData = {
  labels: users,
  datasets: [
    {
      label: "Paid Amount",
      data: paidAmounts,
      backgroundColor: "#22c55e",
    },
    {
      label: "Pending Amount",
      data: pendingAmounts,
      backgroundColor: "#f59e42",
    },
  ],
};

  return (
  <div className="min-h-screen bg-[#181C23] p-8">
    <Appbar />

    <h2 className="text-3xl font-bold text-white mb-8">Dashboard Analytics</h2>

    {/* Row 1: Recent Transactions + Pie Chart */}
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="flex-1">
        <RecentTransactionsTable transactions={transactions} count={5} />
      </div>
      <div className="flex items-center justify-center flex-1 min-w-[250px]">
        <div className="bg-[#232733] rounded-lg p-4 shadow-lg flex flex-col items-center w-full">
          <h3 className="text-lg text-white mb-4">Paid vs Unpaid</h3>
          <div style={{ width: 180, height: 180 }}>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>

    {/* Row 2: Line Chart full width */}
    <div className="bg-[#232733] rounded-lg p-6 shadow-lg flex flex-col items-center w-full mb-8">
      <h3 className="text-lg text-white mb-4">Transaction Amount Over Time</h3>
      <div className="w-full" style={{ minHeight: 300 }}>
        <Line data={lineData} />
      </div>
    </div>

    {/* Row 3: Category Bar + Clustered Bar */}
    <div className="flex flex-col md:flex-row gap-8">
      <div className="bg-[#232733] rounded-lg p-6 shadow-lg flex flex-col items-center flex-1">
        <h3 className="text-lg text-white mb-4">Transactions by Category</h3>
        <Bar data={barData} />
      </div>
      <div className="bg-[#232733] rounded-lg p-6 shadow-lg flex flex-col items-center flex-1">
        <h3 className="text-lg text-white mb-4">Paid vs Pending Amount per User</h3>
        <Bar
          data={clusteredBarData}
          options={{
            responsive: true,
            plugins: { legend: { labels: { color: "#fff" } } },
            scales: { x: { ticks: { color: "#fff" } }, y: { ticks: { color: "#fff" } } }
          }}
        />
      </div>
    </div>
  </div>
);
};

