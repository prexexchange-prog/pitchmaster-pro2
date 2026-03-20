import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Gelir Yöntemi 1",
    price: "$XX",
    period: "/ay",
    desc: "Birinci para kazanma yönteminiz. Abonelik, lisans veya kullanım başı.",
    features: ["Özellik A", "Özellik B", "Özellik C", "Özellik D"],
    highlight: false,
    color: "border-border/30 bg-secondary/20",
    badge: null,
  },
  {
    name: "Gelir Yöntemi 2",
    price: "$XX",
    period: "/ay",
    desc: "İkinci para kazanma yönteminiz. En popüler veya ana gelir kalemini buraya koyun.",
    features: ["Her şey dahil", "Öncelikli destek", "Özel entegrasyonlar", "Sınırsız kullanım"],
    highlight: true,
    color: "border-purple-500/40 bg-gradient-to-br from-purple-500/15 to-blue-500/10",
    badge: "En Popüler",
  },
  {
    name: "Gelir Yöntemi 3",
    price: "Özel",
    period: "",
    desc: "Üçüncü gelir kalemi. Kurumsal anlaşmalar, komisyon veya reklam geliri.",
    features: ["Kurumsal SLA", "Özel geliştirme", "Dedicated hesap yönetici", "White-label"],
    highlight: false,
    color: "border-border/30 bg-secondary/20",
    badge: null,
  },
];

export default function Slide07BusinessModel() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[600px] h-[600px] -top-40 -left-40" color="primary" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-green-400/70">İş Modeli</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-10 leading-tight"
        >
          Nasıl{" "}
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            para kazanıyoruz?
          </span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className={`relative rounded-2xl border ${p.color} p-7 flex flex-col gap-5 ${p.highlight ? "scale-105 shadow-2xl shadow-purple-500/20" : ""}`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  {p.badge}
                </div>
              )}
              <div>
                <div className="text-sm font-bold text-muted-foreground mb-2">{p.name}</div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-white">{p.price}</span>
                  <span className="text-muted-foreground text-sm mb-1">{p.period}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2">{p.desc}</div>
              </div>
              <div className="flex flex-col gap-2">
                {p.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm">
                    <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}