import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";

export default function Slide01Cover() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[700px] h-[700px] -top-60 -left-60" color="primary" />
      <GradientOrb className="w-[500px] h-[500px] -bottom-40 -right-40" color="accent" />
      <GradientOrb className="w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="warm" />

      <div className="text-center z-10 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Yatırım Sunumu · 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-black tracking-tight mb-6 leading-none"
        >
          <span className="bg-gradient-to-br from-white via-white/90 to-white/50 bg-clip-text text-transparent">
            Şirket
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Adı
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-4 max-w-2xl mx-auto"
        >
          Ürününüzü tek cümleyle anlatan, dikkat çekici bir slogan buraya gelir
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base text-muted-foreground/50 mb-14 max-w-xl mx-auto"
        >
          Ne yapıyorsunuz? Müşteri teklifinden ödeme alımına kadar tüm adımları yönetiyor, ekiplerle görev paylaşımı ve zaman takibi yapıyorsunuz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {[
            { label: "Web Sitesi", value: "sirket.io" },
            { label: "Aşama", value: "Seri A" },
            { label: "Konum", value: "İstanbul, TR" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-xs text-muted-foreground/40 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-sm text-muted-foreground font-medium">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}