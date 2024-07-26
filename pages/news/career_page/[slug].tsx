import React from "react";
import { VscBriefcase, VscTypeHierarchy } from "react-icons/vsc";
import { AiOutlineClockCircle, AiOutlineExperiment } from "react-icons/ai";
import { BiSolidStarHalf, BiTimer } from "react-icons/bi";
import { BsCashCoin, BsFillBuildingFill } from "react-icons/bs";
import { GiLevelEndFlag } from "react-icons/gi";
import { useRouter } from "next/router";
import Error from "next/error";
import { CareerData } from "../../../utils/news&eventData";
import { ParsedUrlQuery } from "querystring";
import { MdArrowBack } from "react-icons/md";
import Button from "@/components/Atoms/Button/Button";

interface CareerApplyProps {
  job: {
    slug: string;
    title: string;
    type: string;
    posted: string;
    isPublished?: boolean;
    deadline?: string;
    publishDate: string;
    industry?: string;
    jobLevel?: string;
    experience?: string;
    salary?: string;
    imageUrl: string;
    description: string;
  };
}

const CareerApply = ({ job }: CareerApplyProps) => {
  const router = useRouter();
  if (!job) {
    return <Error statusCode={404} />;
  }
  const handleBackClick = () => {
    router.back(); // This function navigates back to the previous page
  };
  return (
    <section className="w-full">
      <div
        className="w-full h-[80vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${job.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <section
        className="w-full grid place-items-center"
        style={{
          backgroundImage: `url(/icons/white2_qkbyoe.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="w-[80%] flex sm:flex-wrap justify-between items-center mt-4">
          <div>
            <h3 className="text-primary font-bold">{job.title}</h3>
            <div className="flex space-x-4 my-2">
              <div className="flex text-sm text-gray-400 space-x-1.5">
                <VscBriefcase className="text-sm mt-0.5 font-bold" />{" "}
                <span>{job.type}</span>
              </div>
              <div className="flex text-sm text-gray-400 space-x-1.5">
                <AiOutlineClockCircle className="text-sm mt-0.5 font-bold" />{" "}
                <span>{job.posted}</span>
              </div>
            </div>
          </div>
          <div>
            <Button
              action={``}
              name="Apply now"
              background="#018c79"
              border="1px solid var(--color-border)"
              color="#fff"
              icon={<BiSolidStarHalf className="text-[yellow]" />}
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="border bg-primary text-white shadow-lg rounded-xl my-12 w-[80%] border-gray-200 p-4">
            <h3 className="font-bold pb-3">Employment Information</h3>
            <hr />
            <div className="my-4 grid md:grid-cols-3 gap-x-8 gap-y-4">
              <div className="flex space-x-4 items-center">
                <p className="flex space-x-2 text-white items-center">
                  <BsFillBuildingFill className="text-[yellow]" />
                  <label className="">Industry:</label>
                </p>
                <p className="">{job.industry}</p>
              </div>
              <div className="flex space-x-4 items-center">
                <p className="flex space-x-2 text-white items-center">
                  <GiLevelEndFlag className="text-[yellow]" />
                  <label className="grid place-items-center">Job level:</label>
                </p>
                <p className="">{job.jobLevel}</p>
              </div>{" "}
              <div className="flex space-x-4 items-center">
                <p className="flex space-x-2 text-white items-center">
                  <BsCashCoin className="text-[yellow]" />
                  <label className="">Salary:</label>
                </p>
                <p className="">{job.salary} Rwf</p>
              </div>{" "}
              <div className="flex space-x-4 items-center">
                <p className="flex space-x-2 text-white items-center">
                  <VscTypeHierarchy className="text-[yellow]" />
                  <label className="">Job type:</label>
                </p>
                <p className="">{job.type}</p>
              </div>
              <div className="flex space-x-4 items-center">
                <p className="flex space-x-2 text-white items-center">
                  <AiOutlineExperiment className="text-[yellow]" />
                  <label className="">Experience:</label>
                </p>
                <p className="">{job.experience}</p>
              </div>
              <div className="flex space-x-4 items-center">
                <p className="flex space-x-2 text-white items-center">
                  <BiTimer className="text-[yellow]" />
                  <label className="">Published:</label>
                </p>
                <p className="">{job.publishDate}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] my-4 p-4">
          <h3 className="font-bold pb-3 text-primary">Job Description</h3>
          <hr />
          <p className="text-justify">{job.description}</p>
          <div className="flex justify-start gap-12 py-6">
            <button
              onClick={handleBackClick}
              className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
            >
              <MdArrowBack />
              Go back
            </button>
            <Button
              action={``}
              name="Apply now"
              background="#018c79"
              border="1px solid var(--color-border)"
              color="#fff"
              icon={<BiSolidStarHalf className="text-[yellow]" />}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default CareerApply;

interface Params extends ParsedUrlQuery {
  slug: string;
}

export async function getServerSideProps({ params }: { params: Params }) {
  const { slug } = params;

  // Find the job object that matches the current slug
  const job = CareerData.find((job) => job.slug === slug);

  return {
    props: {
      job,
    },
  };
}
