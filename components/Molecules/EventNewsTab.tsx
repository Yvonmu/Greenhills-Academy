import { NewsEventData, CalendarData } from "../../utils/news&eventData";
import React from "react";
import GetNews from "./GetNews";
import CalendarList from "../Atoms/CalendarSection";

const EventNewsTab = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="sm:my-4 md:my-16 gap-8">
          <GetNews />
        </div>
      </div>
      <div className="pb-[22px] mt-12 grid grid-rows-1 gap-8">
        <h1 className="text-primary">Upcoming Events Calendar</h1>

        <div className="grid md:grid-cols-2 gap-4">
          <CalendarList calendarData={CalendarData} />
        </div>
      </div>
    </div>
  );
};

export default EventNewsTab;
