import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { Database, Cpu, GitBranch, LineChart } from "lucide-react";

const steps = [
  {
    icon: Database,
    num: "01",
    title: "Veri Toplama",
    desc: "Kullanıcıdan veya entegrasyonlardan gelen ham veri toplanır ve normalize edilir.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Cpu,
    num: "02",
    title: "İşleme & Analiz",
    desc: "Yapay zeka veya kural motoru devreye girerek veriden anlam çıkarır.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: GitBranch,
    num: "03",
    title: "Otomasyon",
    desc: "Sonuçlara göre otomatik aksiyonlar tetiklenir, kullanıcı bilgilendirilir.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: LineChart,
    num: "04",
    title: "Raporlama & Öngörü",
    desc: "Tüm süreç görselleştirilerek karar vericilere sunulur.",
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
];

export default function Slide08Technology() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] top-0 right-0" color="accent" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-cyan-400/70">Teknoloji</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-4 leading-tight"
        >
          Teknik{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            altyapı
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-10 max-w-2xl"
        >
          Ürününüzün güç aldığı teknoloji yığını ve işleyiş mantığı — adım adım.
        </motion.p>

        <div className="grid grid-cols-4 gap-4 relative">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.12 }}
              className={`rounded-2xl border ${s.bg} p-6 flex flex-col gap-4 relative`}
            >
              <div className="flex items-center justify-between">
                <s.icon className={`w-7 h-7 ${s.color}`} />
                <span className={`text-3xl font-black ${s.color} opacity-20`}>{s.num}</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white/90 mb-1">{s.title}</div>
                <div className="text-xs text-muted-foreground">{s.desc}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-border to-transparent z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}