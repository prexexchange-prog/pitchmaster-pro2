import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Rocket, Mail, Globe, Phone } from "lucide-react";

export default function Slide20Closing() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" />
      <GradientOrb className="w-[400px] h-[400px] -bottom-20 -right-20" color="accent" />
      
      <div className="max-w-4xl w-full z-10 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-10 shadow-lg shadow-purple-500/20"
        >
          <Rocket className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Geleceği birlikte
          </span>
          <br />
          <span className="text-foreground">inşa edelim.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          Vizyonumuzu paylaşıyorsanız, sizi yolculuğumuza davet ediyoruz.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-purple-400" />
            <span>contact@sirketadi.com</span>
          </div>
          <span className="hidden md:block w-1 h-1 rounded-full bg-muted-foreground/30" />
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-400" />
            <span>www.sirketadi.com</span>
          </div>
          <span className="hidden md:block w-1 h-1 rounded-full bg-muted-foreground/30" />
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>+90 212 000 00 00</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-xs text-muted-foreground/30 tracking-widest uppercase"
        >
          Bu sunum gizli bilgi içermektedir
        </motion.p>
      </div>
    </SlideWrapper>
  );
}