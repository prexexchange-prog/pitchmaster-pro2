import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { MousePointer, Settings, Bell, TrendingUp } from "lucide-react";

const steps = [
  { step: "01", label: "Kullanıcı İlk Ne Yapıyor?", desc: "Kullanıcı uygulamaya giriş yapar ve ilk adımı atar." },
  { step: "02", label: "Sonra Ne Oluyor?", desc: "Sistem otomatik devreye girer, veriler işlenir." },
  { step: "03", label: "Sonra Ne Oluyor?", desc: "Kullanıcıya öneriler veya sonuçlar sunulur." },
  { step: "04", label: "Son Adım", desc: "Hedef tamamlanır, değer yaratılır." },
];

const features = [
  { icon: MousePointer, name: "Özellik 1", desc: "Ne işe yarıyor?" },
  { icon: Settings, name: "Özellik 2", desc: "Ne işe yarıyor?" },
  { icon: Bell, name: "Özellik 3", desc: "Ne işe yarıyor?" },
  { icon: TrendingUp, name: "Özellik 4", desc: "Ne işe yarıyor?" },
];

export default function Slide06Product() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] -bottom-20 -right-20" color="accent" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400/70">Ürün</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-8 leading-tight"
        >
          Nasıl{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            çalışıyor?
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* User flow */}
          <div className="flex flex-col gap-3">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 bg-secondary/30 border border-border/30 rounded-xl p-4"
              >
                <span className="text-2xl font-black bg-gradient-to-br from-purple-400 to-blue-400 bg-clip-text text-transparent shrink-0">{s.step}</span>
                <div>
                  <div className="text-sm font-semibold text-white/90 mb-0.5">{s.label}</div>
                  <div className="text-xs text-muted-foreground">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-5 flex flex-col gap-3 hover:scale-105 transition-transform"
              >
                <f.icon className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="text-sm font-bold text-white/90">{f.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-secondary/20 border border-border/30 rounded-xl px-6 py-3 text-sm text-muted-foreground italic"
        >
          💡 Ürün ekranları hakkında kısa not: Ürünün nasıl göründüğünü, hangi ekranların öne çıktığını buraya ekleyin.
        </motion.div>
      </div>
    </SlideWrapper>
  );
}