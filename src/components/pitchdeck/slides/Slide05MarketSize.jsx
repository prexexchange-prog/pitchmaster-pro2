import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { Globe, Target, Crosshair } from "lucide-react";

const markets = [
  {
    icon: Globe,
    label: "TAM",
    sublabel: "Toplam Pazar (Dünya)",
    value: "$XXB",
    desc: "Toplam dünya pazar büyüklüğünüz. Kaynağınızı belirtin.",
    color: "from-purple-500/30 to-purple-500/5",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
    size: "w-56 h-56",
  },
  {
    icon: Target,
    label: "SAM",
    sublabel: "Hedeflenen Pazar",
    value: "$XXB",
    desc: "Bizim hedeflediğimiz gerçekçi pazar dilimi.",
    color: "from-blue-500/30 to-blue-500/5",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
    size: "w-44 h-44",
  },
  {
    icon: Crosshair,
    label: "SOM",
    sublabel: "İlk 3 Yıl Hedefi",
    value: "$XXM",
    desc: "İlk 3 yılda ulaşacağımız pazar payı.",
    color: "from-cyan-500/30 to-cyan-500/5",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    size: "w-32 h-32",
  },
];

export default function Slide05MarketSize() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[600px] h-[600px] -top-40 -right-40" color="primary" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400/70">Pazar Büyüklüğü</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-12 leading-tight"
        >
          Büyük bir{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            fırsat
          </span>{" "}
          var
        </motion.h2>

        <div className="flex items-end justify-center gap-8 mb-10">
          {markets.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className={`flex flex-col items-center justify-center rounded-full border bg-gradient-to-br ${m.color} ${m.border} ${m.size} relative`}
            >
              <m.icon className={`w-5 h-5 ${m.iconColor} mb-1`} />
              <div className="text-xl font-black text-white">{m.value}</div>
              <div className={`text-xs font-bold ${m.iconColor}`}>{m.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-5">
          {markets.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <div className={`text-sm font-bold ${m.iconColor} mb-1`}>{m.sublabel}</div>
              <div className="text-xs text-muted-foreground">{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}