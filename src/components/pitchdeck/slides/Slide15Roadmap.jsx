import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { CheckCircle2, Circle } from "lucide-react";

const milestones = [
  { period: "1. Dönem", when: "Ne Zaman?", title: "Bu dönemde ne yapacaksınız?", desc: "Ürün geliştirme, ilk kullanıcı edinimi veya MVP lansmanı gibi temel hedefleri buraya ekleyin.", done: true },
  { period: "2. Dönem", when: "Ne Zaman?", title: "Bu dönemde ne yapacaksınız?", desc: "Büyüme hızlandırma, yeni özellikler veya pazar genişlemesi. Hedef metrikleri belirtin.", done: true },
  { period: "3. Dönem", when: "Ne Zaman?", title: "Bu dönemde ne yapacaksınız?", desc: "Yeni pazarlara giriş, ürün olgunlaşması veya büyük ortaklıklar. Somut hedefler ekleyin.", done: false },
  { period: "4. Dönem", when: "Ne Zaman?", title: "Bu dönemde ne yapacaksınız?", desc: "Uzun vadeli vizyon: uluslararası genişleme, halka arz hazırlığı veya yeni gelir kolları.", done: false },
];

export default function Slide15Roadmap() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[600px] h-[600px] -top-20 -right-40" color="primary" />
      <div className="w-full max-w-6xl z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="mb-3">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400/70">Yol Haritası</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-black mb-10 leading-tight">
          Nereye{" "}<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">gidiyoruz?</span>
        </motion.h2>
        <div className="relative">
          <div className="absolute left-[88px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-border/20" />
          <div className="flex flex-col gap-6">
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.12 }} className="flex items-start gap-6">
                <div className="w-16 shrink-0 text-right">
                  <div className="text-xs font-bold text-muted-foreground/60">{m.period}</div>
                  <div className="text-xs text-muted-foreground/40">{m.when}</div>
                </div>
                <div className="shrink-0 z-10">
                  {m.done ? <CheckCircle2 className="w-6 h-6 text-green-400" /> : <Circle className="w-6 h-6 text-muted-foreground/30" />}
                </div>
                <div className={`flex-1 rounded-xl border p-5 ${m.done ? "bg-green-500/5 border-green-500/20" : "bg-secondary/20 border-border/30"}`}>
                  <div className="text-sm font-bold text-white/90 mb-1">{m.title}</div>
                  <div className="text-xs text-muted-foreground">{m.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}