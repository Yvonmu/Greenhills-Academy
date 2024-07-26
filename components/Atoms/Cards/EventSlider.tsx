/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdOutlineReadMore } from "react-icons/md";
import Button from "../Button/Button";


interface EventSliderProps {
  title: string;
  date: string;
  description: string;
  slug: string;
  videoUrl?: string;
  imageUrl: string[];
}

export default function EventSlider({
  date,
  slug,
  title,
  description,
  imageUrl,
  videoUrl,
}: EventSliderProps) {
  // Count words in title and description
  const titleWords = title.split(" ");
  const descriptionWords = description.split(" ");

  // Define the fixed total word count
  const fixedWordCount = 50;

  // Calculate how many words from each part to include
  const truncatedTitleWords = Math.min(titleWords.length, fixedWordCount);
  const truncatedDescriptionWords = Math.min(
    descriptionWords.length,
    fixedWordCount - truncatedTitleWords
  );

  // Combine the truncated words
  const truncatedTitle = titleWords.slice(0, truncatedTitleWords).join(" ");
  const truncatedDescription =
    descriptionWords.slice(0, truncatedDescriptionWords).join(" ") + " ...";

  return (
    <div className="w-full h-full md:p-8 sm:p-2">
      <div className="flex sm:flex-col gap-12 h-full">
        <div className="md:hidden md:w-full md:h-full image-content">
          <div className="image">
            <div className="md:w-full overflow-hidden md:h-[50vh] sm:h-[300px] relative flex items-end">
              <img
                className="w-full h-full top-0 absolute"
                src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl}
                alt="Event Image"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-between flex-col text-white">
          <div>
            <h3 className="font-bold mb-2">{truncatedTitle}</h3>
            <p className="text-white pb-6 text-justify">
              {truncatedDescription}
            </p>
          </div>
          <div className="">
            <Button
              action={`/news/${slug}`}
              name="View More"
              background="#fff"
              border="1px solid var(--color-border)"
              color="#018c79"
              icon={<MdOutlineReadMore />}
            />
          </div>
        </div>

        <div className="sm:hidden md:w-full md:h-full image-content">
          <div className="image">
            <div className="md:w-full overflow-hidden md:h-[50vh] sm:h-[300px] relative flex items-end">
              <img
                className="w-full h-full top-0 absolute"
                src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl}
                alt="Event Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
