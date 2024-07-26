/* eslint-disable @next/next/no-img-element */
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useEffect, useState } from 'react'
import { EventSourceInput } from '@fullcalendar/core/index.js'

interface Event {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
}

export default function CalendarPage() {
  const [allEvents, setAllEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch('/api/calendar')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAllEvents(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <section className='md:pt-8'>
     <div className="flex justify-center items-center">
        <div className="">
          <div className="flex justify-center">
            <img
              src="https://greenhillsacademy.rw:8081/images/logo_pjrxda.png"
              alt="Logo Top"
              className={"h-[150px] w-[150px] sm:h-[80px] sm:w-[80px]"}
            />
          </div>
          <p className="font-bold">Green Hills Academy Calendar</p>
        </div>
      </div>
      <main className="flex flex-col items-center justify-between p-4 md:p-24">
        <div className="w-full">
          <div className="">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
              }}
              events={allEvents as EventSourceInput}
              nowIndicator={true}
              editable={false}
              droppable={false}
              selectable={false}
              selectMirror={false}
            />
          </div>
        </div>
      </main>
    </section>
  )
}
