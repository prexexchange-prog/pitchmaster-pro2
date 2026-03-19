import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Layout, Database, Cloud, Lock } from "lucide-react";

const features = [
  { icon: Layout, label: "Dashboard" },
  { icon: Database, label: "Veri Yönetimi" },
  { icon: Cloud, label: "Bulut Altyapı" },
  { icon: Lock, label: "Güvenlik" },
  { icon: Smartphone, label: "Mobil Uygulama" },
  { icon: Monitor, label: "Raporlama" },
];

export default function Slide06Product() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <Monitor className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-400">Ürün</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
        >
          Güçlü. <span className="text-muted-foreground/40">Basit. Zarif.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative bg-secondary/50 border border-border/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="bg-background/80 rounded-2xl border border-border/30 p-6 mb-8 h-48 md:h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-muted-foreground text-sm">Ürün Demo Ekranı</p>
              <p className="text-muted-foreground/40 text-xs mt-1">Buraya ürün görseli eklenecek</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-background/50 transition-colors"
              >
                <item.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}