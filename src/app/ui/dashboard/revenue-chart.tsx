export default async function RevenueChart() {
  // Mock data for demo
  const revenue = [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 1800 },
    { month: 'Mar', revenue: 2200 },
    { month: 'Apr', revenue: 2500 },
    { month: 'May', revenue: 3200 },
    { month: 'Jun', revenue: 3500 },
    { month: 'Jul', revenue: 3700 },
    { month: 'Aug', revenue: 4200 },
    { month: 'Sep', revenue: 3800 },
    { month: 'Oct', revenue: 4100 },
    { month: 'Nov', revenue: 4500 },
    { month: 'Dec', revenue: 4800 },
  ];

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div className="flex flex-col items-center gap-2">
            {revenue.map((month) => (
              <div key={month.month} className="flex flex-col items-center">
                <div 
                  className="w-8 bg-blue-500 rounded-t"
                  style={{ height: `${(month.revenue / 5000) * 100}px` }}
                ></div>
                <span className="text-xs text-gray-500 mt-1">{month.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
