/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import LayoutTemplates from "@/components/Molecules/LayoutTemplates";
import SplashScreen from "../Organisms/SplashScreen";
import SocialMedia from "../Atoms/SocialMedia";
import SubscribeInput from "../Atoms/SubscribeInput";

interface FormDataItem {
  _id: string;
  slug: string;
  description: string;
  category: string;
  image: string[];
  doc: string;
  docTitle: string;
  docUrl: string;
  layoutSection: string;
  headerTitle: string;
  headerDescription: string;
  createdAt: Date;
  backgroundImage: string[];
  backgroundVideo: string;
  backgroundImageTitle: string;
  backgroundImageButton: string;
  backgroundImageUrl: string;
  leadershipId: string;
  reasonjoinId: string;
  missionId: string;
  numbersId: string;
  newsId: string;
  universitiesId: string;
  schoolcardId: string;
  aboutcardId: string;
  boardingcardId: string;
  otherTitle: string;
  selectedCategory: string;
  iconUrl: string;
  alumniId: string;
  galleryId: string;
}

interface PropsData {
  endpoint: string;
  landing?: boolean;
}

export default function GetData({
  endpoint,
  landing
}: PropsData) {
  const [formDataList, setFormDataList] = useState<FormDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading to true when fetching starts
        const response = await axios.get<FormDataItem[]>(endpoint);
        setFormDataList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading to false when fetching completes (whether successful or not)
      }
    };
  
    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array means this effect runs only once after the component mounts
  

  // Sort formDataList by createdAt with "header_image" first
  const sortedFormDataList = formDataList.slice().sort((a, b) => {
    if (a.slug === "header_image" && b.slug !== "header_image") {
      return -1; // a should come before b
    } else if (a.slug !== "header_image" && b.slug === "header_image") {
      return 1; // b should come before a
    } else {
      // If both have the same slug or neither is "header_image", sort by createdAt
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
  });

  return (
    <div>
      {isLoading ? ( // Render loading indicator if isLoading is true
        <SplashScreen />
      ) : (
        sortedFormDataList.map((formDataItem) => (
          <div key={formDataItem._id}>
            <LayoutTemplates
              {...formDataItem}
              landing={landing === true ? true : false}
            />
          </div>
        ))
      )}
      {landing===true&&<div
          style={{
            backgroundImage: `url(${"./icons/bgwhite2_lpw73r.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="">
            <div className="w-full py-12 gap-4 grid">
              <div className="flex justify-center">
                <div className="w-[55px] grid place-items-center">
                  <div className="w-[18px] h-[7px] my-2 bg-primary" />
                  <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                </div>
              </div>
              <h1 className="text-center text-primary font-bold">
                CONNECT WITH US
              </h1>
              <p className="text-primary text-center font-semibold">
                @GHA_rwanda
              </p>
              <div className="flex justify-center">
                <div className="w-2/3">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
          <SubscribeInput />
        </div>}
    </div>
  );
}
