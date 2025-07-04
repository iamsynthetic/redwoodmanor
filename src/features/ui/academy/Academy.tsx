import Card from "../card/Card";
import { useNavigate } from "react-router-dom";

function Academy() {
  const navigate = useNavigate();

  function handleButtonClick(): void {
    navigate("/events#contactform");
  }

  return (
    <div className="w-full">
      <div className="p-4 sm:p-6">
        <h2 className="text-4xl montserratlight flex justify-center text-base-content">
          Academy
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-10 lg:gap-12 xl:gap-20 mt-8">
        <Card
          image="/redwoodmanor/home/academy/lessons.webp"
          title="Lessons"
          body="Elevate your game with personalized instruction from seasoned PGA professionals in the distinguished setting of Redwood Manor."
          buttonText="SIGN UP"
          backgroundColor="bg-secondary"
          onButtonClick={() => handleButtonClick()}
        />
        <Card
          image="/redwoodmanor/home/academy/junior-lessons.webp"
          title="Junior Lessons"
          body="Inspire young talent with expert-led junior lessons that build skill and confidence, all within a supportive and refined environment."
          buttonText="SIGN UP"
          backgroundColor="bg-secondary"
          onButtonClick={() => handleButtonClick()}
        />
        <Card
          image="/redwoodmanor/home/academy/clinics.webp"
          title="Clinic"
          body="Sharpen your skills in a collaborative, small-group setting with our elite golf clinics, designed for players seeking focused instruction."
          buttonText="SIGN UP"
          backgroundColor="bg-secondary"
          onButtonClick={() => handleButtonClick()}
        />
      </div>
      {/* fixed size */}
      {/* <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
          <Card
            image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            title="Mountain Adventure"
            body="Discover breathtaking mountain landscapes and embark on unforgettable hiking adventures. Experience nature at its finest with stunning views and fresh mountain air."
            buttonText="Explore Now"
            backgroundColor="bg-secondary"
            className="w-[379px]"
            onButtonClick={() => handleButtonClick("Mountain Adventure")}
          />
          <Card
            image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            title="Mountain Adventure"
            body="Discover breathtaking mountain landscapes and embark on unforgettable hiking adventures. Experience nature at its finest with stunning views and fresh mountain air."
            buttonText="Explore Now"
            backgroundColor="bg-secondary"
            className="w-[379px]"
            onButtonClick={() => handleButtonClick("Mountain Adventure")}
          />
          <Card
            image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            title="Mountain Adventure"
            body="Discover breathtaking mountain landscapes and embark on unforgettable hiking adventures. Experience nature at its finest with stunning views and fresh mountain air."
            buttonText="Explore Now"
            backgroundColor="bg-secondary"
            className="w-[379px]"
            onButtonClick={() => handleButtonClick("Mountain Adventure")}
          />
        </div> */}
    </div>
  );
}

export default Academy;
