import OneImage from "@/components/Atoms/ImageSection/OneImage";
import React from "react";

interface SectionProps {
  headerTitle: string;
  image: string[];
}

export default function ImageSection({ headerTitle, image }: SectionProps) {
  return (
    <div>
      <OneImage headerTitle={headerTitle} image={image} />
    </div>
  );
}
