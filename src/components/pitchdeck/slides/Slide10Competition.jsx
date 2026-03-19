import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Swords, Check, X } from "lucide-react";

const competitors = [
  { feature: "AI Destekli Otomasyon", us: true, comp1: false, comp2: false },
  { feature: "Gerçek Zamanlı Analitik", us: true, comp1: true, comp2: false },
  { feature: "Özel Entegrasyonlar", us: true, comp1: false, comp2: true },
  { feature: "Mobil Uygulama", us: true, comp1: true, comp2: true },
  { feature: "7/24 Destek", us: true, comp1: false, comp2: false },
  { feature: "Uygun Fiyat", us: true, comp1: false, comp2: true },
];

const Cell = ({ value }) => (
  value ? <Check className="w-5 h-5 text-emerald-400" /> : <X className="w-5 h-5 text-muted-foreground/30" />
);

export default function Slide10Competition() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[400px] h-[400px] top-20 -right-20" color="primary" />
      
      <div className="max-w-4xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <Swords className="w-5 h-5 text-orange-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-orange-400">Rekabet Analizi</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
        >
          Farkımız <span className="text-muted-foreground/40">açık.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-secondary/30 border border-border/30 rounded-2xl overflow-hidden backdrop-blur-sm"
        >
          <div className="grid grid-cols-4 gap-4 p-4 border-b border-border/30 text-sm font-semibold">
            <span>Özellik</span>
            <span className="text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Biz</span>
            <span className="text-center text-muted-foreground">Rakip A</span>
            <span className="text-center text-muted-foreground">Rakip B</span>
          </div>
          {competitors.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="grid grid-cols-4 gap-4 p-4 border-b border-border/10 last:border-0 text-sm"
            >
              <span className="text-muted-foreground">{row.feature}</span>
              <div className="flex justify-center"><Cell value={row.us} /></div>
              <div className="flex justify-center"><Cell value={row.comp1} /></div>
              <div className="flex justify-center"><Cell value={row.comp2} /></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}