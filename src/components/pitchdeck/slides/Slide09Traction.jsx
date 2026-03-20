import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import StatCard from "../StatCard";

const data = [
  { ay: "Oca", mrr: 0 },
  { ay: "Şub", mrr: 5 },
  { ay: "Mar", mrr: 12 },
  { ay: "Nis", mrr: 22 },
  { ay: "May", mrr: 38 },
  { ay: "Haz", mrr: 60 },
  { ay: "Tem", mrr: 90 },
  { ay: "Ağu", mrr: 130 },
];

export default function Slide09Traction() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] -bottom-40 -left-20" color="green" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-green-400/70">Traction</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-8 leading-tight"
        >
          Büyüme{" "}
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            başladı
          </span>
        </motion.h2>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Metrik 1", value: "X.XXX", sub: "Ne?" },
            { label: "Metrik 2", value: "$XX.XXX", sub: "Ne?" },
            { label: "Metrik 3", value: "XX%", sub: "Ne?" },
            { label: "Metrik 4", value: "XX", sub: "Ne?" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <StatCard label={s.label} value={s.value} sub={s.sub} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-secondary/20 border border-border/30 rounded-2xl p-5"
        >
          <div className="text-xs text-muted-foreground/60 mb-3 uppercase tracking-widest">Büyüme Eğrisi</div>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="tGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="ay" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip
                contentStyle={{ background: "#1e293b", border: "none", borderRadius: 8, color: "#fff", fontSize: 12 }}
              />
              <Area type="monotone" dataKey="mrr" stroke="#10b981" strokeWidth={2.5} fill="url(#tGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-muted-foreground/60 mt-4 italic"
        >
          Başka önemli gelişmeler var mı? Büyük bir ortaklık, ödül veya basın haberi buraya eklenebilir.
        </motion.p>
      </div>
    </SlideWrapper>
  );
}