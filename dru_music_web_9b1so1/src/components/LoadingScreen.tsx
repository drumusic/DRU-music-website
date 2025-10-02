import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const fullText = "don't let the groove die";

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setShowTypewriter(true);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (showTypewriter) {
      let currentIndex = 0;
      const typewriterInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypewriterText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typewriterInterval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 1000);
        }
      }, 80);

      return () => clearInterval(typewriterInterval);
    }
  }, [showTypewriter, onComplete]);

  return (
    <div className={`fixed inset-0 bg-gray-900 flex items-center justify-center z-50 transition-opacity duration-500 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center px-6">
        {!showTypewriter ? (
          <>
            <div className="mb-8">
              <div className="text-4xl md:text-6xl font-bold tracking-wider text-gray-100 mb-8">
                DRU
              </div>
              <div className="w-64 h-1 bg-gray-700 mx-auto relative overflow-hidden">
                <div 
                  className="h-full bg-gray-300 transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="mt-4 text-gray-400 font-mono text-sm">
                {progress}%
              </div>
            </div>
          </>
        ) : (
          <div className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
