import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

const data = [
  { year: "2024", revenue: 0.6, color: "#6366f1" },
  { year: "2025", revenue: 3.2, color: "#8b5cf6" },
  { year: "2026P", revenue: 12, color: "#a78bfa" },
  { year: "2027P", revenue: 35, color: "#c4b5fd" },
  { year: "2028P", revenue: 80, color: "#ddd6fe" },
];

const metrics = [
  { label: "Brüt Kâr Marjı", value: "%82" },
  { label: "LTV/CAC Oranı", value: "5.2x" },
  { label: "Aylık Churn", value: "<%2" },
  { label: "Breakeven", value: "Q3 2027" },
];

export default function Slide14Financials() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[400px] h-[400px] top-10 -right-20" color="primary" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <BarChart3 className="w-5 h-5 text-indigo-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-400">Finansal Projeksiyonlar</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-10"
        >
          Gelir <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">projeksiyonu.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-secondary/30 border border-border/30 rounded-2xl p-6 backdrop-blur-sm"
          >
            <p className="text-xs text-muted-foreground mb-4">Gelir (Milyon $)</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="year" stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}M`} />
                  <Tooltip
                    contentStyle={{ background: "#1e1b2e", border: "1px solid #2d2b3d", borderRadius: "12px", fontSize: "12px" }}
                    formatter={(value) => [`$${value}M`, "Gelir"]}
                  />
                  <Bar dataKey="revenue" radius={[8, 8, 0, 0]}>
                    {data.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            {metrics.map((m, i) => (
              <div key={i} className="bg-secondary/30 border border-border/30 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
}