export default function GradientOrb({ className = "", color = "primary" }) {
  const colors = {
    primary: "from-purple-600/20 via-violet-500/10 to-transparent",
    accent: "from-blue-500/20 via-cyan-400/10 to-transparent",
    warm: "from-amber-500/15 via-orange-400/10 to-transparent",
    green: "from-emerald-500/15 via-teal-400/10 to-transparent",
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl bg-gradient-radial ${colors[color] || colors.primary} ${className}`}
      style={{ background: `radial-gradient(circle, ${color === 'primary' ? 'rgba(139,92,246,0.15)' : color === 'accent' ? 'rgba(59,130,246,0.15)' : color === 'warm' ? 'rgba(245,158,11,0.12)' : 'rgba(16,185,129,0.12)'}, transparent 70%)` }}
    />
  );
}