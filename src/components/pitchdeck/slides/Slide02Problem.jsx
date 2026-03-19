import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown, Ban } from "lucide-react";

const problems = [
  { icon: Clock, title: "Zaman Kaybı", desc: "Şirketler her yıl yüzlerce saat manuel süreçlere harcıyor" },
  { icon: TrendingDown, title: "Verimlilik Düşüklüğü", desc: "Mevcut araçlar %40'a kadar verimlilik kaybına neden oluyor" },
  { icon: Ban, title: "Entegrasyon Sorunları", desc: "Sistemler arası veri akışı kopuk ve güvenilmez" },
];

export default function Slide02Problem() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] -top-32 -left-32" color="warm" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-amber-400">Problem</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
        >
          Mevcut çözümler<br />
          <span className="text-muted-foreground/40">yetersiz kalıyor.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl"
        >
          İşletmelerin %78'i mevcut dijital araçlarından memnun değil.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="bg-secondary/30 border border-border/30 rounded-2xl p-6 backdrop-blur-sm hover:border-amber-500/20 transition-colors"
            >
              <item.icon className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}