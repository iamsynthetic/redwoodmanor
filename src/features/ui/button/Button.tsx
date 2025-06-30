import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface ButtonProps {
  backgroundColor?: string;
  hoverColor?: string;
  textColor?: string; // Added for text color control
  children: React.ReactNode;
  onClick?: () => void;
  onEnter?: () => void;
  onLeave?: () => void;
  disabled?: boolean;
  disabledHover?: boolean; // <-- Added this line
  theclassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor = "#3498db", // Default blue background
  hoverColor = "#ffffff", // Default white hover background
  textColor = "#ffffff", // Default white text
  children,
  onClick,
  onEnter,
  onLeave,
  disabled = false,
  disabledHover = false, // <-- Added this line
  theclassName = "",
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (disabled || disabledHover) return; // <-- Updated this line
    if (disabled) return;
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        backgroundColor: hoverColor,
        color: backgroundColor, // Text color becomes the original background color
        duration: 0.3,
        ease: "Quint.easeOut",
      });
    }
    onEnter?.();
  };

  const handleMouseLeave = () => {
    if (disabled || disabledHover) return; // <-- Updated this line
    if (disabled) return;
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        backgroundColor: backgroundColor,
        color: textColor, // Text color returns to original
        duration: 0.3,
        ease: "Quint.easeOut",
      });
    }
    onLeave?.();
  };

  // useEffect(() => {
  //   console.log("disabled is: " + disabled);
  // }, [disabled]);
  const handleClick = () => {
    // if (disabled) {
    //   return;
    // }
    onClick?.();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      className={`btn btn-md montserratsemi uppercase ${theclassName}`}
      style={{
        backgroundColor,
        color: textColor,
        border: `0px`,
        // border: `2px solid ${backgroundColor}`, // Added border to maintain button structure
      }}
    >
      {children}
    </button>
  );
};
