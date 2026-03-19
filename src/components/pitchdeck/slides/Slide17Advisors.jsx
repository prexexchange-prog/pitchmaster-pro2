import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Award, Building2 } from "lucide-react";

const advisors = [
  { name: "Dr. Mehmet Kılıç", title: "Danışman", org: "Ex-VP Google Cloud", focus: "Teknoloji stratejisi" },
  { name: "Ayşe Tanrıverdi", title: "Danışman", org: "Partner, Sequoia Capital", focus: "Büyüme ve yatırım" },
  { name: "Burak Şen", title: "Danışman", org: "Ex-CEO, TechUnicorn", focus: "Ürün ve pazarlama" },
];

const partners = [
  "Microsoft for Startups", "AWS Activate", "Google Cloud Partners", "Techstars",
];

export default function Slide17Advisors() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[400px] h-[400px] -bottom-20 right-20" color="accent" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <Award className="w-5 h-5 text-teal-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-teal-400">Danışmanlar & Ortaklar</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
        >
          Güçlü bir <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">ağ.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {advisors.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="bg-secondary/30 border border-border/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-teal-400">{a.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="font-semibold">{a.name}</h3>
              <p className="text-xs text-teal-400 font-medium mt-1">{a.org}</p>
              <p className="text-sm text-muted-foreground mt-3">{a.focus}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm text-muted-foreground/50 mb-4 flex items-center gap-2">
            <Building2 className="w-4 h-4" /> Stratejik Ortaklar
          </p>
          <div className="flex flex-wrap gap-3">
            {partners.map((p, i) => (
              <span key={i} className="px-4 py-2 bg-secondary/30 border border-border/30 rounded-full text-sm text-muted-foreground">
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}