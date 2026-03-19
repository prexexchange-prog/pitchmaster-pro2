import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Target, Users, Megaphone, Handshake } from "lucide-react";

const channels = [
  { icon: Megaphone, title: "Dijital Pazarlama", desc: "SEO, SEM, sosyal medya kampanyaları ile organik ve ücretli büyüme", pct: "40%" },
  { icon: Users, title: "İçerik Pazarlama", desc: "Blog, webinar, whitepaper ile düşünce liderliği oluşturma", pct: "25%" },
  { icon: Handshake, title: "Stratejik Ortaklıklar", desc: "Kanal partnerleri ve entegrasyon ortaklıkları", pct: "20%" },
  { icon: Target, title: "Outbound Satış", desc: "Enterprise segmentine hedefli satış aktiviteleri", pct: "15%" },
];

export default function Slide11GoToMarket() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[400px] h-[400px] -bottom-20 left-1/3" color="primary" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <Target className="w-5 h-5 text-violet-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-violet-400">Go-to-Market</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
        >
          Pazara <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">giriş stratejisi.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {channels.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="bg-secondary/30 border border-border/30 rounded-2xl p-6 backdrop-blur-sm flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-violet-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <span className="text-sm font-bold text-violet-400">{item.pct}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}