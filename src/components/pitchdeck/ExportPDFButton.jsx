import { useState } from "react";
import { Download, Loader2, ChevronDown } from "lucide-react";

export default function ExportPDFButton({ slides, currentSlide, onGoTo }) {
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const captureSlides = async (onGoTo, slides) => {
    const { default: html2canvas } = await import("html2canvas");
    const slideContainer = document.getElementById("slide-container");
    const images = [];

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

      images.push(canvas.toDataURL("image/jpeg", 0.92));
    }

    return images;
  };

  const exportPDF = async () => {
    setShowMenu(false);
    setExporting(true);
    setProgress(0);

    const { jsPDF } = await import("jspdf");
    const images = await captureSlides(onGoTo, slides);

    const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1280, 720] });
    images.forEach((img, i) => {
      if (i > 0) pdf.addPage();
      pdf.addImage(img, "JPEG", 0, 0, 1280, 720);
    });

    pdf.save("pitch-deck.pdf");
    onGoTo(currentSlide);
    setExporting(false);
    setProgress(0);
  };

  const exportPPTX = async () => {
    setShowMenu(false);
    setExporting(true);
    setProgress(0);

    const { default: PptxGenJS } = await import("pptxgenjs");
    const images = await captureSlides(onGoTo, slides);

    const pptx = new PptxGenJS();
    pptx.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 inches

    images.forEach((img) => {
      const slide = pptx.addSlide();
      slide.addImage({ data: img, x: 0, y: 0, w: "100%", h: "100%" });
    });

    await pptx.writeFile({ fileName: "pitch-deck.pptx" });
    onGoTo(currentSlide);
    setExporting(false);
    setProgress(0);
  };

  return (
    <div className="relative">
      {/* Main button + dropdown trigger */}
      <div className="flex items-center rounded-lg overflow-hidden shadow-lg shadow-purple-500/20">
        <button
          onClick={() => setShowMenu((v) => !v)}
          disabled={exporting}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {exporting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{progress}%</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>İndir</span>
              <ChevronDown className="w-3 h-3 ml-1" />
            </>
          )}
        </button>
      </div>

      {/* Dropdown */}
      {showMenu && !exporting && (
        <div className="absolute right-0 mt-2 w-44 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50">
          <button
            onClick={exportPDF}
            className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-secondary/60 transition-colors flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5 text-purple-400" />
            PDF olarak indir
          </button>
          <button
            onClick={exportPPTX}
            className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-secondary/60 transition-colors flex items-center gap-2 border-t border-border"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            PPTX olarak indir
          </button>
        </div>
      )}
    </div>
  );
}