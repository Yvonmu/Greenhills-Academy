/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "../Button/Button";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

function Card({ title, description, image }: CardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div className="card">
      <div className="image" style={{ height: "100%", width: "100%" }}>
        <div className="text flex flex-col gap-4">
          <p className="font-bold text-white">{title}</p>
          <Button
            action={description}
            name="Know More →"
            background="#018c79"
            border="1px solid var(--color-border)"
            color="#fff"
          />
        </div>
        {isLoading && (
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-full h-[300px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <div className="loading-container">
                <div className="loading"></div>
                <div id="loading-text">
                  loading
                  <div
                    role="status"
                    className="flex items-center justify-center h-56 w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                  >
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="error-message h-[300px]">Error loading image</div>
        )}
        <img
          src={image}
          alt="image"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
            display: isLoading || error ? "none" : "block",
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default Card;
