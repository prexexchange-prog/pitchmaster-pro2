import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Banknote } from "lucide-react";

export default function Slide18AskAmount() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" />
      
      <div className="max-w-4xl w-full z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Banknote className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-400">Yatırım Talebi</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              $5M
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Series A Yatırım Turu
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Pre-Money Değerleme", value: "$25M" },
            { label: "Hedef Kapanış", value: "Q2 2026" },
            { label: "Mevcut Yatırımcılar", value: "3 VC" },
            { label: "Runway", value: "24 Ay" },
          ].map((item, i) => (
            <div key={i} className="bg-secondary/30 border border-border/30 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="text-xl font-bold">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}