import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const rawData = [
  { month: "May", total: 320, completed: 250 },
  { month: "Jun", total: 280, completed: 180 },
  { month: "Jul", total: 200, completed: 150 },
  { month: "Aug", total: 300, completed: 220 },
  { month: "Sep", total: 210, completed: 160 },
  { month: "Oct", total: 420, completed: 310 },
  { month: "Nov", total: 330, completed: 250 },
];

const appointmentData = rawData.map((item) => ({
  ...item,
  pending: item.total - item.completed,
}));

export default function AppointmentsOverview() {
  return (


      <div className="h-50 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={appointmentData} barCategoryGap="35%">
            <CartesianGrid vertical={false} stroke="#EEF2F7" />

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

            <Bar
              dataKey="completed"
              stackId="appointments"
              fill="#6366F1"
              barSize={45}
              radius={[0, 0, 0, 0]}
            />

            <Bar
              dataKey="pending"
              stackId="appointments"
              fill="#C4B5FD"
              barSize={45}
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
}