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
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  // Removed unused menuOpen state
  const navigate = useNavigate();

  // Initialize menu overlay to be hidden on component mount
  useEffect(() => {
    gsap.set(`.${styles.menuoverlay}`, {
      display: "none",
      y: "-100%",
    });
  }, []);

  const handleHamburgerClick = (): void => {
    // setMenuOpen(true);

    // Set initial state for menu overlay and show it
    gsap.set(`.${styles.menuoverlay}`, {
      display: "block",
      y: "-100%",
      opacity: 1,
    });

    // Set initial state for menu items - invisible
    gsap.set(`.${styles.menuoverlay} button:not(.${styles.closebtn})`, {
      opacity: 0,
      y: -30,
    });

    // Animate menu sliding down from top
    gsap.to(`.${styles.menuoverlay}`, {
      duration: 0.5,
      y: "0%",
      ease: "power2.out",
    });

    // Animate menu items fading in with stagger
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
    // Animate menu items fading out
    gsap.to(`.${styles.menuoverlay} button:not(.${styles.closebtn})`, {
      duration: 0.2,
      opacity: 0,
      y: -30,
      stagger: 0.05,
      ease: "power2.in",
    });

    // Animate menu sliding up
    gsap.to(`.${styles.menuoverlay}`, {
      duration: 0.4,
      y: "-100%",
      delay: 0.1,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(`.${styles.menuoverlay}`, { display: "none" });
        // setMenuOpen(false); // Removed unused setter
      },
    });
  };

  const handleMenuItemMouseEnter = (item: string): void => {
    // Animate menu item scaling up on hover
    gsap.to(`#btn-${item}`, {
      duration: 0.4,
      // scale: 1.1,
      x: "+20",
      color: "#f1eae2",
      // opacity: 0.5,
      ease: "Quad.easeInOut",
    });
  };

  const handleMenuItemMouseLeave = (item: string): void => {
    // Animate menu item scaling back down on mouse leave
    gsap.to(`#btn-${item}`, {
      duration: 0.4,
      // scale: 1,
      x: "0",
      color: "#ffc285",
      // opacity: 1,
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

    // Animate menu items fading out
    gsap.to(`.${styles.menuoverlay} button:not(.${styles.closebtn})`, {
      duration: 0.2,
      opacity: 0,
      y: -30,
      stagger: 0.05,
      ease: "power2.in",
    });

    // Animate menu sliding up, then navigate
    gsap.to(`.${styles.menuoverlay}`, {
      duration: 0.4,
      y: "-100%",
      delay: 0.1,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(`.${styles.menuoverlay}`, { display: "none" });
        // setMenuOpen(false); // Removed unused setter
        navigate(route);
      },
    });
  };

  const handleBookNowClick = (): void => {
    navigate("/events#contact-form");
    // ReactGA.event({
    //   category: "main nav",
    //   action: "click",
    //   label: "book now in main nav",
    // });
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
          // className={`flex flex-col md:flex-row items-center justify-between pt-2 pb-4`}
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
            src="/public/assets/home/logo.png"
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
          // className={`flex flex-col md:flex-row items-center justify-between pt-2 pb-4`}
          className={
            isMobile
              ? `flex flex-col items-center justify-between pt-2 pb-4`
              : `hidden`
          }
        >
          <img
            src="/public/assets/home/logo.png"
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

        {/* Full screen overlay menu - always rendered for GSAP animations */}
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
