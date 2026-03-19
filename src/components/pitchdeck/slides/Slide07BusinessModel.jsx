import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { DollarSign, Check } from "lucide-react";

const plans = [
  { name: "Starter", price: "$49", period: "/ay", features: ["5 kullanıcı", "Temel analitik", "E-posta destek"], popular: false },
  { name: "Pro", price: "$149", period: "/ay", features: ["25 kullanıcı", "Gelişmiş analitik", "API erişimi", "Öncelikli destek"], popular: true },
  { name: "Enterprise", price: "Özel", period: "", features: ["Sınırsız kullanıcı", "Özel entegrasyonlar", "SLA garantisi", "Dedike hesap yöneticisi"], popular: false },
];

export default function Slide07BusinessModel() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[400px] h-[400px] -bottom-20 -right-20" color="accent" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <DollarSign className="w-5 h-5 text-green-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-green-400">İş Modeli</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
        >
          SaaS <span className="text-muted-foreground/40">abonelik modeli.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className={`relative bg-secondary/30 border rounded-2xl p-6 backdrop-blur-sm ${plan.popular ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' : 'border-border/30'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Popüler
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}