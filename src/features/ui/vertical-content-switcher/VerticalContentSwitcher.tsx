import React, { useState, useRef } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Button } from "../button/Button";

interface VerticalContentSwitcherProps {
  sectiontitle: string;
  contentItemArray: Array<{
    id: number;
    title: string;
    depth: string;
    yards: string;
    body: string;
    img: string;
  }>;
}

const VerticalContentSwitcher: React.FC<VerticalContentSwitcherProps> = ({
  contentItemArray = [],
  sectiontitle = "",
}) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  //   const [current, setCurrent] = useState(0);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  // Mouse drag handlers for desktop

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartY(e.pageY - scrollRef.current.offsetTop);
    setScrollTop(scrollRef.current.scrollTop);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const y = e.pageY - scrollRef.current.offsetTop;
    const walk = (y - startY) * 2;
    scrollRef.current.scrollTop = scrollTop - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    setStartY(e.touches[0].clientY);
    if (scrollRef.current) {
      setScrollTop(scrollRef.current.scrollTop);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    const y: number = e.touches[0].clientY;
    const walk: number = (startY - y) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollTop + walk;
    }
  };

  // Navigation for mobile

  const handlePrev = () => {
    // setCurrent((prev) => (prev === 0 ? contentItemArray.length - 1 : prev - 1));
    setSelectedItem((prev) =>
      prev === 0 ? contentItemArray.length - 1 : prev - 1
    );
    // setSelectedItem(selectedItem - 1)}
  };

  const handleNext = () => {
    // setCurrent((prev) => (prev === contentItemArray.length - 1 ? 0 : prev + 1));
    setSelectedItem((prev) =>
      prev === contentItemArray.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div>
      <div className="p-4 sm:p-6">
        <h2 className="text-5xl montserratlight flex justify-center text-base-content">
          {sectiontitle}
        </h2>
      </div>
      <div className={`flex flex-col`}>
        {/* Vertical List - Always visible */}

        <div className={isSmallDevice ? "hidden" : "visible w-full"}>
          <div
            ref={scrollRef}
            className="overflow-y-auto select-none max-h-[max-content] w-full"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div className="p-3 sm:p-4 flex flex-row w-full justify-center">
              {contentItemArray.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(index)}
                  className={`w-[max-content] cursor-pointer text-left p-2 mx-3 sm:p-3 mb-2 rounded-lg transition-all duration-200 focus:outline-none  text-sm sm:text-base ${
                    selectedItem === index
                      ? "text-2xl montserratlight text-neutral-content rounded-xl bg-primary w-[max-content] px-3 py-1 pt-2"
                      : "text-2xl montserratlight w-[max-content] text-base-content"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Display Area */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full p-4 sm:p-6 lg:p-12">
            <div
              key={selectedItem} // This forces re-render and triggers animation
              className="h-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 animate-fade-in"
            >
              {/* Image */}
              <div className="w-full h-48 sm:h-64 lg:h-full mb-4 sm:mb-6 lg:mb-0 rounded-2xl overflow-hidden shadow-2xl animate-slide-up">
                <img
                  src={contentItemArray[selectedItem].img}
                  alt={contentItemArray[selectedItem].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col space-y-1 animate-slide-in-right">
                <div className="animate-slide-down">
                  <h1 className="text-5xl montserratlight text-base-content mb-1">
                    {contentItemArray[selectedItem].title}
                  </h1>
                  {/* <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 sm:mb-6 animate-expand"></div> */}
                </div>

                <p className="text-xl cardoregular text-base-content">
                  {contentItemArray[selectedItem].depth}
                </p>
                <p className="text-xl cardoregular text-base-content">
                  {contentItemArray[selectedItem].yards}
                </p>
                <div className="pt-4 animate-bounce-in mt-1">
                  <div className="rounded-lg bg-info w-[max-content] px-3 py-1 pt-2 text-base-100 montserratsemi">
                    PAR 4
                  </div>
                </div>
                <p className="text-xl cardoregular text-base-content mt-6">
                  {contentItemArray[selectedItem].body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={isSmallDevice ? "flex mt-6 justify-center gap-5" : "hidden"}
      >
        <Button
          backgroundColor="#931621"
          hoverColor="#ffc285"
          textColor="#ffc285"
          className="btn-secondary"
          onClick={handlePrev}
        >
          previous
        </Button>
        <div className="px-2 py-2">
          {contentItemArray.length > 0
            ? `${selectedItem + 1} / ${contentItemArray.length}`
            : "0 / 0"}
        </div>
        <Button
          backgroundColor="#931621"
          hoverColor="#ffc285"
          textColor="#ffc285"
          className="btn-secondary"
          onClick={handleNext}
        >
          next
        </Button>
      </div>
    </div>
  );
};

export default VerticalContentSwitcher;
