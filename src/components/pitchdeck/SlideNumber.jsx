export default function SlideNumber({ current, total }) {
  return (
    <div className="absolute bottom-6 right-8 text-xs font-medium tracking-widest text-muted-foreground/50 uppercase">
      {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
  );
}