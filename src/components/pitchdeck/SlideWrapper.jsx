import { motion } from "framer-motion";

export default function SlideWrapper({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full h-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 py-12 relative overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}