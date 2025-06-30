import Hero from "../features/ui/hero/Hero";
import Missionstatement from "../features/ui/image-text-block/ImageTextBlock";
import galleryimages from "../data/club/club-gallery.json";
import timelessarr from "../data/club/club-overview.json";
import { Suspense, lazy } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Leadership = lazy(() => import("../features/ui/leadership/Leadership"));
const Clubgallery = lazy(() => import("../features/ui/galleries/Gallery"));
const Testimonials = lazy(
  () => import("../features/ui/testimonials/testimonials")
);

function TheClub() {
  const location = useLocation();
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );
  // const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

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
        image="/public/assets/club/hero/hero.png"
        alt="a man golfing, sand dune's in the background with the sun setting"
        title="The Club"
        bodyText="Redwood Manor is a distinguished private club rooted in tradition and excellence. With a rich history, world-class facilities, and a vibrant community, we offer members an unparalleled experience 
of leisure and camaraderie."
        height="800px"
      />
      <div className="mt-40 w-full" aria-labelledby="club-intro-heading">
        <h2 className="montserratlight text-6xl md:text-8xl text-base-content">
          Timeless Tradition.
          <br />
          Superior Experience.
        </h2>
      </div>
      <div
        className="flex flex-row justify-start md:justify-end w-full"
        aria-labelledby="club-intro-heading"
      >
        {/* <div className="flex w-full md:w-3/7"/> */}
        <div className={isTablet || isMobile ? `hidden` : `w-3/7`} />
        <div className="flex flex-col md:flex-row w-full gap-10">
          <div className="mt-10 pl-0 md:pl-7">
            <h3 className="cardoregular text-2xl text-base-content">
              At Redwood Manor, nestled in the heart of California's natural
              beauty, we are dedicated to providing an unparalleled experience
              of refined leisure, exceptional service, and timeless tradition.
            </h3>
          </div>
          <div className="mt-0 md:mt-10">
            <h3 className="cardoregular text-2xl text-base-content">
              At Redwood Manor, nestled in the heart of California's natural
              beauty, we are dedicated to providing an unparalleled experience
              of refined leisure, exceptional service, and timeless tradition.
            </h3>
          </div>
        </div>
      </div>
      <section aria-label="Club mission and values">
        <Missionstatement
          className="mt-0 md:mt-14"
          textLeft={false}
          imgsarray={timelessarr}
          thetitle=""
          thecontent=""
        />
      </section>

      <div
        className="mt-64 flex flex-col items-center"
        aria-labelledby="history-heading"
      >
        <div className="montserratlight text-4xl text-base-content">
          History
        </div>
        <div className="flex flex-col md:flex-row w-full gap-10">
          <div className="mt-10">
            <h3 className="cardoregular text-xl text-base-content">
              At Redwood Manor, nestled in the heart of California's natural
              beauty, we are dedicated to providing an unparalleled experience
              of refined leisure, exceptional service, and timeless tradition.
            </h3>
          </div>
          <div className="mt-0 md:mt-10">
            <h3 className="cardoregular text-xl text-base-content">
              At Redwood Manor, nestled in the heart of California's natural
              beauty, we are dedicated to providing an unparalleled experience
              of refined leisure, exceptional service, and timeless tradition.
            </h3>
          </div>
          <div className="mt-0 md:mt-10">
            <h3 className="cardoregular text-xl text-base-content">
              At Redwood Manor, nestled in the heart of California's natural
              beauty, we are dedicated to providing an unparalleled experience
              of refined leisure, exceptional service, and timeless tradition.
            </h3>
          </div>
        </div>
        <div className="w-full flex items-center mt-10">
          <img
            src="/public/assets/club/history/history.png"
            alt="alt"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
      <section className="mt-64" aria-label="Club leadership">
        <Suspense
          fallback={
            <div
              aria-live="polite"
              aria-label="Loading club leadership information"
            >
              Leadership is loading...
            </div>
          }
        >
          <div className="mt-64">
            <Leadership />
          </div>
        </Suspense>
      </section>

      <section className="mt-64" aria-label="Club photo gallery">
        <Suspense
          fallback={
            <div aria-live="polite" aria-label="Loading club photo gallery">
              Gallery is loading...
            </div>
          }
        >
          <Clubgallery
            className="mt-64"
            thetitle="Gallery"
            imgsarray={galleryimages}
          />
        </Suspense>
      </section>

      <section
        id="testimonials"
        className="mb-64"
        aria-label="Member testimonials"
      >
        <Suspense
          fallback={
            <div aria-live="polite" aria-label="Loading member testimonials">
              Testimonials are loading...
            </div>
          }
        >
          <Testimonials space="256px" thetitle="Testimonials" />
        </Suspense>
      </section>
    </div>
  );
}

export default TheClub;
