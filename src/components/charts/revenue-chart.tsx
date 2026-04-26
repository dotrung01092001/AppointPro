import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const revenueData = [
    { month: "May", revenue: 120 },
    { month: "Jun", revenue: 150 },
    { month: "Jul", revenue: 90 },
    { month: "Aug", revenue: 140 },
    { month: "Sep", revenue: 230 },
    { month: "Oct", revenue: 250 },
    { month: "Nov", revenue: 320 },
    { month: "Dec", revenue: 240 },
];

export default function RevenueChart() {
    return (

        <div className="h-50 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                    <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366F1" stopOpacity={0.25} />
                            <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid
                        strokeDasharray="0"
                        vertical={false}
                        stroke="#EEF2F7"
                    />

                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        dy={10}
                    />

                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        width={35}
                    />

                    <Tooltip />

                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#6366F1"
                        strokeWidth={3}
                        fill="url(#revenueGradient)"
                        dot={{
                            r: 4,
                            fill: "#6366F1",
                            stroke: "#ffffff",
                            strokeWidth: 2,
                        }}
                        activeDot={{
                            r: 6,
                            fill: "#6366F1",
                            stroke: "#ffffff",
                            strokeWidth: 2,
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}