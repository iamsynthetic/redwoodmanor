import { useState } from "react";
import BreakfastMenu from "./BreakfastMenu";
import LunchMenu from "./LunchMenu";
import DinnerMenu from "./DinnerMenu";
import { Button } from "../button/Button";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState<
    "breakfast" | "lunch" | "dinner"
  >("breakfast");

  const renderMenu = () => {
    switch (selectedMenu) {
      case "breakfast":
        return <BreakfastMenu />;
      case "lunch":
        return <LunchMenu />;
      case "dinner":
        return <DinnerMenu />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="mt-64">
          <h2 className="montserratlight text-5xl md:text-8xl text-base-content text-left md:text-center">
            Our Menu
          </h2>
        </div>
      </div>

      <div className="flex flex-row w-full justify-center items-center gap-5 mt-10 mb-15">
        <Button
          backgroundColor="#931621"
          hoverColor="#ffc285"
          textColor="#ffc285"
          theclassName={`btn-secondary ${
            selectedMenu === "breakfast"
              ? "bg-neutral text-base-100 cursor-not-allowed"
              : ""
          }`}
          onClick={() => setSelectedMenu("breakfast")}
        >
          Breakfast
        </Button>
        <Button
          backgroundColor="#931621"
          hoverColor="#ffc285"
          textColor="#ffc285"
          theclassName={`btn-secondary ${
            selectedMenu === "lunch"
              ? "bg-neutral text-base-100 cursor-not-allowed"
              : ""
          }`}
          onClick={() => setSelectedMenu("lunch")}
        >
          Lunch
        </Button>
        <Button
          backgroundColor="#931621"
          hoverColor="#ffc285"
          textColor="#ffc285"
          theclassName={`btn-secondary ${
            selectedMenu === "dinner"
              ? "bg-neutral text-base-100 cursor-not-allowed"
              : ""
          }`}
          onClick={() => setSelectedMenu("dinner")}
        >
          Dinner
        </Button>
      </div>
      {renderMenu()}
    </>
  );
};

export default Menu;
