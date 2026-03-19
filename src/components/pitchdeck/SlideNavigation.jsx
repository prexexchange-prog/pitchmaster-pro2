import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, List } from "lucide-react";

export default function SlideNavigation({ 
  current, 
  total, 
  onPrev, 
  onNext, 
  onGoTo,
  isFullscreen, 
  onToggleFullscreen,
  showThumbnails,
  onToggleThumbnails 
}) {
  const progress = ((current + 1) / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      {/* Progress bar */}
      <div className="h-0.5 bg-secondary/50 w-full">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="bg-background/80 backdrop-blur-xl border-t border-border/20 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleThumbnails}
              className="p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground"
            >
              <List className="w-4 h-4" />
            </button>
            <span className="text-xs text-muted-foreground font-mono">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          {/* Slide dots */}
          <div className="hidden md:flex items-center gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => onGoTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current 
                    ? 'w-6 h-2 bg-gradient-to-r from-purple-500 to-blue-500' 
                    : 'w-2 h-2 bg-muted-foreground/20 hover:bg-muted-foreground/40'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              disabled={current === 0}
              className="p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={onNext}
              disabled={current === total - 1}
              className="p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={onToggleFullscreen}
              className="p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground ml-2"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}