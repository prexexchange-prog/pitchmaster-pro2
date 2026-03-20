import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { Mail, Globe, Linkedin } from "lucide-react";

export default function Slide20Closing() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" />
      <GradientOrb className="w-[400px] h-[400px] -top-20 -right-20" color="accent" />
      <GradientOrb className="w-[300px] h-[300px] -bottom-20 -left-20" color="warm" />

      <div className="text-center z-10 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400/70">Teşekkürler</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
        >
          <span className="bg-gradient-to-br from-white via-white/90 to-white/50 bg-clip-text text-transparent">
            Birlikte
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            büyüyelim.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-xl text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Kapanış mesajınızı buraya yazın. Yatırımcıyı harekete geçirecek, vizyon odaklı ve kısa bir son söz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { icon: Mail, label: "E-posta", value: "ornek@sirket.io" },
            { icon: Globe, label: "Web", value: "sirket.io" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/company/..." },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-3 bg-secondary/20 border border-border/30 rounded-xl px-5 py-3">
              <c.icon className="w-4 h-4 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground/60">{c.label}</div>
                <div className="text-sm text-white/90 font-medium">{c.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground/40"
        >
          <span>Şirket Adı © 2026</span>
          <span>·</span>
          <span>Gizli & Telif Hakkı Saklıdır</span>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}