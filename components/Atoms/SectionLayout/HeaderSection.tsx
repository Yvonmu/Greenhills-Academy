/* eslint-disable @next/next/no-img-element */
import ButtonBlank from "@/components/Atoms/Button/ButtonBlank";
import React, { useState } from "react";

interface LayoutTemplatesProps {
  backgroundImage: string[];
  backgroundVideo: string;
  backgroundImageTitle: string;
  backgroundImageButton: string;
  backgroundImageUrl: string;
  headerTitle: string;
}
export default function HeaderSection({
  backgroundImage,
  backgroundVideo,
  backgroundImageTitle,
  backgroundImageButton,
  backgroundImageUrl,
  headerTitle,
}: LayoutTemplatesProps) {
  const [loading, setLoading] = useState(true);

  const handleLoadedData = () => {
    setLoading(false);
  };
  const videoWithoutSpaces = backgroundVideo.replace(/\s/g, "%20");
  const imageWithoutSpaces =
    backgroundImage && backgroundImage.length > 0
      ? backgroundImage[0].replace(/\s/g, "%20")
      : "";
  return (
    <div className="h-full">
      {backgroundVideo && (
        <div>
          <section className="md:relative md:h-[85vh] w-full overflow-hidden">
            {/* Background Video */}
            {loading && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-300">
                <div role="status">
                  <div className="items-center h-full w-screen">
                    <div className="loading-container">
                      <div className="loading"></div>
                      <div id="loading-text">
                        loading
                        <div
                          role="status"
                          className="flex items-center justify-center h-56 w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                        >
                          <svg
                            className="w-10 h-10 text-white dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 20"
                          >
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="md:absolute inset-0 w-full h-full overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  autoPlay
                  muted
                  loop
                  className="object-cover w-full h-full"
                  onLoadStart={() => setLoading(true)}
                  onLoadedMetadata={handleLoadedData}
                  onLoadedData={handleLoadedData}
                >
                  <source src={`${videoWithoutSpaces}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        </div>
      )}
      {backgroundImage && backgroundImage.length > 0 && (
        <div
          className="w-full h-[70vh] gap-1 flex flex-col pb-4 items-center justify-end "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${imageWithoutSpaces})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {headerTitle && (
            <div>
              <div className="flex justify-center">
                <div className="w-[55px] grid place-items-center">
                  <div className="w-[18px] h-[7px] my-2 bg-[yellow]" />
                  <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                </div>
              </div>
              <div className="flex justify-center">
                <h1 className="text-primary capitalize">{headerTitle}</h1>
              </div>
            </div>
          )}
          {backgroundImageTitle && (
            <p className="md:w-[45%] w-[80%] text-center text-white">
              {backgroundImageTitle}
            </p>
          )}
          {backgroundImageButton && (
            <ButtonBlank
              name={backgroundImageButton}
              action={backgroundImageUrl}
              background="#018c79"
              color="#fff"
            />
          )}
        </div>
      )}
      {headerTitle && backgroundImage.length == 0 && (
        <section
          className="w-full pt-28"
          style={{
            backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex h-[300px] items-end justify-center">
            <div className="text-center w-[80%] my-12">
              <div className="flex justify-center">
                <div className="w-[55px] grid place-items-center">
                  <div className="w-[18px] h-[7px] my-2 bg-primary" />
                  <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                </div>
              </div>
              <div className="flex justify-center">
                <h1 className="text-primary capitalize">{headerTitle}</h1>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
