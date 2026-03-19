import React, { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SlideNumber from "../components/pitchdeck/SlideNumber";
import SlideNavigation from "../components/pitchdeck/SlideNavigation";
import SlideThumbnails from "../components/pitchdeck/SlideThumbnails";

import Slide01Cover from "../components/pitchdeck/slides/Slide01Cover";
import Slide02Problem from "../components/pitchdeck/slides/Slide02Problem";
import Slide03Solution from "../components/pitchdeck/slides/Slide03Solution";
import Slide04ValueProp from "../components/pitchdeck/slides/Slide04ValueProp";
import Slide05MarketSize from "../components/pitchdeck/slides/Slide05MarketSize";
import Slide06Product from "../components/pitchdeck/slides/Slide06Product";
import Slide07BusinessModel from "../components/pitchdeck/slides/Slide07BusinessModel";
import Slide08Technology from "../components/pitchdeck/slides/Slide08Technology";
import Slide09Traction from "../components/pitchdeck/slides/Slide09Traction";
import Slide10Competition from "../components/pitchdeck/slides/Slide10Competition";
import Slide11GoToMarket from "../components/pitchdeck/slides/Slide11GoToMarket";
import Slide12CustomerProfile from "../components/pitchdeck/slides/Slide12CustomerProfile";
import Slide13Testimonials from "../components/pitchdeck/slides/Slide13Testimonials";
import Slide14Financials from "../components/pitchdeck/slides/Slide14Financials";
import Slide15Roadmap from "../components/pitchdeck/slides/Slide15Roadmap";
import Slide16Team from "../components/pitchdeck/slides/Slide16Team";
import Slide17Advisors from "../components/pitchdeck/slides/Slide17Advisors";
import Slide18AskAmount from "../components/pitchdeck/slides/Slide18AskAmount";
import Slide19UseOfFunds from "../components/pitchdeck/slides/Slide19UseOfFunds";
import Slide20Closing from "../components/pitchdeck/slides/Slide20Closing";

const slides = [
  Slide01Cover, Slide02Problem, Slide03Solution, Slide04ValueProp,
  Slide05MarketSize, Slide06Product, Slide07BusinessModel, Slide08Technology,
  Slide09Traction, Slide10Competition, Slide11GoToMarket, Slide12CustomerProfile,
  Slide13Testimonials, Slide14Financials, Slide15Roadmap, Slide16Team,
  Slide17Advisors, Slide18AskAmount, Slide19UseOfFunds, Slide20Closing,
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const total = slides.length;

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, total - 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goTo = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape") {
        setShowThumbnails(false);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, toggleFullscreen]);

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0;
    const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext();
        else goPrev();
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  const CurrentSlide = slides[currentSlide];

  return (
    <div className="h-screen w-screen overflow-hidden bg-background relative">
      <AnimatePresence mode="wait">
        <CurrentSlide key={currentSlide} />
      </AnimatePresence>

      <SlideNumber current={currentSlide + 1} total={total} />

      <SlideNavigation
        current={currentSlide}
        total={total}
        onPrev={goPrev}
        onNext={goNext}
        onGoTo={goTo}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        showThumbnails={showThumbnails}
        onToggleThumbnails={() => setShowThumbnails(!showThumbnails)}
      />

      <SlideThumbnails
        show={showThumbnails}
        current={currentSlide}
        onGoTo={goTo}
        onClose={() => setShowThumbnails(false)}
      />
    </div>
  );
}