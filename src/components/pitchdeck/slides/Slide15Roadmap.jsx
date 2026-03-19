import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Map, Check, Circle } from "lucide-react";

const milestones = [
  { quarter: "Q1 2025", title: "MVP Lansmanı", desc: "Çekirdek ürün ve ilk 100 kullanıcı", done: true },
  { quarter: "Q3 2025", title: "Ürün-Pazar Uyumu", desc: "1000+ kullanıcı, NPS > 50", done: true },
  { quarter: "Q1 2026", title: "Series A", desc: "Büyüme finansmanı ve ekip genişletme", done: false },
  { quarter: "Q3 2026", title: "Uluslararası Açılım", desc: "Avrupa pazarına giriş", done: false },
  { quarter: "Q1 2027", title: "Enterprise Ürün", desc: "Kurumsal özellikler ve SLA", done: false },
  { quarter: "Q3 2027", title: "Kârlılık", desc: "Operasyonel kârlılığa ulaşma", done: false },
];

export default function Slide15Roadmap() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] -bottom-32 -right-32" color="primary" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <Map className="w-5 h-5 text-sky-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-sky-400">Yol Haritası</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
        >
          Nereye <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">gidiyoruz?</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-blue-500/30 to-transparent" />
          
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`relative flex items-start gap-4 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-secondary/30 border border-border/30 rounded-xl p-4 backdrop-blur-sm inline-block">
                    <p className="text-xs text-sky-400 font-semibold mb-1">{m.quarter}</p>
                    <h3 className="font-semibold">{m.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {m.done ? (
                    <div className="w-10 h-10 rounded-full bg-sky-500/20 border-2 border-sky-400 flex items-center justify-center">
                      <Check className="w-5 h-5 text-sky-400" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-secondary/50 border-2 border-border/50 flex items-center justify-center">
                      <Circle className="w-4 h-4 text-muted-foreground/40" />
                    </div>
                  )}
                </div>

                <div className="md:hidden flex-1">
                  <p className="text-xs text-sky-400 font-semibold mb-1">{m.quarter}</p>
                  <h3 className="font-semibold">{m.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                </div>
                
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}