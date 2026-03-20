import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";

const advisors = [
  { name: "Danışman 1 Adı", org: "Kurum / Şirket Adı", focus: "Uzmanlık alanı (örn: Fintech, GTM, SaaS büyümesi)", initials: "D1", gradient: "from-purple-500 to-violet-600" },
  { name: "Danışman 2 Adı", org: "Kurum / Şirket Adı", focus: "Uzmanlık alanı (örn: Regülasyon, kurumsal satış, teknoloji)", initials: "D2", gradient: "from-blue-500 to-indigo-600" },
  { name: "Danışman 3 Adı", org: "Kurum / Şirket Adı", focus: "Uzmanlık alanı (örn: Yatırım, M&A, global genişleme)", initials: "D3", gradient: "from-cyan-500 to-teal-600" },
  { name: "Danışman 4 Adı", org: "Kurum / Şirket Adı", focus: "Uzmanlık alanı (örn: Ürün tasarımı, UX, marka)", initials: "D4", gradient: "from-green-500 to-emerald-600" },
];

const partners = ["Stratejik Ortak 1", "Stratejik Ortak 2", "Stratejik Ortak 3", "Hızlandırıcı / Inkübatör", "Yatırım Fonu"];

export default function Slide17Advisors() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] top-0 right-0" color="accent" />
      <div className="w-full max-w-6xl z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="mb-3">
          <span className="text-xs font-bold tracking-widest uppercase text-cyan-400/70">Danışmanlar & Ortaklar</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-black mb-10 leading-tight">
          Güçlü{" "}<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">destekçilerimiz</span>
        </motion.h2>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {advisors.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="bg-secondary/20 border border-border/30 rounded-2xl p-5 flex flex-col gap-3 hover:border-primary/30 transition-colors">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.gradient} flex items-center justify-center text-sm font-black text-white`}>{a.initials}</div>
              <div>
                <div className="text-sm font-bold text-white/90">{a.name}</div>
                <div className="text-xs text-primary/70 mb-1">{a.org}</div>
                <div className="text-xs text-muted-foreground">{a.focus}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-secondary/20 border border-border/30 rounded-2xl p-5">
          <div className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest mb-4">Stratejik Ortaklar</div>
          <div className="flex flex-wrap gap-2">
            {partners.map((p, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + i * 0.07 }} className="text-sm bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-muted-foreground">{p}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}