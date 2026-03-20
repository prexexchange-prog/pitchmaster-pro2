import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

export default function ExportPDFButton({ slides, currentSlide, onGoTo }) {
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleExport = async () => {
    setExporting(true);
    setProgress(0);

    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import("html2canvas"),
      import("jspdf"),
    ]);

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [1280, 720],
    });

    const slideContainer = document.getElementById("slide-container");

    for (let i = 0; i < slides.length; i++) {
      onGoTo(i);
      setProgress(Math.round(((i + 1) / slides.length) * 100));

      await new Promise((r) => setTimeout(r, 600));

      const canvas = await html2canvas(slideContainer, {
        scale: 1.5,
        useCORS: true,
        backgroundColor: "#0d1117",
        width: 1280,
        height: 720,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.92);

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, 0, 1280, 720);
    }

    pdf.save("pitch-deck.pdf");

    onGoTo(currentSlide);
    setExporting(false);
    setProgress(0);
  };

  return (
    <button
      onClick={handleExport}
      disabled={exporting}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-purple-500/20"
    >
      {exporting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>{progress}%</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          <span>PDF İndir</span>
        </>
      )}
    </button>
  );
}