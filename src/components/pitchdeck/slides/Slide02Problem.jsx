import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    stat: "%XX",
    title: "Problem Başlığı 1",
    desc: "Bu sayı ne anlama geliyor? Problemin neden önemli olduğunu açıklayan kısa bir cümle.",
    color: "from-red-500/20 to-orange-500/10",
    border: "border-red-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: TrendingDown,
    stat: "$XX",
    title: "Problem Başlığı 2",
    desc: "İkinci kritik oran veya kayıp. Piyasadaki büyük bir verimsizliği rakamla ifade edin.",
    color: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: Clock,
    stat: "XXx",
    title: "Problem Başlığı 3",
    desc: "Üçüncü önemli gösterge. Zaman kaybı, maliyet artışı veya müşteri kaybı gibi somut bir veri.",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400",
  },
];

export default function Slide02Problem() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] top-0 right-0" color="warm" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-orange-400/70">Problem</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-6xl font-black mb-3 leading-tight"
        >
          Hangi problemi
          <br />
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            çözüyorsunuz?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-10 max-w-2xl"
        >
          Problemi nasıl kanıtladınız? Veri kaynağınızı buraya ekleyin.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.12, duration: 0.6 }}
              className={`relative rounded-2xl border ${p.border} bg-gradient-to-br ${p.color} p-6 overflow-hidden group hover:scale-105 transition-transform duration-300`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
              <p.icon className={`w-8 h-8 ${p.iconColor} mb-4`} />
              <div className="text-5xl font-black text-white mb-2">{p.stat}</div>
              <div className="text-base font-bold text-white/90 mb-2">{p.title}</div>
              <div className="text-sm text-muted-foreground">{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}