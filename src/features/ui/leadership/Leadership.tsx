import Card from "../card/Card";

function Leadership() {
  return (
    <div className="w-full">
      <div className="p-4 sm:p-6">
        <h2 className="text-4xl montserratlight flex justify-center text-base-content">
          Leadership
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center align-middle items-center gap-4 md:gap-0 mt-6">
        <Card
          image="public/assets/club/leadership/img1.png"
          title=""
          alttext="man in suit facing camera"
          body={
            'Charles "Chip" Whitmore III<br />President<br /><br />A lifelong member with deep family ties to the club, Chip brings a blend of tradition and modern leadership to his role as president.'
          }
          backgroundColor="bg-base"
          className="w-[391px] h-full mr-2 lg:mr-20"
          bodyclassName="ml-[-16px] text-xl"
        />
        <Card
          image="public/assets//club/leadership/img2.png"
          title=""
          alttext="man in suit wearing glasses looking at the camera"
          body="Thomas “Tom” Delgado<br />General Manager<br /><br />With over 20 years in luxury club management, Tom oversees daily operations with a focus on excellence, service, and member satisfaction."
          backgroundColor="bg-base"
          className="w-[391px] h-full mr-2 lg:mr-20"
          bodyclassName="ml-[-16px]] text-xl"
        />
        <Card
          image="public/assets/club/leadership/img3.png"
          title=""
          alttext="woman in suit, staring at camera"
          body="Lauren kavanaugh<br />Director of Finance<br /><br />A financial strategist with a hospitality background, Lauren ensures the club’s financial health through smart, transparent reporting."
          backgroundColor="bg-base"
          className="w-[391px] h-full"
          bodyclassName="ml-[-16px]] text-xl"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
        <Card
          image="public/assets/club/leadership/img4.png"
          title=""
          alttext="older woman wearing white dress smiling at camera"
          body="Danielle Rivera<br />Membership Manager<br /><br />Danielle combines warmth and professionalism to welcome new members and build an inclusive community at Redwood Manor."
          backgroundColor="bg-base"
          className="w-[391px] h-full mr-2 lg:mr-20"
          bodyclassName="ml-[-16px]] text-xl"
        />
        <Card
          image="public/assets/club/leadership/img5.png"
          title=""
          alttext="woman wearing light coloured suit smiling at camera, chin resting on hand"
          body="Evelyn Lee<br />Director of Facilities<br /><br />Evelyn brings engineering expertise and a passion for preservation to maintaining the club’s historic charm and modern functionality."
          backgroundColor="bg-base"
          className="w-[391px] h-full mr-2 lg:mr-20"
          bodyclassName="ml-[-16px]] text-xl"
        />
        <Card
          image="public/assets/club/leadership/img6.png"
          title=""
          alttext="woman in suit smiling at camera"
          body="Simone Caldwell<br />HR Director<br /><br />Simone fosters a supportive, high-performing workplace culture through thoughtful HR leadership and staff development initiatives."
          backgroundColor="bg-base"
          className="w-[391px] h-full"
          bodyclassName="ml-[-16px]] text-xl"
        />
      </div>
    </div>
  );
}

export default Leadership;
