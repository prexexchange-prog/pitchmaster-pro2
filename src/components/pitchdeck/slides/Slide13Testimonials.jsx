import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Müşteri Adı 1",
    role: "Unvan · Şirket Adı",
    quote: "Bu ürün benim için ne ifade ediyor? Gerçek bir müşteri yorumu buraya gelir. Kısa, etkileyici ve dönüşüm odaklı olmalı.",
    stars: 5,
    initials: "MA",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    name: "Müşteri Adı 2",
    role: "Unvan · Şirket Adı",
    quote: "İkinci referans kişisinin yorumu. Farklı bir bakış açısı veya farklı bir özelliği vurgulayan bir alıntı ekleyin.",
    stars: 5,
    initials: "MB",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Müşteri Adı 3",
    role: "Unvan · Şirket Adı",
    quote: "Üçüncü referans. Rakamsal bir başarı hikayesi içeren bir alıntı en etkili olanıdır. Örneğin: 'XX% daha hızlı...'",
    stars: 5,
    initials: "MC",
    gradient: "from-cyan-500 to-teal-600",
  },
];

export default function Slide13Testimonials() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[600px] h-[600px] -top-40 -left-40" color="primary" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400/70">Müşteri Görüşleri</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-10 leading-tight"
        >
          Müşterilerimiz{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ne diyor?
          </span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="bg-secondary/20 border border-border/30 rounded-2xl p-7 flex flex-col gap-5 hover:border-primary/30 transition-colors"
            >
              <Quote className="w-6 h-6 text-primary/40" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">"{t.quote}"</p>
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-border/20 pt-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/90">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}