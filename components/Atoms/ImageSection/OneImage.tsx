/* eslint-disable @next/next/no-img-element */
import React from 'react'
interface SectionProps {
    headerTitle: string;
    image: string[];
  }
export default function OneImage({ headerTitle, image }: SectionProps) {
  return (
    <div>
       <div
          id="alumni"
          className="w-full h-full flex items-center justify-center"
        >
          <div className="h-[80%] w-[80%] py-8 gap-8 flex-col">
            <h1 className="text-primary uppercase text-center">
              {headerTitle}
            </h1>
            <div className=" flex justify-center items-center">
              <img
                className="h-full w-full object-contain"
                src={image[0]}
                alt="Image"
              />
            </div>
          </div>
        </div>
    </div>
  )
}
