function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700 hover:scale-105 transition duration-300">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;