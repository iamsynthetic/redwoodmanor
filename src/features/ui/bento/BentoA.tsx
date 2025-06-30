import { useMediaQuery } from "@uidotdev/usehooks";

type BentoAProps = {
  bentoAItemArray: Array<{
    id: number;
    alt: string;
    img: string;
  }>;
};

const BentoA: React.FC<BentoAProps> = ({ bentoAItemArray = [] }) => {
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className={isMobile || isTablet ? `w-full` : `hidden`}>
        <div className="grid grid-cols-1 gap-4">
          {bentoAItemArray.map((item) => (
            <div key={item.id} className="w-full">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-52 lg:h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className={isDesktop ? `w-full` : `hidden`}>
        <div className="grid grid-cols-4 gap-4">
          {bentoAItemArray.map((item, index) => {
            let colSpan;
            const rowPosition = Math.floor(index / 2);
            const isFirstInRow = index % 2 === 0;

            if (rowPosition % 2 === 0) {
              colSpan = isFirstInRow ? "col-span-3" : "col-span-1";
            } else {
              colSpan = isFirstInRow ? "col-span-1" : "col-span-3";
            }

            return (
              <div
                key={item.id}
                className={`${colSpan} group cursor-pointer overflow-hidden`}
              >
                <div className="relative h-full">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-52 lg:h-72 object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BentoA;
