import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="h-16 flex justify-between items-center px-8 bg-[#232733] shadow-lg border-b border-[#232733]">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3">
        <img className="w-10 h-10" src="/wallet.png" alt="logo" />
        <span className="text-2xl font-bold text-amber-400 font-mono tracking-wide">
            FIN-TRACE
        </span>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 items-center">
        <button
          onClick={() => navigate("/transactions")}
          className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Transactions
        </button>
        <button
          onClick={() => navigate("/Dash")}
          className="px-4 py-2 rounded bg-amber-400 text-[#232733] font-semibold hover:bg-amber-500 transition"
        >
          Analytics
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
        {/* User avatar or initials */}
        <div className="rounded-full h-12 w-12 bg-[#181C23] flex items-center justify-center ml-2 border border-[#353B48]">
          <span className="text-lg text-white font-bold">
            {localStorage.getItem("username")
              ? localStorage.getItem("username")[0]?.toUpperCase()
              : "U"}
          </span>
        </div>
      </div>
    </div>
  );
};