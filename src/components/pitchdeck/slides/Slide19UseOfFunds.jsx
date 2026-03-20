import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { Code2, Megaphone, Users, Settings } from "lucide-react";

const allocations = [
  { icon: Code2, label: "Ürün & Teknoloji", pct: 40, desc: "Ürün geliştirme, mühendislik ekibi büyümesi ve altyapı yatırımları.", color: "text-purple-400", bar: "from-purple-500 to-violet-500", bg: "bg-purple-500/10 border-purple-500/20" },
  { icon: Megaphone, label: "Satış & Pazarlama", pct: 30, desc: "Müşteri edinimi, marka bilinirliği ve pazar genişleme kampanyaları.", color: "text-blue-400", bar: "from-blue-500 to-indigo-500", bg: "bg-blue-500/10 border-blue-500/20" },
  { icon: Users, label: "Ekip & İnsan Kaynakları", pct: 20, desc: "Kilit pozisyonlar için işe alım ve ekip genişlemesi.", color: "text-cyan-400", bar: "from-cyan-500 to-teal-500", bg: "bg-cyan-500/10 border-cyan-500/20" },
  { icon: Settings, label: "Operasyon & Diğer", pct: 10, desc: "Hukuk, finans, ofis ve genel operasyonel giderler.", color: "text-green-400", bar: "from-green-500 to-emerald-500", bg: "bg-green-500/10 border-green-500/20" },
];

export default function Slide19UseOfFunds() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] -bottom-40 -right-20" color="primary" />
      <div className="w-full max-w-6xl z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="mb-3">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400/70">Fonun Kullanımı</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-black mb-4 leading-tight">
          Yatırımı nasıl{" "}<span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">kullanacağız?</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-muted-foreground mb-10">
          Bu yatırım bizi XX aya kadar sürdürür ve şu hedeflere ulaşmamızı sağlar.
        </motion.p>
        <div className="flex flex-col gap-4">
          {allocations.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.1 }} className={`flex items-center gap-5 rounded-2xl border ${a.bg} p-5`}>
              <div className="p-3 rounded-xl bg-secondary/40 shrink-0">
                <a.icon className={`w-6 h-6 ${a.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white/90">{a.label}</span>
                  <span className={`text-2xl font-black ${a.color}`}>{a.pct}%</span>
                </div>
                <div className="h-2 bg-secondary/40 rounded-full overflow-hidden mb-2">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${a.pct}%` }} transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }} className={`h-full rounded-full bg-gradient-to-r ${a.bar}`} />
                </div>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}