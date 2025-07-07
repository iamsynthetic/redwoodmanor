import React from "react";
import gsap from "gsap";
import leftColumnButtons from "../../../data/footer/footer-left-column.json";
import rightColumnButtons from "../../../data/footer/footer-right-column.json";
import bottomLinks from "../../../data/footer/bottom-links.json";

import { useNavigate } from "react-router-dom";
const Footer = ({ backgroundColor = "bg-base-content" }) => {
  const navigate = useNavigate();

  const handleMenuItemMouseEnter = (item: string): void => {
    // alert(item);
    // Animate menu item scaling up on hover
    gsap.to(`#btn-${item}`, {
      duration: 0.2,
      // scale: 1.1,
      x: "+7",
      color: "#ffc285",
      // opacity: 0.5,
      ease: "Quad.easeInOut",
    });
  };

  const handleMenuItemMouseLeave = (item: string): void => {
    // Animate menu item scaling back down on mouse leave
    gsap.to(`#btn-${item}`, {
      duration: 0.2,
      // scale: 1,
      x: "0",
      color: "#f1eae2",
      // opacity: 1,
      ease: "Quad.easeInOut",
    });
  };

  const handleMenuItemClick = (item: string): void => {
    // ...existing logic...
    let route = "";
    // let hasAnchor = false;

    if (
      item == "Tournaments" ||
      item == "Testimonials" ||
      item == "Food Recommendation" ||
      item == "Kids Club" ||
      item == "Weddings" ||
      item == "Corporate"
    ) {
      const anchroroute = "#" + item.toLowerCase().replace(/\s+/g, "");
      // hasAnchor = true;
      if (item == "Tournaments") {
        route = "/" + anchroroute;
      } else if (item == "Testimonials") {
        route = "/club" + anchroroute;
      } else if (item == "Food Recommendation") {
        route = "/dining" + anchroroute;
      } else if (item == "Kids Club") {
        route = "/amenities" + anchroroute;
      } else if (item == "Weddings" || item == "Corporate") {
        route = "/events" + anchroroute;
      }
      navigate(route);
    } else {
      if (item == "The Club") {
        route = "/club";
      } else if (item == "Home") {
        route = "/";
      } else {
        route = "/" + item.toLowerCase().replace(/\s+/g, "");
      }
      // hasAnchor = false;
      navigate(route);
      // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`${backgroundColor} text-base-100 max-w-[1800px] h-[100%] pb-8 pt-20 bg-base-content mx-auto`}
    >
      <div className="w-full px-4 py-8 md:px-8 lg:px-12">
        {/* First Row - Responsive columns */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8 w-full h-[max-content] gap-8">
          {/* Left and right columns in a grid for better stacking at high zoom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Left columns */}
            {leftColumnButtons.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col space-y-3">
                {column.title && column.title.trim() !== "" ? (
                  <h3 className="montserratlight text-neutral-content text-[32px] md:text-[40px] mb-2">
                    {column.title}
                  </h3>
                ) : (
                  <div className="mb-2 h-12 mt-[12px]" />
                )}
                {column.items.map((button, btnIndex) => (
                  <button
                    key={btnIndex}
                    id={`btn-${colIndex}${btnIndex}`}
                    className="text-left text-lg md:text-xl cardoregular cursor-pointer"
                    onMouseEnter={() =>
                      handleMenuItemMouseEnter(
                        String(colIndex) + String(btnIndex)
                      )
                    }
                    onMouseLeave={() =>
                      handleMenuItemMouseLeave(
                        String(colIndex) + String(btnIndex)
                      )
                    }
                    onClick={() => {
                      handleMenuItemClick(button);
                    }}
                  >
                    {button}
                  </button>
                ))}
              </div>
            ))}

            {/* Right column */}
            {rightColumnButtons.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col space-y-3">
                <h3 className="montserratlight text-neutral-content text-[32px] md:text-[40px] mb-2">
                  {column.title}
                </h3>
                {column.items.map((button, index) => (
                  <button
                    key={index}
                    className="text-left text-lg md:text-xl cardoregular"
                  >
                    {button}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 mt-24">
          <h2 className="montserratlight text-[40px] md:text-[64px] mb-2 text-left">
            Redwood Manor
          </h2>
        </div>

        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full">
            <div className="flex flex-wrap gap-x-6 gap-y-2 flex-1">
              {bottomLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {link.items.map((button, btnindex) => (
                    <button
                      key={btnindex}
                      id={`btn-bottomlinks${btnindex}`}
                      className="text-left text-lg md:text-xl cardoregular"
                    >
                      {button}
                    </button>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div className="text-left text-lg md:text-xl cardoregular whitespace-nowrap">
              © 2025 Redwood Manor. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
