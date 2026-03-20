import { motion } from "framer-motion";
import SlideWrapper from "../SlideWrapper";
import GradientOrb from "../GradientOrb";
import { Check, X, Minus } from "lucide-react";

const features = [
  "Özellik / Kriter 1",
  "Özellik / Kriter 2",
  "Özellik / Kriter 3",
  "Özellik / Kriter 4",
  "Özellik / Kriter 5",
];

const competitors = [
  {
    name: "Ürününüz",
    you: true,
    values: [true, true, true, true, true],
    color: "text-purple-400",
    bg: "bg-gradient-to-b from-purple-500/20 to-transparent border-purple-500/30",
  },
  {
    name: "Rakip 1",
    you: false,
    values: [true, false, true, false, false],
    color: "text-muted-foreground",
    bg: "bg-secondary/10 border-border/20",
  },
  {
    name: "Rakip 2",
    you: false,
    values: [false, true, false, true, false],
    color: "text-muted-foreground",
    bg: "bg-secondary/10 border-border/20",
  },
  {
    name: "Rakip 3",
    you: false,
    values: [true, false, false, false, true],
    color: "text-muted-foreground",
    bg: "bg-secondary/10 border-border/20",
  },
];

const Cell = ({ val }) =>
  val === true ? (
    <Check className="w-5 h-5 text-green-400 mx-auto" />
  ) : val === false ? (
    <X className="w-5 h-5 text-red-400/50 mx-auto" />
  ) : (
    <Minus className="w-5 h-5 text-muted-foreground/30 mx-auto" />
  );

export default function Slide10Competition() {
  return (
    <SlideWrapper>
      <GradientOrb className="w-[500px] h-[500px] top-0 left-0" color="warm" />

      <div className="w-full max-w-5xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-yellow-400/70">Rekabet Analizi</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-4 leading-tight"
        >
          Rakiplere göre{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            neredeyiz?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-8"
        >
          En büyük rekabet avantajınız nedir? Bu tabloyu kendi özelliklerinize göre güncelleyin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-2xl border border-border/30 overflow-hidden"
        >
          {/* Header */}
          <div className="grid bg-secondary/30" style={{ gridTemplateColumns: `2fr repeat(${competitors.length}, 1fr)` }}>
            <div className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Özellikler</div>
            {competitors.map((c, i) => (
              <div key={i} className={`p-4 text-center text-sm font-bold ${c.color} border-l border-border/20 ${c.you ? "bg-purple-500/10" : ""}`}>
                {c.name}
                {c.you && <span className="ml-2 text-xs bg-purple-500/20 text-purple-400 rounded-full px-2 py-0.5">Siz</span>}
              </div>
            ))}
          </div>

          {features.map((f, fi) => (
            <motion.div
              key={fi}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + fi * 0.07 }}
              className="grid border-t border-border/20"
              style={{ gridTemplateColumns: `2fr repeat(${competitors.length}, 1fr)` }}
            >
              <div className="p-4 text-sm text-muted-foreground">{f}</div>
              {competitors.map((c, ci) => (
                <div key={ci} className={`p-4 border-l border-border/20 flex items-center justify-center ${c.you ? "bg-purple-500/5" : ""}`}>
                  <Cell val={c.values[fi]} />
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}