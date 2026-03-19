import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";

const testimonials = [
  { name: "Ahmet Yılmaz", role: "CTO, TechCorp", quote: "İş süreçlerimizi tamamen dönüştürdü. ROI'yi 3 ayda geri kazandık.", stars: 5 },
  { name: "Elif Kaya", role: "CEO, GrowthCo", quote: "Ekibimizin verimliliği %200 arttı. Harika bir ürün ve harika bir takım.", stars: 5 },
  { name: "Murat Demir", role: "VP Ops, ScaleTech", quote: "Enterprise ihtiyaçlarımıza mükemmel uyum sağlıyor. Kesinlikle tavsiye ederim.", stars: 5 },
];

export default function Slide13Testimonials() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[400px] h-[400px] -bottom-20 -left-20" color="warm" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <MessageCircle className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-amber-400">Müşteri Görüşleri</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
        >
          Müşterilerimiz <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">ne diyor?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="bg-secondary/30 border border-border/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-amber-400">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}