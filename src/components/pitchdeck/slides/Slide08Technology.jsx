import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Cpu, ArrowRight } from "lucide-react";

const steps = [
  { step: "01", title: "Veri Toplama", desc: "API ve entegrasyonlar aracılığıyla veri akışı" },
  { step: "02", title: "AI İşleme", desc: "Makine öğrenmesi modelleri ile analiz" },
  { step: "03", title: "Otomasyon", desc: "Akıllı iş akışları ve otomatik aksiyonlar" },
  { step: "04", title: "İçgörüler", desc: "Gerçek zamanlı dashboard ve raporlama" },
];

export default function Slide08Technology() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] top-1/4 -left-32" color="accent" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <Cpu className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-cyan-400">Teknoloji</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-16"
        >
          Nasıl <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">çalışır?</span>
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="relative"
            >
              <div className="bg-secondary/30 border border-border/30 rounded-2xl p-6 backdrop-blur-sm h-full">
                <span className="text-5xl font-black text-cyan-500/10">{item.step}</span>
                <h3 className="font-semibold text-lg mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-5 h-5 text-cyan-500/30 -translate-y-1/2 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}