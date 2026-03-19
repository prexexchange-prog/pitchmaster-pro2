import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function Slide01Cover() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[600px] h-[600px] -top-40 -right-40" color="primary" />
      <GradientOrb className="w-[400px] h-[400px] -bottom-20 -left-20" color="accent" />
      
      <div className="text-center max-w-4xl z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-10 shadow-lg shadow-purple-500/20"
        >
          <Rocket className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Şirket Adı
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mt-6 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Geleceğin teknolojisiyle bugünün problemlerini çözüyoruz
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground/60"
        >
          <span>Yatırımcı Sunumu</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span>2026</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span>Gizli</span>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}