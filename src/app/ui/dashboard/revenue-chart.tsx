export default function RevenueChart() {
  // Mock data for demo - matching the first screenshot
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

  const maxRevenue = Math.max(...revenue.map(item => item.revenue));
  const chartHeight = 300;

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="rounded-md bg-white p-4">
          {/* Y-axis labels */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-12 flex flex-col justify-between text-xs text-gray-500">
              <span>$5k</span>
              <span>$4k</span>
              <span>$3k</span>
              <span>$2k</span>
              <span>$1k</span>
              <span>$0k</span>
            </div>
            
            {/* Chart area */}
            <div className="ml-12 relative" style={{ height: `${chartHeight}px` }}>
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="border-t border-gray-200" style={{ height: `${chartHeight / 5}px` }}></div>
                ))}
              </div>
              
              {/* Bars */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-2 h-full">
                {revenue.map((item) => {
                  const barHeight = (item.revenue / maxRevenue) * chartHeight;
                  return (
                    <div key={item.month} className="flex flex-col items-center flex-1 mx-1">
                      <div
                        className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                        style={{ height: `${barHeight}px` }}
                        title={`${item.month}: $${item.revenue.toLocaleString()}`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* X-axis labels */}
            <div className="ml-12 mt-2 flex justify-between px-2">
              {revenue.map((item) => (
                <span key={item.month} className="text-xs text-gray-500 flex-1 text-center">
                  {item.month}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
