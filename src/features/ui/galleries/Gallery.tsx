import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "../button/Button";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
gsap.registerPlugin(useGSAP);

interface GalleryProps {
  className?: string;
  thetitle?: string;
  imgsarray: Array<{ id: number; label: string; img: string; alt: string }>;
}

const Gallery: React.FC<GalleryProps> = ({
  className = "",
  thetitle = "",
  imgsarray = [],
}) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dca4atadh",
    },
  });

  // Mouse swipe refs
  const mouseDownX = useRef<number | null>(null);
  const mouseUpX = useRef<number | null>(null);
  const isMouseDown = useRef<boolean>(false);

  // Ref for the slider container
  const sliderRef = useRef<HTMLDivElement>(null);

  // Animate with GSAP on current change
  useLayoutEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: `-${current * 100}%`,
        duration: 2,
        ease: "Expo.easeInOut",
      });
    }
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? imgsarray.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === imgsarray.length - 1 ? 0 : prev + 1));
  };

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 50) {
        handleNext();
      } else if (distance < -50) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse swipe handlers
  const onMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    mouseDownX.current = e.clientX;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isMouseDown.current) {
      mouseUpX.current = e.clientX;
    }
  };

  const onMouseUp = () => {
    if (
      isMouseDown.current &&
      mouseDownX.current !== null &&
      mouseUpX.current !== null
    ) {
      const distance = mouseDownX.current - mouseUpX.current;
      if (distance > 50) {
        handleNext();
      } else if (distance < -50) {
        handlePrev();
      }
    }
    isMouseDown.current = false;
    mouseDownX.current = null;
    mouseUpX.current = null;
  };
  return (
    <div
      className={`${className} flex flex-col items-center justify-center w-full`}
    >
      <div className="montserratlight text-4xl text-base-content">
        {thetitle}
      </div>
      <div
        className="relative w-full mt-12 max-w-[max-content] mx-auto overflow-hidden flex justify-center items-center"
        style={{ padding: 0 }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div
          ref={sliderRef}
          className="flex w-full"
          style={{
            width: `${imgsarray.length * 100}%`,
            height: "100%",
          }}
        >
          {imgsarray.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 flex justify-center items-center"
              style={{ width: "100%", height: "100%" }}
            >
              <AdvancedImage
                cldImg={cld.image(item.img)}
                alt={item.alt}
                className="object-cover w-full h-auto"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                }}
              />
            </div>
          ))}
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
          {imgsarray.length > 0
            ? `${current + 1} / ${imgsarray.length}`
            : "0 / 0"}
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

export default Gallery;
