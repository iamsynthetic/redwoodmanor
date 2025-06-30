import historictudor from "../data/events/historictudor.json";
import breathtaking from "../data/events/breathtaking.json";
import galleryimages from "../data/events/events-gallery.json";
import weddingsarr from "../data/events/weddings.json";
import corporatearr from "../data/events/corporate.json";

import Hero from "../features/ui/hero/Hero";
import { Suspense, lazy } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HistoricTudor = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlock")
);
const Breathtaking = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlockalt")
);

const TheWeddings = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlock")
);
const TheCorporate = lazy(
  () => import("../features/ui/image-text-block/ImageTextBlock")
);
const Eventgallery = lazy(() => import("../features/ui/galleries/Gallery"));

const ContactForm = lazy(
  () => import("../features/ui/contact-form/contactform")
);

function Events() {
  const location = useLocation();

  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );

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
        image="/public/assets/events/hero/hero.png"
        alt="a man golfing, sand dune's in the background with the sun setting"
        title="Events"
        titlecolor="text-base-content"
        bodyText="Redwood Manor hosts a wide range of events—from elegant weddings and corporate gatherings to social mixers and family celebrations offering expert planning and stunning venues for&nbsp;every&nbsp;occasion."
        bodyTextcolor="text-base-content"
        height="800px"
      />
      <main aria-label="Events content">
        <section aria-labelledby="venue-heading">
          <div className="mt-40 w-full">
            <h2
              id="venue-heading"
              className="montserratlight text-6xl md:text-8xl text-base-content flex justify-left md:justify-center items-left md:items-center text-left md:text-center"
            >
              Venue for
              <br />
              Your Special Event
            </h2>
          </div>
          <div className="flex flex-row justify-start md:justify-end w-full">
            <div className={isTablet || isMobile ? `hidden` : `w-5/7`} />
            <div className="flex flex-col md:flex-row w-full gap-10">
              <div className="mt-10 md:mt-40 pl-0 md:pl-7">
                <h3 className="cardoregular text-2xl text-base-content">
                  With its timeless architecture, lush grounds, and impeccable
                  service, Redwood Manor is the perfect backdrop for
                  unforgettable events. Whether you're planning a romantic
                  wedding under the redwoods, a polished corporate retreat, or
                  an elegant celebration with family and friends, our expert
                  events team will work with you to create a seamless and
                  personalized&nbsp;experience.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="historic-section">
          <Suspense
            fallback={
              <div aria-live="polite">Historic Tudor section is loading...</div>
            }
          >
            <HistoricTudor
              className="mt-40 h-auto md:h-[800px]"
              titleClassName="cardoregular text-4xl md:text-5xl ml-0 md:ml-10 mt-0 md:mt-[-12px] leading-12 md:leading-16 max-w-[100%] md:max-w-[50%]"
              textLeft={true}
              imgsarray={historictudor}
              justifytext="justify-top"
              textwidth="w-5/5"
              thetitle={historictudor[0].thetitle}
              thecontent={historictudor[0].thetext}
              bodyClassName="w-full md:w-[70%]"
              maxwidth="w-full"
              maxheight="h-[800px]"
              aria-label="Historic Tudor architecture and venue details"
            />
          </Suspense>
        </section>

        <section aria-labelledby="environment-heading">
          <div className="mt-40 w-full">
            <h2
              id="environment-heading"
              className="cardoregular text-4xl md:text-5xl leading-12 md:leading-16 text-base-content flex justify-center items-center text-left md:text-center"
            >
              A timeless and elegant environment
              <br />
              that creates lasting memories
            </h2>
          </div>

          <Suspense
            fallback={
              <div aria-live="polite">Environment section is loading...</div>
            }
          >
            <div className="flex flex-row justify-start md:justify-end w-full">
              <div className={isTablet || isMobile ? `hidden` : `w-5/7`} />
              <div className="flex flex-col md:flex-row w-full gap-10">
                <div className="mt-40 pl-0 md:pl-7">
                  <h3 className="cardoregular text-xl md:text-2xl text-base-content">
                    Redwood Manor offers a variety of stunning indoor and
                    outdoor spaces, each thoughtfully designed to accommodate
                    events of all sizes and styles. From the grand ballroom
                    featuring soaring ceilings and elegant chandeliers, to
                    intimate garden terraces shaded by majestic redwoods, every
                    venue option provides a unique atmosphere that blends
                    classic sophistication with natural beauty.
                    <br />
                    <br />
                    The versatility of the spaces allows for seamless
                    transitions between ceremonies, receptions, and
                    after-parties, ensuring your event flows effortlessly from
                    start to finish.
                  </h3>
                </div>
              </div>
            </div>
          </Suspense>
        </section>

        <section aria-labelledby="breathtaking-section">
          <Suspense
            fallback={
              <div aria-live="polite">Breathtaking section is loading...</div>
            }
          >
            <Breathtaking
              className="mt-40 h-auto md:h-[800px]"
              textLeft={false}
              imgsarray={breathtaking}
              aspectratio="aspect-square"
              justifytext="justify-top"
              textwidth="w-full md:w-5/7"
              titleClassName="text-4xl cardobold"
              bodyClassName="w-full md:w-[70%]"
              maxwidth="w-full"
              maxheight="h-[800px]"
              thetitle={breathtaking[0].thetitle}
              thecontent={breathtaking[0].thetext}
              aria-label="Breathtaking venue features and amenities"
            />
          </Suspense>
        </section>

        <section aria-labelledby="testimonial-section">
          <div className="mt-40 flex flex-col w-full justify-center items-center">
            <div className="mt-10 min-w-auto w-auto md:w-[849px] flex justify-center">
              <img
                src="/public/assets/events/img3.png"
                alt="A golfer mid-swing on the course at Redwood Manor"
                className="object-cover w-full"
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              <div className="mt-10 md:mt-20">
                <blockquote>
                  <h2 className="cardoregular text-5xl md:text-7xl text-base-content text-left md:text-center leading-16 md:leading-24">
                    "Choosing Redwood Manor for our wedding
                    <br />
                    was the best decision we made."
                  </h2>
                  <cite className="cardoregularitalic text-xl md:text-4xl text-base-content text-left md:text-center mt-2 md:mt-10 block">
                    Jessica and Mark T.
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="gallery-heading">
          <Suspense
            fallback={<div aria-live="polite">Gallery is loading...</div>}
          >
            <Eventgallery
              className="mt-64"
              thetitle="Gallery"
              imgsarray={galleryimages}
              aria-label="Event gallery showcasing various celebrations and venues"
            />
          </Suspense>
        </section>

        <section id="weddings" aria-labelledby="weddings-heading">
          <div className="mt-64 flex flex-col w-full">
            <h2
              id="weddings-heading"
              className="montserratlight text-4xl text-base-content text-left"
            >
              Weddings
            </h2>
          </div>
          <Suspense
            fallback={
              <div aria-live="polite">Weddings section is loading...</div>
            }
          >
            <TheWeddings
              className="mt-0 md:mt-10 h-full md:h-[800px]"
              titleClassName="cardobold text-4xl"
              textLeft={true}
              imgsarray={weddingsarr}
              textwidth="w-full md:w-3/7"
              maxheight="h-[800px]"
              aspectratio="aspect-square"
              thetitle={weddingsarr[0].thetitle}
              thecontent={weddingsarr[0].thetext}
              aria-label="Wedding services and venue options at Redwood Manor"
            />
          </Suspense>
        </section>

        <section id="corporate" aria-labelledby="corporate-heading">
          <div className="mt-40 flex flex-col w-full">
            <h2
              id="corporate-heading"
              className="montserratlight text-4xl text-base-content text-left"
            >
              Corporate
            </h2>
          </div>
          <Suspense
            fallback={
              <div aria-live="polite">Corporate section is loading...</div>
            }
          >
            <TheCorporate
              className="mt-0 md:mt-10 mb-64 h-full md:h-[800px]"
              titleClassName="cardobold text-4xl"
              textLeft={true}
              imgsarray={corporatearr}
              textwidth="w-full md:w-3/7"
              maxheight="h-[800px]"
              aspectratio="aspect-square"
              thetitle={corporatearr[0].thetitle}
              thecontent={corporatearr[0].thetext}
              aria-label="Corporate event services and meeting facilities"
            />
          </Suspense>
        </section>

        <section id="contact-form" aria-labelledby="booking-heading">
          <div className="mt-40 flex flex-col w-full">
            <h2
              id="booking-heading"
              className="montserratlight text-4xl text-base-content text-center"
            >
              Book Your Event
            </h2>
          </div>
          <Suspense
            fallback={
              <div aria-live="polite">Contact form section is loading...</div>
            }
          >
            <div className="mb-64">
              <ContactForm aria-label="Event booking contact form" />
            </div>
          </Suspense>
        </section>
      </main>
    </div>
  );
}

export default Events;
