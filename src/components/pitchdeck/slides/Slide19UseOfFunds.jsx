import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { PieChart as PieIcon } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const funds = [
  { name: "Ürün Geliştirme", value: 40, color: "#8b5cf6" },
  { name: "Satış & Pazarlama", value: 30, color: "#3b82f6" },
  { name: "Operasyonlar", value: 15, color: "#06b6d4" },
  { name: "Genel & Yönetim", value: 15, color: "#6366f1" },
];

export default function Slide19UseOfFunds() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[400px] h-[400px] top-20 -left-20" color="accent" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <PieIcon className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">Fonların Kullanımı</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
        >
          Yatırımı nasıl <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">kullanacağız?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="h-72"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={funds}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {funds.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "#1e1b2e", border: "1px solid #2d2b3d", borderRadius: "12px", fontSize: "12px" }}
                  formatter={(value) => [`%${value}`, ""]}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="space-y-4">
            {funds.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: f.color }} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{f.name}</span>
                    <span className="font-bold text-lg">{f.value}%</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-1.5 mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${f.value}%` }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: f.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}