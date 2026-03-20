import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { Megaphone, BookOpen, Handshake, Send } from "lucide-react";

const channels = [
  {
    icon: Megaphone,
    title: "Müşteriye Ulaşma Yöntemi 1",
    desc: "Bu kanalın nasıl çalıştığını kısaca açıklayın. Hangi kitleye, nasıl ulaşıyorsunuz?",
    alloc: 35,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    bar: "from-purple-500 to-purple-400",
  },
  {
    icon: BookOpen,
    title: "Müşteriye Ulaşma Yöntemi 2",
    desc: "İçerik, SEO, sosyal medya veya topluluk tabanlı büyüme stratejisi.",
    alloc: 30,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    bar: "from-blue-500 to-blue-400",
  },
  {
    icon: Handshake,
    title: "Müşteriye Ulaşma Yöntemi 3",
    desc: "Ortaklıklar, kanal satışı veya referans programı ile büyüme.",
    alloc: 25,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    bar: "from-cyan-500 to-cyan-400",
  },
  {
    icon: Send,
    title: "Diğer Kanal",
    desc: "Outbound, e-posta kampanyaları veya etkinlik pazarlaması.",
    alloc: 10,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    bar: "from-green-500 to-green-400",
  },
];

export default function Slide11GoToMarket() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] -bottom-20 -right-20" color="primary" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400/70">Büyüme Stratejisi</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-10 leading-tight"
        >
          Pazara{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            nasıl ulaşıyoruz?
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-5">
          {channels.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`rounded-2xl border ${c.bg} p-6 flex flex-col gap-4`}
            >
              <div className="flex items-center justify-between">
                <c.icon className={`w-7 h-7 ${c.color}`} />
                <span className={`text-2xl font-black ${c.color}`}>{c.alloc}%</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white/90 mb-1">{c.title}</div>
                <div className="text-xs text-muted-foreground">{c.desc}</div>
              </div>
              <div className="h-1.5 bg-secondary/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${c.alloc}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}