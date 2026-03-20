import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { Zap, Shield, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fayda 1",
    metric: "XX%",
    desc: "Bu ne anlama geliyor? Çözümünüzün birinci temel faydası — sayısal kanıtla desteklenmiş.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Shield,
    title: "Fayda 2",
    metric: "XXx",
    desc: "Bu ne anlama geliyor? İkinci büyük fayda — güvenlik, hız veya maliyet tasarrufu gibi.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: BarChart3,
    title: "Fayda 3",
    metric: "$XX",
    desc: "Bu ne anlama geliyor? Üçüncü fayda — gelir artışı, zaman kazanımı veya müşteri memnuniyeti.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
];

export default function Slide03Solution() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[600px] h-[600px] -bottom-40 -left-20" color="primary" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400/70">Çözüm</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-6xl font-black mb-4 leading-tight"
        >
          Çözümünüzü
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            kısaca anlatın
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-10 max-w-2xl"
        >
          Çözümünüzü 2–3 cümleyle anlatın. Neden siz? Neden şimdi? Rakiplerden farkınız nedir?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.25 + i * 0.12, duration: 0.6 }}
              className={`rounded-2xl border ${b.bg} p-7 flex flex-col gap-4 hover:scale-105 transition-transform duration-300`}
            >
              <b.icon className={`w-8 h-8 ${b.color}`} />
              <div>
                <div className={`text-4xl font-black ${b.color} mb-1`}>{b.metric}</div>
                <div className="text-base font-bold text-white/90 mb-1">{b.title}</div>
                <div className="text-sm text-muted-foreground">{b.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}