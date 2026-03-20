import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { User, Building2, Briefcase } from "lucide-react";

const segments = [
  {
    icon: User,
    type: "Müşteri Tipi 1",
    title: "Bu müşteri kim?",
    want: "Bu kişi ne istiyor? Temel ihtiyacı, acı noktası ve beklentisini buraya yazın.",
    tags: ["Tag A", "Tag B", "Tag C"],
    color: "text-purple-400",
    bg: "from-purple-500/15 to-purple-500/5 border-purple-500/25",
  },
  {
    icon: Building2,
    type: "Müşteri Tipi 2",
    title: "Bu müşteri kim?",
    want: "Bu kişi ne istiyor? Ölçek, bütçe veya karar verme süreci gibi özelliklerini ekleyin.",
    tags: ["Tag D", "Tag E", "Tag F"],
    color: "text-blue-400",
    bg: "from-blue-500/15 to-blue-500/5 border-blue-500/25",
  },
  {
    icon: Briefcase,
    type: "Müşteri Tipi 3",
    title: "Bu müşteri kim?",
    want: "Bu kişi ne istiyor? Üçüncü segment varsa ekleyin, yoksa bu kartı kaldırabilirsiniz.",
    tags: ["Tag G", "Tag H", "Tag I"],
    color: "text-cyan-400",
    bg: "from-cyan-500/15 to-cyan-500/5 border-cyan-500/25",
  },
];

export default function Slide12CustomerProfile() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] top-0 right-0" color="accent" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400/70">Hedef Kitle</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-10 leading-tight"
        >
          Müşterilerimiz{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            kimler?
          </span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-5">
          {segments.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className={`rounded-2xl border bg-gradient-to-br ${s.bg} p-7 flex flex-col gap-5 hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-secondary/40">
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${s.color}`}>{s.type}</span>
              </div>
              <div>
                <div className="text-base font-bold text-white/90 mb-2">{s.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{s.want}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t, j) => (
                  <span key={j} className="text-xs bg-secondary/40 border border-border/30 rounded-full px-3 py-1 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}