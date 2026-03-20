import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { Clock, Users, TrendingUp, DollarSign } from "lucide-react";

const metrics = [
  { icon: DollarSign, label: "Yatırım Öncesi Değerleme", value: "$XXM", color: "text-purple-400" },
  { icon: Clock, label: "Yetecek Süre (Runway)", value: "XX Ay", color: "text-blue-400" },
  { icon: Users, label: "Mevcut Yatırımcılar", value: "XX", color: "text-cyan-400" },
  { icon: TrendingUp, label: "Kapanış Tarihi", value: "XX/XXXX", color: "text-green-400" },
];

export default function Slide18AskAmount() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[700px] h-[700px] -top-40 -left-40" color="primary" />
      <GradientOrb className="w-[400px] h-[400px] -bottom-20 -right-20" color="accent" />
      <div className="w-full max-w-5xl z-10 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400/70">Yatırım Talebi</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.8 }} className="mb-4">
          <div className="text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">$XXM</div>
          <div className="text-2xl font-semibold text-muted-foreground mt-2">Ne kadar yatırım istiyorsunuz?</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-12">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-semibold">Tur Adı: Seri A / Tohum / Seri B</span>
        </motion.div>
        <div className="grid grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="bg-secondary/20 border border-border/30 rounded-2xl p-5 flex flex-col items-center gap-3 hover:scale-105 transition-transform">
              <m.icon className={`w-6 h-6 ${m.color}`} />
              <div className={`text-2xl font-black ${m.color}`}>{m.value}</div>
              <div className="text-xs text-muted-foreground text-center">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}