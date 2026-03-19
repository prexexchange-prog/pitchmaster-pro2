import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Gem, ArrowRight } from "lucide-react";

const values = [
  { before: "Haftalarca süren süreçler", after: "Dakikalar içinde tamamlanıyor", metric: "10x Hızlı" },
  { before: "Dağınık veri ve raporlar", after: "Tek merkezi dashboard", metric: "%95 Doğruluk" },
  { before: "Yüksek operasyonel maliyet", after: "Otomatik süreç yönetimi", metric: "%60 Tasarruf" },
];

export default function Slide04ValueProp() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[600px] h-[600px] -bottom-40 left-1/2 -translate-x-1/2" color="accent" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <Gem className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">Değer Önerisi</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
        >
          Neden <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">biz?</span>
        </motion.h2>

        <div className="space-y-6">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="flex items-center gap-6 bg-secondary/30 border border-border/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex-1">
                <p className="text-muted-foreground/60 line-through text-sm">{item.before}</p>
                <p className="text-foreground font-medium mt-1">{item.after}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground/30 hidden md:block" />
              <div className="text-right min-w-[120px]">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {item.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}