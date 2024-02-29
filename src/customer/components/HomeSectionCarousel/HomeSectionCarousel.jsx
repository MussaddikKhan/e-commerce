import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const HomeSectionCarousel = ({ data , sectionName}) => {
  // const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5},
  };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <KeyboardArrowLeft
        style={{
          position: "absolute",
          top: "8rem",
          left: "0rem",
          transform: "translateX(-50%)",
          backgroundColor: "#f8f8ff",
          cursor: "pointer",
        }}
      />
    );
  };
  const renderNextButton = ({ isDisabled }) => {
    return (
      <KeyboardArrowRight
        style={{
          position: "absolute",
          top: "8rem",
          right: "0rem",
          transform: "translateX(-50%)",
          backgroundColor: "#f8f8ff",
          cursor: "pointer",
        }}
      />
    );
  };

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-900 py-5">{sectionName}</h2>
      <div className="relative p-5 border">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          keyboardNavigation="true"
          disableDotsControls
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;