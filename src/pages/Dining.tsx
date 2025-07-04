import steakarr from "../data/dining/steak.json";
import burgerarr from "../data/dining/burger.json";
import calamariarr from "../data/dining/calamari.json";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Suspense, lazy } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../features/ui/hero/Hero";

const TheSteak = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlock")
);
const TheBurger = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlock")
);
const TheCalamari = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlock")
);
const RestaurantMenu = lazy(() => import("../features/ui/menu/Menu.jsx"));

function Dining() {
  const location = useLocation();

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dca4atadh",
    },
  });

  const heroImage = `${
    import.meta.env.VITE_HERO_IMAGE_BASE_URL
  }dining/hero/hero.webp`;

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      let attempts = 0;
      const scrollToAnchor = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 20) {
          attempts++;
          setTimeout(scrollToAnchor, 100); // Try again in 100ms
        }
      };
      scrollToAnchor();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Hero
        image={heroImage}
        alt="a burger on a plate with ketchup in a container that's been knocked over, container of french fries in the background"
        title="Dining"
        titlecolor="text-secondary"
        bodyText="Savor the flavors of California with our seasonal, locally sourced menus served in elegant indoor and outdoor settings. Whether a casual lunch or fine dining, Redwood Manor delivers a memorable culinary experience."
        bodyTextcolor="text-secondary"
        height="800px"
      />
      <section
        aria-labelledby="dining-style-heading"
        className="flex flex-col w-full justify-center items-center"
      >
        <div
          className="flex flex-col w-full justify-center items-center"
          aria-label="Dining content"
        >
          <div className="flex flex-col w-full justify-center items-center">
            <div className="mt-40">
              <h2 className="montserratlight text-7xl md:text-8xl text-base-content text-left md:text-center">
                Dine in Style
              </h2>
            </div>
            <div className="mt-10 min-w-auto max-w-[860px]">
              <h3 className="cardoregular text-xl text-base-content">
                Dining at Redwood Manor is a refined yet approachable
                experience, where seasonal California cuisine meets elevated
                club tradition. Whether enjoying an intimate dinner in the main
                dining room, a casual lunch on the terrace, or cocktails by the
                fire pit, members are treated to exceptional service, locally
                sourced ingredients, and a rotating menu that reflects both
                creativity and comfort.
              </h3>
            </div>
            <div className="mt-10 min-w-auto max-w-[860px] flex justify-center w-full">
              <AdvancedImage
                cldImg={cld.image("/redwoodmanor/dining/style/diningstyle.webp")}
                alt="a piece of meat on the bone, being held by a pair of hands on a black background"
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="recommended-heading"
        className="flex flex-col w-full justify-center items-center"
      >
        <div className="mt-64">
          <h2
            id="recommended-heading"
            className="montserratlight text-5xl md:text-8xl text-base-content text-left md:text-center"
          >
            Recommended
          </h2>
        </div>
      </section>

      <section aria-labelledby="steak-heading">
        <Suspense
          fallback={<div aria-live="polite">Steak section is loading...</div>}
        >
          <TheSteak
            className="mt-[-30px] md:mt-10"
            textLeft={true}
            imgsarray={steakarr}
            justifytext="justify-center"
            textwidth="md:w-3/5"
            thetitle="AAA Tenderloin"
            thecontent={steakarr[0]?.thetext}
            aria-label="AAA Tenderloin dish details and presentation"
          />
        </Suspense>
      </section>

      <section aria-labelledby="burger-heading">
        <Suspense
          fallback={<div aria-live="polite">Burger section is loading...</div>}
        >
          <TheBurger
            className="mt-[-30px] md:mt-40"
            textLeft={false}
            imgsarray={burgerarr}
            justifytext="justify-center"
            textwidth="md:w-3/5"
            thetitle="Banquet Burger"
            thecontent={burgerarr[0]?.thetext}
            aria-label="Banquet Burger dish details and presentation"
          />
        </Suspense>
      </section>

      <section aria-labelledby="calamari-heading">
        <Suspense
          fallback={
            <div aria-live="polite">Calamari section is loading...</div>
          }
        >
          <TheCalamari
            className="mt-[-30px] md:mt-40"
            textLeft={true}
            imgsarray={calamariarr}
            textwidth="md:w-3/5"
            justifytext="justify-center"
            thetitle="Crispy Calamari"
            thecontent={calamariarr[0]?.thetext}
            aria-label="Crispy Calamari dish details and presentation"
          />
        </Suspense>
      </section>

      <section aria-labelledby="menu-heading">
        <Suspense
          fallback={<div aria-live="polite">Menu section is loading...</div>}
        >
          <RestaurantMenu aria-label="Complete restaurant menu with prices and descriptions" />
        </Suspense>
      </section>

      <section
        aria-labelledby="hours-heading"
        className="mt-64 mb-64 flex flex-col w-full"
      >
        <h2
          id="hours-heading"
          className="montserratlight text-7xl md:text-8xl text-base-content text-left"
        >
          Dining Hours & Information
        </h2>
        <div className="mt-10 min-w-auto">
          <h3 className="cardoregular text-xl text-base-content">
            Redwood Manor's dining facilities are open seven days a week, with
            flexible hours designed to suit every member's schedule. Enjoy
            weekday breakfast and lunch service from 7:30 AM, evening dining
            from 5:00 PM to 9:00 PM, and extended weekend brunch hours until
            3:00 PM. The lounge and terrace remain open for light bites and
            cocktails until 10:00 PM on Fridays and Saturdays.
          </h3>
          <div className="mt-6" role="table" aria-label="Dining hours schedule">
            <div role="row" className="cardoregular text-xl text-base-content">
              <span role="cell" aria-label="Sunday to Thursday hours">
                7:30am - 9pm Sunday to Thursday
              </span>
            </div>
            <div role="row" className="cardoregular text-xl text-base-content">
              <span role="cell" aria-label="Friday and Saturday hours">
                9am - 10pm Friday and Saturday
              </span>
            </div>
          </div>
          <div className="mt-6">
            <p className="cardoregular text-xl text-base-content">
              For reservations or private dining, please call:{" "}
              <a
                href="tel:555-5555"
                aria-label="Call restaurant reservations at 555-5555"
              >
                555-5555
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dining;
