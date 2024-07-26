/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import { BiCalendar } from "react-icons/bi";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Button from "../Atoms/Button/Button";

const GetNews = () => {
  // Function to format date string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]} ${day} ${year}`;
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const [formDataList, setFormDataList] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<any[]>("/api/news");
      setFormDataList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid md:grid-cols-2 gap-4">
        {formDataList.map((item) => {
          const formattedDate = formatDate(item.createdAt);

          const paragraphs = item.description
            ? item.description.split(/\n\s*\n/)
            : [];
          const truncatedDescription =
            paragraphs.length > 0
              ? paragraphs[0].split(" ").slice(0, 20).join(" ")
              : "";

          return (
            <div
              key={item._id}
              ref={container}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("/icons/green_c6iapo.svg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full bg-green p-4 gap-8 border rounded-xl shadow-lg"
            >
              <div className="flex justify-between flex-col h-full">
                <div>
                  <div className="h-[300px]">
                    <div className="bgImageContainer">
                      <motion.div
                        className={"inner"}
                        style={{ scale: imageScale }}
                      >
                        <img
                          src={
                            Array.isArray(item.imageUrl)
                              ? item.imageUrl[0]
                              : item.imageUrl
                          }
                          alt="Image"
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className="mt-4 flex-col justify-start items-start gap-1 inline-flex">
                    <h4 className="font-bold text-[yellow]">{item.title}</h4>
                  </div>
                  <div className="text-lg mt-2 text-white flex gap-1 items-center">
                    <BiCalendar />
                    <p className="text-sm">{formattedDate}</p>
                  </div>
                  <p className=" mt-2 text-white font-normal text-justify">
                    {truncatedDescription}...
                  </p>
                </div>
                <div className="mt-12 mb-4">
                  <Button
                    action={`/news/${item.slug}?tab=events`}
                    name="View More"
                    background="#fff"
                    border="1px solid var(--color-border)"
                    color="#018c79"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetNews;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "80vh",
    overflow: "scroll",
  },
};
