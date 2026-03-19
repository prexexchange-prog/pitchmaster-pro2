import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Lightbulb, Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  { icon: Zap, title: "Otomasyon", desc: "Yapay zeka destekli süreç otomasyonu" },
  { icon: Shield, title: "Güvenlik", desc: "Kurumsal düzey veri güvenliği" },
  { icon: BarChart3, title: "Analitik", desc: "Gerçek zamanlı iş zekası" },
];

export default function Slide03Solution() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] top-1/2 -translate-y-1/2 -right-40" color="primary" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <Lightbulb className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-400">Çözüm</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Tek platform,<br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">sonsuz olasılık.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl"
        >
          Tüm iş süreçlerinizi tek bir platformda birleştiren, AI destekli çözümümüzle tanışın.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="group relative bg-secondary/30 border border-border/30 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                <item.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}