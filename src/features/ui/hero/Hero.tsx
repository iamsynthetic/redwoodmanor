import { useRef } from "react";
import type { ReactNode } from "react";

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

  return (
    <div
      className="relative w-full flex justify-center overflow-hidden"
      style={{ height }}
    >
      <div
        role="img"
        aria-label={`${alt}`}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="relative z-10 text-center max-w-4xl mt-[6rem] px-3 mx-auto">
        <h1
          ref={titleRef}
          className={`${titlecolor} mb-6 cardoregular text-[clamp(3rem,4cqw,4rem)] max-w-xl mx-auto`}
        >
          {title}
        </h1>
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
