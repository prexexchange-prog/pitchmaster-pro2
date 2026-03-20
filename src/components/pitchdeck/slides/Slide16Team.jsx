import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";

const team = [
  {
    name: "Kurucu 1 Adı",
    title: "CEO & Co-Founder",
    bio: "Kurucu 1'in geçmişini buraya ekleyin. Hangi şirketlerde çalıştı? Hangi başarıları var? 2–3 cümle.",
    initials: "K1",
    gradient: "from-purple-500 to-violet-700",
  },
  {
    name: "Kurucu 2 Adı",
    title: "CTO & Co-Founder",
    bio: "Kurucu 2'nin teknik geçmişi, önceki projeleri veya akademik başarıları. Kısa ve etkileyici.",
    initials: "K2",
    gradient: "from-blue-500 to-indigo-700",
  },
  {
    name: "Kurucu 3 Adı",
    title: "COO & Co-Founder",
    bio: "Kurucu 3 varsa ekleyin. Operasyon, satış veya ürün geçmişini özetleyin. Yoksa bu kartı kaldırın.",
    initials: "K3",
    gradient: "from-cyan-500 to-teal-700",
  },
];

export default function Slide16Team() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] -bottom-20 -left-20" color="primary" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400/70">Ekip</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-4 leading-tight"
        >
          Arkasında{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            kim var?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-10 max-w-2xl"
        >
          Doğru ürünü, doğru zamanda, doğru ekiple inşa ediyoruz.
        </motion.p>

        <div className="grid grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.12 }}
              className="bg-secondary/20 border border-border/30 rounded-2xl p-7 flex flex-col gap-5 hover:border-primary/30 hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-xl font-black text-white shadow-lg`}>
                {member.initials}
              </div>
              <div>
                <div className="text-lg font-bold text-white/95">{member.name}</div>
                <div className="text-sm text-primary/80 font-medium mb-3">{member.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{member.bio}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}