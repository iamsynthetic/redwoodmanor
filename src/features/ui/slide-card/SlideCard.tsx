// import styles from "./styles.module.scss";

type SlideProps = {
  name: string;
  quote: string;
  date: string;
  dotcolor: string;
  bgcolor: string;
  color: string;
};

const SlideCard = ({
  name,
  quote,
  date,
  dotcolor,
  bgcolor,
  color,
}: SlideProps) => {
  return (
    <div
      className={`order-1 md:order-1 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 relative w-[360px] md:w-[500px] h-[320px] ${bgcolor}`}
    >
      <div className="flex flex-col md:flex-row w-full h-full md:pl-10 pt-10 md:text-left">
        <div className="mt-2 md:mt-0">
          <div className={`rounded-full w-full h-[maxcontent] ${dotcolor}`} />
        </div>
        <div className="h-full w-full md:w-4/5 flex flex-col justify-start">
          <div
            className={`cardoregular w-full pl-6 pr-5 md:pr-0 md:pl-0 pt-10 md:px-4 lg:px-5 ${color}`}
          >
            {quote}
          </div>
          <div className="montserratlight h-full flex flex-row justify-between mb-[2rem] pl-6 md:pl-0 px-1 md:px-5">
            <h4 className={`h-full flex flex-col justify-end ${color}`}>
              {name}
            </h4>
            <p
              className={`h-full flex flex-col justify-end pr-5 md:pr-0 pt-3 md:pt-0 ${color}`}
            >
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
