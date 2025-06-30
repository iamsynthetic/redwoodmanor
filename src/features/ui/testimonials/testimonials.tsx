
import Slider from "../../ui/slider/Slider.tsx";
import Slide from "../../ui/slide-card/SlideCard.tsx";

interface TestimonialsProps {
  space: string;
  thetitle?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  space = "256px",
  thetitle = "",
}) => {
  return (
    <section
      id="testimonials"
      style={{ marginTop: space }}
      className={`px-0 py-0 max-w-[1600px] mx-auto`}
    >
      <div className="flex flex-col">
        <div id="thetitleDesktop" className="flex flex-col ">
          <div className="montserratlight text-4xl text-base-content flex items-center justify-center">
            {thetitle}
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1fr grid-cols-12">
              <div className="w-full col-span-12">
                <Slider visibleCount={1} totalamount={6}>
                  <Slide
                    name="Elizabeth H."
                    quote='"My family has been coming to Redwood Manor for three generations. From the holiday brunches to junior golf camps, it&#39;s more than a club, it&#39;s where our memories are made."'
                    date="Member since 1998"
                    dotcolor="bg-accent"
                    bgcolor="bg-info"
                    color="text-base-100"
                  />
                  <Slide
                    name="Gregory S."
                    quote='"As a business owner, I appreciate the level of service, discretion, and attention to detail here. Redwood Manor is where I bring clients when I want to impress—and it never fails."'
                    date="Member since 2012"
                    dotcolor="bg-primary"
                    bgcolor="bg-info"
                    color="text-base-100"
                  />
                  <Slide
                    name="Timmothy M."
                    quote='"Honestly, the course is stunning. Every hole feels like a postcard. And the clubhouse burgers? Unreal."'
                    date="Member since 2021"
                    dotcolor="bg-primary"
                    bgcolor="bg-info"
                    color="text-base-100"
                  />
                  <Slide
                    name="Michael R."
                    quote='"I learned to golf on these fairways with my dad, and now I’m teaching my own kids here. Not many places hold that kind of generational value."'
                    date="Member since 1985"
                    dotcolor="bg-accent"
                    bgcolor="bg-info"
                    color="text-base-100"
                  />
                  <Slide
                    name="Sandra L."
                    quote='"The facilities are always immaculate, the staff is professional, and tee times are well-managed. What more can you ask for"'
                    date="Member since 2015"
                    dotcolor="bg-accent"
                    bgcolor="bg-info"
                    color="text-base-100"
                  />
                  <Slide
                    name="Diane F."
                    quote='"There’s a timeless elegance to Redwood Manor that makes every visit feel special. From the redwood-lined drive to the candlelit dinners, it’s pure class."'
                    date="Social Member since 2009"
                    dotcolor="bg-accent"
                    bgcolor="bg-info"
                    color="text-base-100"
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
