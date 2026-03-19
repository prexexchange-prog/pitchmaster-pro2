import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function Slide05MarketSize() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] top-10 -right-32" color="primary" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <Globe className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-emerald-400">Pazar Büyüklüğü</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-16"
        >
          Büyük bir <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">fırsat.</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {[
            { value: "$120B", label: "TAM", desc: "Toplam Adreslenebilir Pazar", size: "text-6xl md:text-7xl" },
            { value: "$18B", label: "SAM", desc: "Hizmet Verilebilir Pazar", size: "text-5xl md:text-6xl" },
            { value: "$2.4B", label: "SOM", desc: "Hedeflenen Pazar", size: "text-4xl md:text-5xl" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.2, type: "spring", stiffness: 200 }}
              className="text-center"
            >
              <div className="relative">
                <div className={`${item.size} font-black bg-gradient-to-b from-emerald-300 to-emerald-600 bg-clip-text text-transparent`}>
                  {item.value}
                </div>
                <div className="absolute -top-2 -right-2 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  {item.label}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-muted-foreground/50 text-sm mt-12"
        >
          Kaynak: Gartner, McKinsey Analizi 2025
        </motion.p>
      </div>
    </SlideWrapper>
  );
}