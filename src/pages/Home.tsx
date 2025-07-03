import imgarr from "../data/home/home-gallery.json";
import overviewarr from "../data/home/home-overview.json";
import yourgamearr from "../data/home/home-yourgame.json";
import courses from "../data/courses.json";
import eventredwood from "../data/home/event-redwood.json";
import eventmonarch from "../data/home/event-monarch.json";

import { Suspense, lazy } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../features/ui/hero/Hero";
import LegacyofExcellence from "../features/ui/image-text-block/ImageTextBlock";

const Homegallery = lazy(() => import("../features/ui/galleries/Gallery"));
const YourGame = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlock")
);
const OurCourse = lazy(
  () => import("../features/ui/content-switcher/ContentSwitcher")
);
const Academy = lazy(() => import("../features/ui/academy/Academy"));
const EventSchedule = lazy(
  () => import("../features/ui/TwoColumnLayout/TwoColumnLayout")
);

function Home() {
  const location = useLocation();
  const heroImage = `${
    import.meta.env.VITE_HERO_IMAGE_BASE_URL
  }home/hero/hero.webp`;

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
        // image="/redwoodmanor/home/hero/hero.webp"
        image={heroImage}
        alt="a large building off a body of water, there's a kayaker in the water"
        title="Welcome"
        bodyText="Welcome to Redwood Manor, where timeless elegance meets California’s natural beauty. We invite you to explore our prestigious country club, a place to relax, connect, and create 
unforgettable memories."
        height="800px"
      />
      <div className="mt-40">
        <h2 className="montserratlight text-7xl md:text-8xl text-base-content">
          Overview
        </h2>
      </div>
      <div className="mt-10">
        <h3 className="cardoregular text-2xl text-base-content">
          Tucked among the towering redwoods of Northern California, Redwood
          Manor Golf & Country Club offers a serene escape rooted in natural
          beauty and refined tradition. Just a short drive from the Bay Area,
          our private estate blends the charm of old-world sophistication with
          modern luxury.
        </h3>
      </div>
      <LegacyofExcellence
        className=" mt-24 md:mt-14 h-auto md:h-[800px]"
        titleClassName="montserratlight text-4xl"
        textLeft={true}
        imgsarray={overviewarr}
        maxheight="h-[800px]"
        aspectratio="aspect-square"
        thetitle="Legacy of Excellence"
        thecontent="Explore the stunning views and luxurious amenities of Redwood Manor. From our pristine golf course to our elegant accommodations, every detail is designed for your comfort and enjoyment."
      />

      <Suspense fallback={<div>Gallery is loading...</div>}>
        <Homegallery className="mt-64" thetitle="Gallery" imgsarray={imgarr} />
      </Suspense>

      <Suspense fallback={<div>Scorecard is loading...</div>}>
        <YourGame
          className="mt-64 h-auto md:h-[800px]"
          titleClassName="montserratlight text-4xl"
          textLeft={true}
          imgsarray={yourgamearr}
          maxheight="h-[800px]"
          aspectratio="aspect-square"
          thetitle="Your Game, Your Way"
          thecontent="At Redwood Manor, tradition and innovation go hand in hand. Whether you prefer the classic feel of a beautifully printed scorecard or the modern ease of our intuitive digital version, the choice is yours. Both options are designed for simplicity, accuracy, and a seamless experience on the course, so you can focus on your swing, not the scorekeeping."
        />
      </Suspense>

      <Suspense fallback={<div>Our courses are loading...</div>}>
        <OurCourse
          className="mt-64"
          sectiontitle="Our Course"
          contentItemArray={courses}
        />
      </Suspense>

      <Suspense fallback={<div>Academy is loading...</div>}>
        <div className="mt-64">
          <Academy />
        </div>
      </Suspense>

      <Suspense fallback={<div>Events are loading...</div>}>
        <div className="mt-64 mb-64">
          <h2
            id="tournaments"
            className="mb-8 text-4xl montserratlight flex justify-center text-base-content"
          >
            Events
          </h2>
          <EventSchedule eventData={eventredwood} />
          <EventSchedule eventData={eventmonarch} />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
