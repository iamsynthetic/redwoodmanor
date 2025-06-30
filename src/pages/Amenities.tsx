import poolarr from "../data/amenities/pool.json";
import fitnessarr from "../data/amenities/fitness.json";
import spaarr from "../data/amenities/spa.json";
import lockerroomarr from "../data/amenities/lockerrooms.json";
import galleryItems from "../data/amenities/kidsclub.json";

import { Suspense, lazy } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../features/ui/hero/Hero";

const ThePool = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlock")
);
const TheFitness = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlock")
);
const TheSpa = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlock")
);
const TheLockerRoom = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlock")
);
const BentoA = lazy(() => import("../features/ui/bento/BentoA"));

function Amenities() {
  const location = useLocation();

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
        image="/public/assets/amenities/hero/hero.png"
        alt="a large building off a body of water, used for a golf club house"
        title="Amenities"
        titlecolor="text-neutral"
        bodyText="From our championship golf course and state-of-the-art fitness center to the serene spa, luxurious pool, and family-friendly Kids Club, Redwood Manor provides exceptional amenities tailored to every lifestyle."
        bodyTextcolor="text-neutral"
        height="800px"
      />
      <main aria-label="Amenities content">
        <section
          aria-labelledby="tennis-heading"
          className="flex flex-col w-full justify-center items-center"
        >
          <div className="flex flex-col w-full justify-center items-center">
            <div className="mt-40">
              <h2
                id="tennis-heading"
                className="montserratlight text-7xl md:text-8xl text-base-content text-left md:text-center"
              >
                Tennis & Pickleball
              </h2>
            </div>
            <div className="mt-10 min-w-auto max-w-[860px]">
              <h3 className="cardoregular text-xl text-base-content">
                The racquet sports complex at Redwood Manor would likely feature
                multiple championship-quality tennis courts with premium
                surfaces, possibly including both hard courts and clay courts
                for varied playing experiences. Professional lighting systems
                would extend playing hours into the evening, while courtside
                amenities might include covered seating areas, pro shop
                services, and dedicated changing facilities.
              </h3>
            </div>
            <div className="mt-10 min-w-auto max-w-[860px] flex justify-center w-full">
              <img
                src="/public/assets/amenities/tennis/tennis.png"
                alt="Tennis courts at Redwood Manor showing championship-quality surfaces and professional facilities"
                className="object-cover w-full "
              />
            </div>
          </div>
        </section>

        <Suspense
          fallback={<div aria-live="polite">Pool section is loading...</div>}
        >
          <section aria-labelledby="pool-heading">
            <div className="mt-64">
              <h2
                id="pool-heading"
                className=" montserratlight text-7xl md:text-8xl text-base-content"
              >
                The Pool
              </h2>
            </div>
            <ThePool
              className="mt-[-30px] md:mt-10"
              textLeft={true}
              imgsarray={poolarr}
              textwidth="md:w-3/5"
              thetitle=""
              thecontent={poolarr[0]?.thetext}
              aria-label="Pool amenities and features"
            />
          </section>
        </Suspense>

        <Suspense
          fallback={<div aria-live="polite">Fitness section is loading...</div>}
        >
          <section aria-labelledby="fitness-heading">
            <div className="mt-64">
              <h2
                id="fitness-heading"
                className="montserratlight text-7xl md:text-8xl text-base-content"
              >
                Fitness Center
              </h2>
            </div>
            <TheFitness
              className="mt-[-30px] md:mt-10"
              textLeft={false}
              imgsarray={fitnessarr}
              textwidth="md:w-3/5"
              thetitle=""
              thecontent={fitnessarr[0]?.thetext}
              aria-label="Fitness center amenities and equipment"
            />
          </section>
        </Suspense>

        <Suspense
          fallback={<div aria-live="polite">Spa section is loading...</div>}
        >
          <section aria-labelledby="spa-heading">
            <div className="mt-64">
              <h2
                id="spa-heading"
                className="montserratlight text-7xl md:text-8xl text-base-content"
              >
                Spa & Wellness
              </h2>
            </div>
            <TheSpa
              className="mt-[-30px] md:mt-10"
              textLeft={true}
              imgsarray={spaarr}
              textwidth="md:w-3/5"
              thetitle=""
              thecontent={spaarr[0]?.thetext}
              aria-label="Spa and wellness facilities and services"
            />
          </section>
        </Suspense>

        <Suspense
          fallback={
            <div aria-live="polite">Locker room section is loading...</div>
          }
        >
          <section aria-labelledby="lockerroom-heading">
            <div className="mt-64">
              <h2
                id="lockerroom-heading"
                className="montserratlight text-7xl md:text-8xl text-base-content"
              >
                Locker Rooms
              </h2>
            </div>
            <TheLockerRoom
              className="mt-[-30px] md:mt-10"
              textLeft={false}
              imgsarray={lockerroomarr}
              textwidth="md:w-3/5"
              thetitle=""
              thecontent={lockerroomarr[0]?.thetext}
              aria-label="Locker room facilities and amenities"
            />
          </section>
        </Suspense>

        <section
          id="kidsclub"
          aria-labelledby="kidsclub-heading"
          className="mt-64 mb-64 flex flex-col w-full justify-center items-center"
        >
          <div className="flex flex-col max-w-full md:max-w-3/5 justify-center items-center">
            <h2
              id="kidsclub-heading"
              className="montserratlight text-7xl md:text-8xl text-base-content text-center"
            >
              Kids Club & Childcare
            </h2>
            <div className="mt-10 mb-10 min-w-auto">
              <h3 className="cardoregular text-xl text-base-content">
                Redwood Manor's Kids Club is a fun, safe, and engaging space
                where young members can play, learn, and explore under the care
                of trained childcare professionals. From crafts and games to
                themed activities and seasonal events, the club's childcare
                services allow parents to relax and enjoy the facilities while
                their children are entertained and well looked after.
              </h3>
            </div>

            <Suspense
              fallback={
                <div aria-live="polite">Kids club section is loading...</div>
              }
            >
              <BentoA
                bentoAItemArray={galleryItems}
                aria-label="Kids club gallery and activities"
              />
            </Suspense>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Amenities;
