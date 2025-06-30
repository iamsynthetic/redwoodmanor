import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Button } from "../button/Button";

interface EventData {
  schedule: {
    title: string;
    dates: string;
    time: string;
    venue: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
  };
  event: {
    title: string;
    description: string;
    entryFee: string;
    buttonText: string;
  };
}

interface TwoColumnLayoutProps {
  eventData: EventData[];
  className?: string;
  onButtonClick?: () => void;
  eventIndex?: number;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  eventData,
  className = "",
  onButtonClick,
  eventIndex = 0,
}) => {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  // Safety check to ensure eventData exists and has the specified index
  if (!eventData || !eventData[eventIndex]) {
    return <div>No event data available</div>;
  }

  const currentEvent = eventData[eventIndex];

  if (isSmallDevice) {
    // Mobile layout: stacked with right column first
    return (
      <div className={`flex flex-col w-full p-6 space-y-6 ${className}`}>
        {/* Right Column - full width on mobile, shows first */}
        <div className="w-full">
          <p className="text-sm cardoregular text-base-content">
            {currentEvent.schedule.dates}
            <span className="ml-3">{currentEvent.schedule.time}</span>
          </p>
          <h1 className="text-3xl montserratlight text-base-content mt-6 mb-1">
            {currentEvent.event.title}
          </h1>
          <p className="text-lg cardoregular text-base-content mt-2">
            {currentEvent.event.description}
          </p>
          <p className="text-xl cardoregular text-base-content mt-4">
            Entry fee: {currentEvent.event.entryFee}
          </p>
        </div>

        {/* Left Column - full width on mobile, shows second */}
        <div className="w-full mb-6">
          <div className="space-y-1">
            <p className="text-sm cardoregular text-base-content">
              {currentEvent.schedule.venue}
            </p>
            <p className="text-sm cardoregular text-base-content">
              {currentEvent.schedule.address.street}
            </p>
            <p className="text-sm cardoregular text-base-content">
              {currentEvent.schedule.address.city},{" "}
              {currentEvent.schedule.address.state}{" "}
              {currentEvent.schedule.address.zip}
            </p>
            <p className="text-sm cardoregular text-base-content mb-4">
              {currentEvent.schedule.address.country}
            </p>
            <Button
              backgroundColor="#931621"
              hoverColor="#ffc285"
              textColor="#ffc285"
              theclassName="btn-secondary"
              onClick={handleClick}
            >
              {currentEvent.event.buttonText}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout: original two-column layout
  return (
    <div className={`flex w-full p-6 ${className}`}>
      {/* Left Column - 1/4 width */}
      <div className="w-1/4 pr-6">
        <h2 className="text-3xl montserratlight text-base-content mb-1">
          {currentEvent.schedule.title}
        </h2>
        <div className="space-y-1 mt-6">
          <p className="text-sm cardoregular text-base-content">
            {currentEvent.schedule.dates}
          </p>
          <p className="text-sm cardoregular text-base-content">
            {currentEvent.schedule.time}
          </p>
          <p className="text-sm cardoregular text-base-content">
            {currentEvent.schedule.venue}
          </p>
          <p className="text-sm cardoregular text-base-content">
            {currentEvent.schedule.address.street}
          </p>
          <p className="text-sm cardoregular text-base-content">
            {currentEvent.schedule.address.city},{" "}
            {currentEvent.schedule.address.state}{" "}
            {currentEvent.schedule.address.zip}
          </p>
          <p className="text-sm cardoregular text-base-content">
            {currentEvent.schedule.address.country}
          </p>
        </div>
      </div>

      {/* Right Column - 3/4 width */}
      <div className="w-3/4">
        <h1 className="text-3xl montserratlight text-base-content mb-1">
          {currentEvent.event.title}
        </h1>
        <p className="text-lg cardoregular text-base-content mt-6">
          {currentEvent.event.description}
        </p>
        <p className="text-xl cardoregular text-base-content mt-4 mb-4">
          Entry fee: {currentEvent.event.entryFee}
        </p>
        <Button
          backgroundColor="#931621"
          hoverColor="#ffc285"
          textColor="#ffc285"
          theclassName="btn-secondary"
          onClick={handleClick}
        >
          {currentEvent.event.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default TwoColumnLayout;