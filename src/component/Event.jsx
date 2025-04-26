import { useState } from "react";

export default function Event() {
  const [showEvent, updateEvent] = useState(1);

  const Datas = {
    description:
      "Explore our exciting lineup of events spread across three days of non-stop entertainment, competition, and creativity.",
    days: ["Day 1", "Day 2", "Day 3"],
  };

  const events = {
    day1: [
      {
        title: "Hackathon",
        icon1: "fa-solid fa-clock",
        time: "10:00 AM - 08:00 PM",
        icon2: "fa-solid fa-location-dot",
        location: "Computer Lab",
        para: "24-hour coding competition to build innovative solutions.",
      },
      {
        title: "Battle of Bands",
        icon1: "fa-solid fa-clock",
        time: "04:00 PM - 07:00 PM",
        icon2: "fa-solid fa-location-dot",
        location: "Main Stage",
        para: "Music competition featuring the best college bands.",
      },
      {
        title: "Art Exhibition",
        icon1: "fa-solid fa-clock",
        time: "11:00 AM - 06:00 PM",
        icon2: "fa-solid fa-location-dot",
        location: "Art Gallery",
        para: "Showcase of student artwork from across University.",
      },
    ],
    day2: [
      {
        title: "Dance Competition",
        icon1: "fa-solid fa-clock",
        time: "02:00 PM - 05:00 PM",
        icon2: "fa-solid fa-location-dot",
        location: "Auditorium",
        para: "Solo and group dance performances across various styles.",
      },
      {
        title: "Fashion Show",
        icon1: "fa-solid fa-clock",
        time: "06:00 PM - 08:00 PM",
        icon2: "fa-solid fa-location-dot",
        location: "Main Stage",
        para: "Student designers showcase their own design collections.",
      },
      {
        title: "Treasure Hunt",
        icon1: "fa-solid fa-clock",
        time: "11:00 AM - 03:00 PM",
        icon2: "fa-solid fa-location-dot",
        location: "Campus-wide",
        para: "Team-based competition to solve clues and find the treasure.",
      },
    ],
    day3: [
      {
        title: "Celebrity Perormance",
        icon1: "fa-solid fa-clock",
        time: "7.00 PM - 10.00 PM",
        icon2: "fa-solid fa-location-dot",
        location: "Main stage",
        para: "Special performance by a surprice celebrity artsit.",
      },
      {
        title: "Debate Competition",
        icon1: "fa-solid fa-clock",
        time: "1:00 PM - 4:00 PM",
        icon2: "fa-solid fa-location-dot",
        location: "Conference Hall",
        para: "Inter-college debate on contemporary topics.",
      },
      {
        title: "Award Ceremony",
        icon1: "fa-solid fa-clock",
        time: "5:00 PM - 6:30 PM",
        icon2: "fa-solid fa-location-dot",
        location: "Auditorium",
        para: "Closing ceremony and distribution of prizes to winners.",
      },
    ],
  };

  return (
    <section className="min-h-screen w-screen flex flex-col text-white items-center relative bg-[#130520] z-20 pt-10 pb-10">
      <div className="absolute h-full w-full inset-0 bg-[url('/Event.jpg')] bg-cover bg-center opacity-25 -z-10 bg-fixed"></div>

      <h1 className="text-4xl flex items-center text-white gap-2 pt-10 text-center">
        <span className="text-yellow-500 font-bold">Event</span> 2025
      </h1>

      <hr className="w-[80px] border-t-4 border-yellow-500 mt-4 mx-auto pb-3" />

      {/* Description */}
      <p className="w-full text-center p-5 mb-5 text-3xl sm:text-lg md:text-xl">
        {Datas.description}
      </p>

      {/* Days */}
      <div className="text-white flex justify-between px-4 py-5 items-center bg-[#34005c] h-[50px] w-[73%] rounded-lg">
        {Datas.days.map((day, index) => (
          <button
            key={index}
            className={`border border-transparent py-1 rounded-lg max-sm:px-5 md:px-20 lg:px-30 ${
              showEvent === index + 1
                ? "bg-yellow-500 text-black"
                : "bg-transparent"
            }`}
            onClick={() => updateEvent(index + 1)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      {showEvent === 1 ? (
        <div className="flex items-center justify-center gap-10 pt-[70px] flex-wrap">
          {events.day1.map((event) => {
            return (
              <div
                key={event.title}
                className="min-h-[150px] w-[350px] rounded-lg text-white bg-[#34005c] justify-center flex pl-3 flex-col pb-4 text-left"
              >
                <h2 className="text-[23px] mt-2 text-yellow-500">
                  {event.title}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <i className={event.icon1}></i>
                  <p>{event.time}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <i className={event.icon2}></i>
                  <p>{event.location}</p>
                </div>
                <p className="mt-1 px-2">{event.para}</p>
              </div>
            );
          })}
        </div>
      ) : null}

      {showEvent === 2 ? (
        <div className="flex items-center justify-center gap-10 pt-[70px] flex-wrap">
          {events.day2.map((event) => {
            return (
              <div className="min-h-[150px] w-[350px] rounded-lg text-white bg-[#34005c] justify-center flex pl-3 flex-col pb-4 text-left">
                <h2 className="text-[23px] mt-2 text-yellow-500">
                  {event.title}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <i className={event.icon1}></i>
                  <p>{event.time}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <i className={event.icon2}></i>
                  <p>{event.location}</p>
                </div>
                <p className="mt-1 px-2">{event.para}</p>
              </div>
            );
          })}
        </div>
      ) : null}

      {showEvent === 3 ? (
        <div className="flex items-center justify-center gap-10 pt-[70px] flex-wrap">
          {events.day3.map((event) => {
            return (
              <div className="min-h-[150px] w-[350px] rounded-lg text-white bg-[#34005c] justify-center flex pl-3 flex-col pb-4 text-left">
                <h2 className="text-[23px] mt-2 text-yellow-500">
                  {event.title}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <i className={event.icon1}></i>
                  <p>{event.time}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <i className={event.icon2}></i>
                  <p>{event.location}</p>
                </div>
                <p className="mt-1 px-2">{event.para}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
