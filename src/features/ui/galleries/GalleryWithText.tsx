import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "../button/Button";
// import { useMediaQuery } from "@uidotdev/usehooks";

import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP);

interface GalleryWithTextProps {
  className?: string;
  theWidth?: string;
  textLeft?: boolean;
  thetitle?: string;
  thecontent?: string;
  imgsarray: Array<{ id: number; label: string; img: string; alt: string }>;
}

export const GalleryWithText: React.FC<GalleryWithTextProps> = ({
  className = "",
  textLeft = false,
  imgsarray = [],
  thetitle = "",
  thecontent = "",
}) => {
  const wsize = useWindowSize();
  const [nums1, setnums1] = useState("");
  const [nums2, setnums2] = useState("");
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Mouse swipe refs
  const mouseDownX = useRef<number | null>(null);
  const mouseUpX = useRef<number | null>(null);
  const isMouseDown = useRef<boolean>(false);

  // Ref for the slider container
  const sliderRef = useRef<HTMLDivElement>(null);
  // Ref for the image container to get its width
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Animate with GSAP on current change
  useLayoutEffect(() => {
    if (sliderRef.current && imageContainerRef.current) {
      const containerWidth = imageContainerRef.current.offsetWidth;
      gsap.to(sliderRef.current, {
        x: `-${current * containerWidth}px`,
        duration: 2,
        ease: "Expo.easeInOut",
      });
    }
  }, [current, wsize.width]); // Added wsize.width to recalculate on resize

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

  useEffect(() => {
    if (wsize.width && wsize.width <= 768) {
      setnums1("2");
      setnums2("1");
    } else {
      if (textLeft === true) {
        setnums1("1");
        setnums2("2");
      } else {
        setnums1("2");
        setnums2("1");
      }
    }
  }, [wsize, textLeft]);

  return (
    <div className={`${className} flex flex-col`}>
      <div
        className={`flex flex-col md:flex-row w-full max-h-[600px] md:gap-10 `}
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
          ref={imageContainerRef}
          className={` ${`order-${nums2}`} max-h-[600px] mt-0 overflow-hidden`}
          style={{
            maxHeight: "70vh", // Responsive max height like Gallery.tsx
            aspectRatio: "16/9", // Optional: keeps a nice aspect ratio
            position: "relative",
          }}
        >
          <div
            ref={sliderRef}
            className="flex w-full h-full"
            style={{
              width: `${imgsarray.length * 100}%`,
              height: "100%",
            }}
          >
            {imgsarray.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 flex justify-center bg-blue-300"
                // style={{ width: `${100 / imgsarray.length}%`, height: "100%" }}
              >
                <img
                  src={item.img}
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
        <div
          // className={` ${`order-${nums1}`} flex flex-col w-full md:w-7/12 align-bottom`}
          className={` ${`order-${nums1}`} flex flex-col w-full md:w-1/4 align-bottom`}
        >
          <div className="montserratlight text-4xl text-base-content">
            {thetitle}
          </div>
          <p className="cardoregular text-xl mt-5 text-base-content">
            {thecontent}
          </p>
          {imgsarray.length > 1 && (
            <div className={`flex mt-8 md:mt-0 gap-5`}>
              <Button
                backgroundColor="#931621"
                hoverColor="#ffc285"
                textColor="#ffc285"
                theclassName="btn-secondary"
                onClick={handlePrev}
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
              >
                next
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
