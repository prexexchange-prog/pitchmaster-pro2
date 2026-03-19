import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { UserCircle, Building2, Briefcase, ShoppingBag } from "lucide-react";

const segments = [
  { icon: Building2, name: "KOBİ'ler", size: "50-500 çalışan", revenue: "$1M-$50M gelir", pain: "Manuel süreçlerin dijitalleştirilmesi", color: "text-blue-400 bg-blue-500/10" },
  { icon: Briefcase, name: "Mid-Market", size: "500-5,000 çalışan", revenue: "$50M-$500M gelir", pain: "Veri siloları ve entegrasyon zorlukları", color: "text-purple-400 bg-purple-500/10" },
  { icon: ShoppingBag, name: "Enterprise", size: "5,000+ çalışan", revenue: "$500M+ gelir", pain: "Ölçeklenebilir otomasyon ihtiyacı", color: "text-emerald-400 bg-emerald-500/10" },
];

export default function Slide12CustomerProfile() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[400px] h-[400px] top-1/3 -right-20" color="accent" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <UserCircle className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">Müşteri Profili</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
        >
          Kimi <span className="text-muted-foreground/40">hedefliyoruz?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((seg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="bg-secondary/30 border border-border/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className={`w-12 h-12 rounded-xl ${seg.color} flex items-center justify-center mb-4`}>
                <seg.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-4">{seg.name}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground/50">Büyüklük:</span>
                  <p className="text-muted-foreground">{seg.size}</p>
                </div>
                <div>
                  <span className="text-muted-foreground/50">Gelir:</span>
                  <p className="text-muted-foreground">{seg.revenue}</p>
                </div>
                <div>
                  <span className="text-muted-foreground/50">Ana Problem:</span>
                  <p className="text-foreground/80 font-medium">{seg.pain}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}