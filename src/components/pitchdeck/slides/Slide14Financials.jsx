import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const projections = [
  { yil: "1. Yıl", gelir: 500, color: "#7c3aed" },
  { yil: "2. Yıl", gelir: 1500, color: "#6366f1" },
  { yil: "3. Yıl", gelir: 4000, color: "#3b82f6" },
  { yil: "4. Yıl", gelir: 9000, color: "#06b6d4" },
  { yil: "5. Yıl", gelir: 18000, color: "#10b981" },
];

const kpis = [
  { label: "Brüt Marj", value: "XX%" },
  { label: "Churn Oranı", value: "<X%" },
  { label: "Başabaş Noktası", value: "XX. Ay" },
  { label: "CAC Geri Dönüş", value: "X Ay" },
];

export default function Slide14Financials() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] -bottom-40 -right-20" color="accent" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-green-400/70">Finansal Projeksiyonlar</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-8 leading-tight"
        >
          5 yıllık{" "}
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            büyüme planı
          </span>
        </motion.h2>

        <div className="grid grid-cols-[2fr_1fr] gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-secondary/20 border border-border/30 rounded-2xl p-5"
          >
            <div className="text-xs text-muted-foreground/60 mb-4 uppercase tracking-widest">Gelir Projeksiyonu ($K)</div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={projections} barSize={36}>
                <XAxis dataKey="yil" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ background: "#1e293b", border: "none", borderRadius: 8, color: "#fff", fontSize: 12 }}
                  formatter={(v) => [`$${v}K`, "Gelir"]}
                />
                <Bar dataKey="gelir" radius={[6, 6, 0, 0]}>
                  {projections.map((p, i) => (
                    <Cell key={i} fill={p.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="flex flex-col gap-3">
            {kpis.map((k, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-secondary/20 border border-border/30 rounded-xl p-4 flex flex-col gap-1"
              >
                <div className="text-xs text-muted-foreground/60">{k.label}</div>
                <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">{k.value}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xs text-muted-foreground/50 mt-4 italic"
        >
          * Finansal tahminler hakkında önemli not: Bu projeksiyonlar belirli varsayımlara dayanmaktadır.
        </motion.p>
      </div>
    </SlideWrapper>
  );
}