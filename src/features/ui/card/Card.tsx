import { Button } from "../button/Button";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
type CardProps = {
  image?: string;
  title?: string;
  alttext?: string;
  body?: string;
  buttonText?: string;
  backgroundColor?: string;
  onButtonClick?: () => void;
  className?: string;
  bodyclassName?: string;
};

const Card = ({
  image,
  title,
  body,
  buttonText,
  backgroundColor = "bg-white",
  onButtonClick,
  className = "",
  bodyclassName = "",
  alttext = "",
}: CardProps) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dca4atadh",
    },
  });

  return (
    <div
      className={`${backgroundColor} overflow-hidden h-[500px] ${className}`}
    >
      {/* Image Section - Takes up half the height */}
      <div className="h-1/2 w-full">
        {image && (
          // <img
          //   src={image}
          //   alt={alttext}
          //   className="w-full h-full object-cover"
          // />
          <AdvancedImage
            cldImg={cld.image(image)}
            alt={alttext}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content Section - Takes up the other half */}
      <div className="p-4 flex flex-col relative h-1/2">
        <div>
          {title && (
            <h3 className="montserratlight text-2xl text-base-content mb-2 line-clamp-2">
              {title}
            </h3>
          )}

          {body && (
            <p
              className={`text-base cardoregular text-base-content mb-4 flex-grow ${bodyclassName}`}
              dangerouslySetInnerHTML={{ __html: body }}
            ></p>
          )}
        </div>
        <div className="absolute bottom-0 pb-4 ">
          {buttonText && (
            <Button
              backgroundColor="#931621"
              hoverColor="#F1EAE2"
              textColor="#ffc285"
              theclassName="btn-secondary w-28"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
