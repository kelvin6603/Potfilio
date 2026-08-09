import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-[3px] z-[100] pointer-events-none bg-slate-900/40"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-sky-300 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(59,130,246,0.5)] relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Leading electric blue glowing tip */}
        {scrollProgress > 0 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-200 rounded-full shadow-[0_0_8px_#3b82f6] animate-pulse" />
        )}
      </div>
    </div>
  );
};
