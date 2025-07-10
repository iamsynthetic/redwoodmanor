import React, { useRef, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import styles from "./styles.module.scss";
import { Button } from "../button/Button";

interface SliderProps {
  children: React.ReactNode;
  visibleCount?: number;
  totalamount?: number;
}

const Slider: React.FC<SliderProps> = ({
  children,
  visibleCount = 1,
  totalamount = 1,
}) => {
  const slidePxWidth = 516;
  const slideGap = 10;

  const totalSlides = React.Children.count(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const trackPxWidth =
    totalSlides > 0
      ? slidePxWidth * totalSlides + slideGap * (totalSlides - 1)
      : 0;

  const slideToIndex = (index: number) => {
    const targetX = -(index * (slidePxWidth + slideGap));
    gsap.to(trackRef.current, {
      x: targetX,
      duration: 0.5,
      ease: "power3.inOut",
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    if (currentIndex > 0) slideToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < totalSlides - visibleCount)
      slideToIndex(currentIndex + 1);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < totalSlides - visibleCount) {
        slideToIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        slideToIndex(currentIndex - 1);
      }
    },
    trackMouse: true,
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    gsap.set(trackRef.current, {
      x: -(currentIndex * (slidePxWidth + slideGap)),
    });
  }, [slidePxWidth, slideGap, currentIndex]);

  return (
    <div className={`w-full`} {...handlers}>
      <div className={`${styles.slidercontainer}`}>
        <div className="flex flex-col">
          <div className="w-screen">
            <div
              className={`${styles.slidertrack}`}
              ref={trackRef}
              style={{
                width: `${trackPxWidth}px`,
                display: "flex",
                gap: `${slideGap}px`,
              }}
            >
              {React.Children.map(children, (child) => (
                <div
                  className={`${styles.slide}`}
                  style={{ width: `${slidePxWidth}px` }}
                >
                  {child}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-6 justify-center gap-5">
        <Button
          backgroundColor="#931621"
          hoverColor="#ffc285"
          textColor="#ffc285"
          theclassName="btn-secondary"
          onClick={handlePrev}
          aria-label="Go to previous image"
        >
          previous
        </Button>
        <div className="px-2 py-2">
          {totalamount > 0 ? `${currentIndex + 1} / ${totalamount}` : "0 / 0"}
        </div>
        <Button
          backgroundColor="#931621"
          hoverColor="#ffc285"
          textColor="#ffc285"
          theclassName="btn-secondary"
          onClick={handleNext}
          aria-label="Go to next image"
        >
          next
        </Button>
      </div>
    </div>
  );
};

export default Slider;
