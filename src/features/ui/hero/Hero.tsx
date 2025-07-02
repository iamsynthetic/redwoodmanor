import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

interface HeroProps {
  image: string;
  alt?: string;
  title: string | ReactNode;
  titlecolor?: string;
  bodyText: string;
  bodyTextcolor?: string;
  height: string;
}

const Hero: React.FC<HeroProps> = ({
  image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  alt = "an image",
  title = "Welcome",
  titlecolor = "text-primary",
  bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur cursus nec quis vestibulum justo porta ut. Praesent vel ante sollicitudin, venenatis ipsum sit cursus justo. Sed finibus laoreet nulla vel aliquet.",
  bodyTextcolor = "text-primary",
  height = "100vh",
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dca4atadh",
    },
  });

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image("front_face");

  useEffect(() => {
    // Simple animations without external GSAP library

    const animateElement = (
      element: HTMLElement | null,
      delay: number = 0
    ): void => {
      if (!element) return;

      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition =
        "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, delay);
    };

    // Animate overlay first
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "0";
      overlayRef.current.style.transition = "opacity 0.6s ease-out";
      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.style.opacity = "1";
        }
      }, 100);
    }

    // Animate title and body with staggered delays
    animateElement(titleRef.current, 400);
    animateElement(bodyRef.current, 600);
  }, []);

  return (
    <div
      className="relative w-full flex justify-center overflow-hidden"
      style={{ height }}
    >
      {/* Background Image */}

      {/* <div
        role="img"
        aria-label={`${alt}`}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      /> */}

      <AdvancedImage
        cldImg={myImage}
        alt={alt}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* <CldImage
        role="img"
        // width={1400}
        //         height={900}
        src=""
        alt={`${alt}`}
        // className={
        //   hoveredIndex === index
        //     ? `${styles.imagehovered} ${"workimg" + index}`
        //     : `${styles.imagenothovered} ${"workimg" + index}`
        // }
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      /> */}
      {/* <div
        role="img"
        aria-label={`${alt}`}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      /> */}

      {/* Overlay for better text readability */}
      {/* <div ref={overlayRef} className="absolute inset-0" /> */}

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl mt-[6rem] px-3 mx-auto">
        {/* Title */}
        <h1
          ref={titleRef}
          className={`${titlecolor} mb-6 cardoregular text-[clamp(3rem,4cqw,4rem)] max-w-xl mx-auto`}
        >
          {title}
        </h1>

        {/* Body Text */}
        <p
          ref={bodyRef}
          className={`${bodyTextcolor} cardoregular font-light leading-relaxed text-xl max-w-2xl mx-auto`}
        >
          {bodyText}
        </p>
      </div>
    </div>
  );
};

export default Hero;
