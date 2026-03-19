import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const slideNames = [
  "Kapak",
  "Problem",
  "Çözüm",
  "Değer Önerisi",
  "Pazar Büyüklüğü",
  "Ürün",
  "İş Modeli",
  "Teknoloji",
  "Büyüme",
  "Rekabet",
  "Go-to-Market",
  "Müşteri Profili",
  "Müşteri Görüşleri",
  "Finansallar",
  "Yol Haritası",
  "Takım",
  "Danışmanlar",
  "Yatırım Talebi",
  "Fonların Kullanımı",
  "Kapanış",
];

export default function SlideThumbnails({ show, current, onGoTo, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed left-0 top-0 bottom-0 w-72 bg-background/95 backdrop-blur-xl border-r border-border/20 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-between p-4 border-b border-border/20">
            <h3 className="text-sm font-semibold text-muted-foreground">Slaytlar</h3>
            <button onClick={onClose} className="p-1 rounded hover:bg-secondary/50 transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
          
          <div className="p-3 space-y-1">
            {slideNames.map((name, i) => (
              <button
                key={i}
                onClick={() => { onGoTo(i); onClose(); }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${
                  i === current
                    ? 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-foreground font-medium'
                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                }`}
              >
                <span className="text-xs text-muted-foreground/50 mr-3 font-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}