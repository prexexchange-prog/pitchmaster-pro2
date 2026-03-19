import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const team = [
  { name: "Ali Vural", role: "CEO & Co-Founder", bg: "from-purple-500 to-indigo-500", exp: "Ex-Google, 12 yıl deneyim" },
  { name: "Zeynep Acar", role: "CTO & Co-Founder", bg: "from-blue-500 to-cyan-500", exp: "Ex-Microsoft, PhD CS" },
  { name: "Can Özdemir", role: "CPO", bg: "from-emerald-500 to-teal-500", exp: "Ex-Stripe, 10 yıl ürün" },
  { name: "Seda Korkmaz", role: "VP Satış", bg: "from-amber-500 to-orange-500", exp: "Ex-Salesforce, $50M+ kapattı" },
];

export default function Slide16Team() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2" color="primary" />
      
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <Users className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-400">Takım</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-12"
        >
          Arkasındaki <span className="text-muted-foreground/40">insanlar.</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="bg-secondary/30 border border-border/30 rounded-2xl p-6 backdrop-blur-sm text-center"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.bg} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="font-semibold text-base">{member.name}</h3>
              <p className="text-sm text-purple-400 font-medium mt-1">{member.role}</p>
              <p className="text-xs text-muted-foreground mt-3">{member.exp}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}