import { motion } from "framer-motion";

export default function StatCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-secondary/50 border border-border/50 rounded-2xl p-6 text-center backdrop-blur-sm"
    >
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm text-muted-foreground mt-2 font-medium">{label}</div>
    </motion.div>
  );
}