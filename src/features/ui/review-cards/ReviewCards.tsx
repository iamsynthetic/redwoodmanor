import { useState, useRef, useEffect, useCallback } from "react";

const ReviewCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stackedCards, setStackedCards] = useState([0]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cardData = [
    {
      id: 0,
      title: "Mountain Adventure",
      content:
        "Explore breathtaking mountain peaks and crystal clear lakes in this amazing journey through nature's most stunning landscapes.",
      name: "Sarah Johnson",
      rating: "5/5",
    },
    {
      id: 1,
      title: "Ocean Discovery",
      content:
        "Dive deep into the mysteries of the ocean and discover incredible marine life in the depths of the blue.",
      name: "Mike Chen",
      rating: "4/5",
    },
    {
      id: 2,
      title: "Desert Expedition",
      content:
        "Journey through vast desert landscapes and witness stunning sunsets over endless sand dunes.",
      name: "Emma Davis",
      rating: "4/5",
    },
    {
      id: 3,
      title: "Forest Sanctuary",
      content:
        "Find peace among towering trees and listen to the symphony of nature's sounds in this serene escape.",
      name: "Alex Rivera",
      rating: "5/5",
    },
    {
      id: 4,
      title: "City Lights",
      content:
        "Experience the vibrant energy of metropolitan life and architectural marvels that define modern living.",
      name: "Jordan Smith",
      rating: "4/5",
    },
  ];

  const cardConfig = {
    basePosition: 0,
    previewGap: 600,
    stackOverlap: 0.8,
    offScreenPosition: 1000,
  };

  const initializeCards = useCallback(() => {
    if (!window.gsap) return;

    window.gsap.set(cardRefs.current[0], {
      x: cardConfig.basePosition,
      opacity: 1,
      zIndex: 1,
    });

    if (cardRefs.current[1]) {
      window.gsap.set(cardRefs.current[1], {
        x: cardConfig.previewGap,
        opacity: 1,
        zIndex: 2,
      });
    }

    cardRefs.current.slice(2).forEach((card, index) => {
      if (card) {
        window.gsap.set(card, {
          x: cardConfig.previewGap,
          opacity: 0,
          zIndex: index + 3,
        });
      }
    });
  }, [cardConfig.basePosition, cardConfig.previewGap, cardRefs, cardConfig]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.onload = () => {
      initializeCards();
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [initializeCards]);

  const getStackPosition = (cardIndex: number): number => {
    const cardWidth = 600;
    let position = cardConfig.basePosition;
    for (let i = 1; i <= stackedCards.indexOf(cardIndex); i++) {
      position = position + cardWidth * cardConfig.stackOverlap;
    }

    return position;
  };

  const goToNext = () => {
    if (!window.gsap || currentIndex >= cardData.length - 1) return;

    const nextIndex = currentIndex + 1;
    const cardToStack = nextIndex;
    const newPreviewCard = nextIndex + 1;

    const stackPosition = getStackPosition(cardToStack);

    window.gsap.to(cardRefs.current[cardToStack], {
      x: stackPosition,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    if (newPreviewCard < cardData.length) {
      window.gsap.fromTo(
        cardRefs.current[newPreviewCard],
        {
          x: cardConfig.offScreenPosition,
          opacity: 0,
        },
        {
          x: cardConfig.previewGap,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }

    setStackedCards([...stackedCards, cardToStack]);
    setCurrentIndex(nextIndex);
  };

  const goToPrevious = () => {
    if (!window.gsap || stackedCards.length <= 1) return;

    const topCard = stackedCards[stackedCards.length - 1];
    const newStackedCards = stackedCards.slice(0, -1);
    const cardThatWillBePreview = currentIndex + 1;

    window.gsap.to(cardRefs.current[topCard], {
      x: cardConfig.previewGap,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    if (cardThatWillBePreview < cardData.length) {
      window.gsap.to(cardRefs.current[cardThatWillBePreview], {
        x: cardConfig.offScreenPosition,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }

    setStackedCards(newStackedCards);
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[max-content]">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
          Reviews
        </h1>
        <div className="flex gap-4 justify-center">
          <button
            onClick={goToPrevious}
            disabled={stackedCards.length <= 1}
            className="px-6 py-2 bg-red-800 text-white rounded-full text-sm font-semibold hover:bg-red-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            PREVIOUS
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex >= cardData.length - 1}
            className="px-6 py-2 bg-red-800 text-white rounded-full text-sm font-semibold hover:bg-red-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            NEXT
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden w-full h-[300px] bg-blue-600">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="absolute w-[600px] h-[300px] bg-white border border-gray-200 rounded-lg shadow-lg p-6"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <div className="h-full flex flex-col">
              <div className="flex-grow mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {card.content}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="text-gray-600 text-sm font-medium">
                  {card.name}
                </div>
                <div className="text-yellow-500 text-sm font-medium">
                  ⭐ {card.rating}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-gray-600 text-center">
        <p>
          Cards in stack: {stackedCards.length} | Preview:{" "}
          {currentIndex + 1 < cardData.length
            ? `Card ${currentIndex + 2}`
            : "None"}
        </p>
        <p className="text-sm mt-1">
          Stack: {stackedCards.map((i) => i + 1).join(", ")}
        </p>
        <p className="text-xs mt-1 text-gray-500">
          Stack position: {getStackPosition(0)}px (80% overlap)
        </p>
      </div>
    </div>
  );
};

export default ReviewCards;
