import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { X, ArrowRight, Check } from "lucide-react";

const comparisons = [
  {
    before: "Ürününüz olmadan: Durum 1 — Manuel, yavaş ve hata oranı yüksek süreç",
    after: "Ürününüzle: Durum 1 — Otomatik, hızlı ve hatasız akış",
    metric: "+XX%",
    label: "Verimlilik Artışı",
  },
  {
    before: "Ürününüz olmadan: Durum 2 — Dağınık veriler, koordinasyon kaybı",
    after: "Ürününüzle: Durum 2 — Merkezi pano, anlık raporlama",
    metric: "XXx",
    label: "Daha Hızlı Karar",
  },
  {
    before: "Ürününüz olmadan: Durum 3 — Yüksek maliyet, düşük dönüşüm",
    after: "Ürününüzle: Durum 3 — Düşük maliyet, yüksek müşteri memnuniyeti",
    metric: "$XX",
    label: "Tasarruf / Müşteri",
  },
];

export default function Slide04ValueProp() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] top-0 right-0" color="accent" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-cyan-400/70">Değer Önerisi</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-6xl font-black mb-10 leading-tight"
        >
          Öncesi &{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Sonrası
          </span>
        </motion.h2>

        <div className="flex flex-col gap-4">
          {comparisons.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.12 }}
              className="grid grid-cols-[1fr_auto_1fr_auto] gap-4 items-center"
            >
              <div className="flex items-start gap-3 bg-red-500/5 border border-red-500/15 rounded-xl p-4">
                <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">{c.before}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground/30 shrink-0" />
              <div className="flex items-start gap-3 bg-green-500/5 border border-green-500/15 rounded-xl p-4">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground">{c.after}</p>
              </div>
              <div className="text-right shrink-0 w-24">
                <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{c.metric}</div>
                <div className="text-xs text-muted-foreground/60">{c.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}