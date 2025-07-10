import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface ButtonProps {
  backgroundColor?: string;
  hoverColor?: string;
  textColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  onEnter?: () => void;
  onLeave?: () => void;
  disabled?: boolean;
  disabledHover?: boolean;
  theclassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor = "#3498db",
  hoverColor = "#ffffff",
  textColor = "#ffffff",
  children,
  onClick,
  onEnter,
  onLeave,
  disabled = false,
  disabledHover = false,
  theclassName = "",
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (disabled || disabledHover) return;
    if (disabled) return;
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        backgroundColor: hoverColor,
        color: backgroundColor,
        duration: 0.3,
        ease: "Quint.easeOut",
      });
    }
    onEnter?.();
  };

  const handleMouseLeave = () => {
    if (disabled || disabledHover) return;
    if (disabled) return;
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        backgroundColor: backgroundColor,
        color: textColor,
        duration: 0.3,
        ease: "Quint.easeOut",
      });
    }
    onLeave?.();
  };

  const handleClick = () => {
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
      }}
    >
      {children}
    </button>
  );
};
