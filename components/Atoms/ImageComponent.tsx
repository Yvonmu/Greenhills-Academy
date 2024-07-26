import React from "react";
import One from "./ImageDesign/One";
import TwoSpecial from "./ImageDesign/TwoSpecial";
import Three from "./ImageDesign/Three";
import Four from "./ImageDesign/Four";
import Two from "./ImageDesign/Two";

interface Props {
  images: string | string[];
  color: string;
  special?: boolean;
  layoutSection: string;
}

const ImageComponent: React.FC<Props> = ({
  images,
  color,
  special,
  layoutSection,
}) => {
  const getDesign = (images: string | string[]) => {
    if (Array.isArray(images)) {
      const imagesLength = images.length;
      if (imagesLength === 1) {
        return (
          <One image={images[0]} color={color} layoutSection={layoutSection} />
        );
      } else if (imagesLength === 2) {
        return special ? (
          <TwoSpecial images={images} color={color} />
        ) : (
          <Two images={images} color={color} />
        );
      } else if (imagesLength === 3) {
        return <Three images={images} color={color} />;
      } else {
        return <Four images={images} color={color} />;
      }
    } else {
      return <One image={images} color={color} layoutSection={layoutSection} />;
    }
  };

  return <div className="">{getDesign(images)}</div>;
};

export default ImageComponent;
