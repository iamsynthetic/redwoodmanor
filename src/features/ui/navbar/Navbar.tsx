import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import navbar from "../../../data/navbar.json";
import gsap from "gsap";
import { Button } from "../button/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useMediaQuery } from "@uidotdev/usehooks";

const Navbar = ({ menuBgColor = "#333" }) => {
  const logoimage = `${import.meta.env.VITE_HERO_IMAGE_BASE_URL}/home/logo.png`;

  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const navigate = useNavigate();

  useEffect(() => {
    gsap.set(`.${styles.menuoverlay}`, {
      display: "none",
      y: "-100%",
    });
  }, []);

  const handleHamburgerClick = (): void => {
    gsap.set(`.${styles.menuoverlay}`, {
      display: "block",
      y: "-100%",
      opacity: 1,
    });

    gsap.set(`.${styles.menuoverlay} button:not(.${styles.closebtn})`, {
      opacity: 0,
      y: -30,
    });

    gsap.to(`.${styles.menuoverlay}`, {
      duration: 0.5,
      y: "0%",
      ease: "power2.out",
    });

    gsap.to(`.${styles.menuoverlay} button:not(.${styles.closebtn})`, {
      duration: 0.3,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      delay: 0.2,
      ease: "power2.out",
    });
  };

  const handleCloseMenu = (): void => {
    gsap.to(`.${styles.menuoverlay} button:not(.${styles.closebtn})`, {
      duration: 0.2,
      opacity: 0,
      y: -30,
      stagger: 0.05,
      ease: "power2.in",
    });

    gsap.to(`.${styles.menuoverlay}`, {
      duration: 0.4,
      y: "-100%",
      delay: 0.1,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(`.${styles.menuoverlay}`, { display: "none" });
      },
    });
  };

  const handleMenuItemMouseEnter = (item: string): void => {
    gsap.to(`#btn-${item}`, {
      duration: 0.4,
      x: "+20",
      color: "#f1eae2",
      ease: "Quad.easeInOut",
    });
  };

  const handleMenuItemMouseLeave = (item: string): void => {
    gsap.to(`#btn-${item}`, {
      duration: 0.4,
      x: "0",
      color: "#ffc285",
      ease: "Quad.easeInOut",
    });
  };

  const handleMenuItemClick = (item: string): void => {
    console.log(`Clicked on ${item}`);
    let route = "";
    if (item.toLowerCase().replace(/\s+/g, "-") === "home") {
      route = "/";
    } else {
      route = "/" + item.toLowerCase().replace(/\s+/g, "-");
    }

    gsap.to(`.${styles.menuoverlay} button:not(.${styles.closebtn})`, {
      duration: 0.2,
      opacity: 0,
      y: -30,
      stagger: 0.05,
      ease: "power2.in",
    });

    gsap.to(`.${styles.menuoverlay}`, {
      duration: 0.4,
      y: "-100%",
      delay: 0.1,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(`.${styles.menuoverlay}`, { display: "none" });
        navigate(route);
      },
    });
  };

  const handleBookNowClick = (): void => {
    navigate("/events#contactform");
  };

  return (
    <header>
      <a
        href="#main"
        className={`${styles.skip}`}
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <nav
        className={`${styles.navbar}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={
            isMobile
              ? `hidden`
              : `flex flex-row items-center justify-between pt-2 pb-4`
          }
        >
          <Button
            backgroundColor="#931621"
            textColor="#ffc285"
            hoverColor="#ffc285"
            theclassName="w-12 h-12"
            onEnter={() => handleMenuItemMouseEnter("Menu")}
            onLeave={() => handleMenuItemMouseLeave("Menu")}
            onClick={() => handleHamburgerClick()}
            aria-label="Open navigation menu"
          >
            <GiHamburgerMenu size={24} />
          </Button>
          <img
            src={logoimage}
            alt="Company logo"
            className={`${styles.imglogo}`}
          />

          <Button
            backgroundColor="#931621"
            textColor="#ffc285"
            hoverColor="#ffc285"
            theclassName="w-24"
            onClick={() => handleBookNowClick()}
            aria-label="Book an event or reservation"
          >
            Book
          </Button>
        </div>

        <div
          className={
            isMobile
              ? `flex flex-col items-center justify-between pt-2 pb-4`
              : `hidden`
          }
        >
          <img
            src={logoimage}
            alt="Company logo"
            className={`${styles.imglogo}`}
          />
          <div className="flex items-center mt-3 space-x-4">
            <Button
              backgroundColor="#931621"
              textColor="#ffc285"
              hoverColor="#ffc285"
              theclassName="w-12 h-12"
              onClick={() => handleHamburgerClick()}
              aria-label="Open navigation menu"
            >
              <GiHamburgerMenu size={24} />
            </Button>
            <Button
              backgroundColor="#931621"
              textColor="#ffc285"
              hoverColor="#ffc285"
              theclassName="w-24"
              onClick={() => handleBookNowClick()}
              aria-label="Book an event or reservation"
            >
              Book
            </Button>
          </div>
        </div>
        <div
          className={`${styles.menuoverlay}`}
          style={{ backgroundColor: menuBgColor }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu overlay"
        >
          <Button
            backgroundColor="#ffc285"
            textColor="#931621"
            hoverColor="#12130F"
            theclassName="w-12 h-12"
            onClick={() => handleCloseMenu()}
            aria-label="Close navigation menu"
          >
            <div className="mt-0">
              <IoClose size={24} />
            </div>
          </Button>

          {navbar.map((item, index) => (
            <div
              key={index}
              className="flex flex-col space-y-12 md:ml-20 mt-[7vh]"
              role="navigation"
              aria-label="Main navigation menu"
            >
              {item.nav.map((button, btnIndex) => (
                <button
                  key={btnIndex}
                  id={`btn-${btnIndex}`}
                  className="text-left montserratlight text-6xl md:text-7xl text-secondary cursor-pointer"
                  onMouseEnter={() =>
                    handleMenuItemMouseEnter(String(btnIndex))
                  }
                  onMouseLeave={() =>
                    handleMenuItemMouseLeave(String(btnIndex))
                  }
                  onClick={() => {
                    handleMenuItemClick(button);
                  }}
                  aria-label={`Navigate to ${button} page`}
                >
                  {button}
                </button>
              ))}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
