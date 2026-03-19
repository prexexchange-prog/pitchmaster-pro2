import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import StatCard from "../StatCard";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { month: "Oca", mrr: 8 },
  { month: "Şub", mrr: 15 },
  { month: "Mar", mrr: 28 },
  { month: "Nis", mrr: 42 },
  { month: "May", mrr: 65 },
  { month: "Haz", mrr: 95 },
  { month: "Tem", mrr: 130 },
  { month: "Ağu", mrr: 180 },
  { month: "Eyl", mrr: 240 },
  { month: "Eki", mrr: 310 },
  { month: "Kas", mrr: 400 },
  { month: "Ara", mrr: 520 },
];

export default function Slide09Traction() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[400px] h-[400px] -top-20 right-20" color="green" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <TrendingUp className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-emerald-400">Büyüme</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-10"
        >
          Hızla <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">büyüyoruz.</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard value="520K" label="Aylık Gelir (MRR)" delay={0.3} />
          <StatCard value="2,400+" label="Aktif Kullanıcı" delay={0.4} />
          <StatCard value="%15" label="Aylık Büyüme" delay={0.5} />
          <StatCard value="%95" label="Müşteri Tutma" delay={0.6} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-secondary/30 border border-border/30 rounded-2xl p-6 backdrop-blur-sm h-48"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}K`} />
              <Tooltip
                contentStyle={{ background: "#1e1b2e", border: "1px solid #2d2b3d", borderRadius: "12px", fontSize: "12px" }}
                labelStyle={{ color: "#9ca3af" }}
              />
              <Area type="monotone" dataKey="mrr" stroke="#34d399" strokeWidth={2} fill="url(#colorMrr)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}