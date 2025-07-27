import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function CarouselCustomNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

useEffect(() => {
  let interval= 0;

  if (autoPlay && !isHovered) {
    interval = window.setInterval(() => {
      setActiveIndex(prev => (prev === 2 ? 0 : prev + 1));
    }, 3000);
  }

  return () => {
    if (interval) clearInterval(interval);
  };
}, [autoPlay, isHovered]);
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));

  return (
    <div 
      className="w-full h-[400px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        className="rounded-xl h-full"
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        prevArrow={({ handlePrev }) => (
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-50 bg-black/50 text-white rounded-full p-2 hover:bg-black/75"
          >
            &larr;
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-50 bg-black/50 text-white rounded-full p-2 hover:bg-black/75"
          >
            &rarr;
          </button>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <button
                key={i}
                className={`relative block h-1 cursor-pointer rounded-2xl transition-all overflow-hidden ${
                  activeIndex === i ? "w-8 bg-gray-300" : "w-4 bg-gray-300/50"
                }`}
                onClick={() => {
                  setActiveIndex(i);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 5000);
                }}
              >
                {activeIndex === i && (
                  <div 
                    className="absolute top-0 left-0 h-full bg-white animate-progress"
                    style={{ animationDuration: '3s' }}
                  />
                )}
              </button>
            ))}
          </div>
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
} 