/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line react-hooks/rules-of-hooks
import React, { useRef, useState } from "react";
import Error from "next/error";
import Image from "next/image";
import { NewsEventData, CalendarData } from "../../utils/news&eventData";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/router";

const ReadMoreEvent = ({ job }: any) => {
  if (!job) {
    return <Error statusCode={404} />;
  }
  const paragraphs = job.description.split(/\n\s*\n/);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showControls, setShowControls] = useState(false);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setShowControls(true);
      });
    }
  };

  const handlePause = () => {
    setShowControls(false);
  };
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // This function navigates back to the previous page
  };
  return (
    <>
      {job.videoUrl ? (
        <>
          <section className="w-full h-[70vh] gap-1 flex flex-col  items-center justify-center">
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black bg-opacity-50"></div>
                <video
                  ref={videoRef}
                  muted
                  loop
                  controls={showControls}
                  onEnded={() => setShowControls(false)}
                  onPause={handlePause}
                  className="object-cover w-full h-full"
                  style={{ width: "100%", height: "100%" }}
                >
                  <source src={job.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!showControls && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={playVideo}
                  >
                    <div className="bg-primary rounded-full p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="yellow"
                        viewBox="0 0 24 24"
                        stroke="yellow"
                        className="h-8 w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3l14 9-14 9V3z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-center mt-8">
              <div className="w-[55px] grid place-items-center">
                <div className="w-[55px] h-[7px] bg-green" />
                <div className="w-[18px] h-[7px] my-2 bg-primary" />
              </div>
            </div>
            <h2 className="text-primary capitalize text-center">{job.title}</h2>
          </section>
        </>
      ) : (
        <section
          className="w-full h-[70vh] gap-1 flex flex-col  items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${
              Array.isArray(job.imageUrl) ? job.imageUrl[0] : job.imageUrl
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        >
          <div className="flex justify-center">
            <div className="w-[55px] grid place-items-center">
              <div className="w-[55px] h-[7px] bg-white" />
              <div className="w-[18px] h-[7px] my-2 bg-primary" />
            </div>
          </div>
          <h1 className="text-white capitalize text-center">{job.title}</h1>
        </section>
      )}

      <section className="flex justify-center ">
        <div className="w-[80%] md:my-8">
          <div className="flex flex-col gap-12 w-full p-4">
            {paragraphs.map((paragraph: String, index: number) => (
              <p key={index} className="my-4 font-normal text-justify">
                {paragraph}
              </p>
            ))}
            <div className="cardGrid gap-12">
              {job.imageUrl &&
                job.imageUrl.slice(1).map((image: string, index: number) => (
                  <div key={index} className="">
                    <Image unoptimized
                      placeholder="empty"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={image}
                      alt={`Event ${index}`}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                ))}
            </div>
            <div>
              <button
                onClick={handleBackClick}
                className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
              >
                <MdArrowBack />
                Go back
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ReadMoreEvent;

interface Params {
  slug: string;
}
export async function getServerSideProps({ params }: { params: Params }) {
  const { slug } = params;
  const foundJob = NewsEventData.find((job) => job.slug === slug);
  if (foundJob) {
    const job = {
      title: foundJob.title || "",
      date: foundJob.date || "",
      description: foundJob.description || "",
      imageUrl: foundJob.imageUrl || "",
      slug: foundJob.slug || "",
      videoUrl: foundJob.videoUrl || null,
    };

    return {
      props: {
        job,
      },
    };
  }

  // If no job is found, return a 404 page
  return {
    notFound: true,
  };
}
