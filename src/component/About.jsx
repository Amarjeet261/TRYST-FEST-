export default function About() {
  const Datas = {
    title: "About TRYST",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsa aperiam inventore ab itaque doloribus dignissimos reiciendis delectus quidem similique hic mollitia accusantium temporibus earum velit molestias, nesciunt deleniti vitae odio rerum impedit rem fuga cupiditate voluptates. Nobis nemo quaerat nam veniam, unde in omnis dolorem natus recusandae fugiat nesciunt!",
    cards: [
      {
        icons: "fa-solid fa-location-dot text-yellow-500 text-lg",
        title: "Venue",
        description: "Keshav Mahavidyalaya, Delhi University North Campus",
      },
      {
        icons: "fa-solid fa-calendar text-yellow-500 text-lg",
        title: "Date & Time",
        description: "March 15-17, 2025 | 10:00 AM - 10:00 PM",
      },
      {
        icons: "fa-solid fa-music text-yellow-500 text-lg",
        title: "Event Highlights",
        description: "Live Performance, Dance Competition, Hackathon, Food Festival",
      },
    ],
  };

  return (
    <>
      {/* About-section */}
      <section className="w-full min-h-full bg-[#1a0033] flex flex-col text-white items-center px-4 py-10 pt-10">
        {/* Title */}
        <div className="flex items-center justify-center text-center pt-19 ">
          <h1 className="text-3xl sm:text-4xl flex items-center text-white gap-2 ">
            {Datas.title.split(" ")[0]}
            <span className="text-yellow-500 font-bold">
              {Datas.title.split(" ")[1]}
            </span>
          </h1>
        </div>
        <hr className="w-[80px] border-t-4 border-yellow-500 mt-4 mx-auto pb-6" />
        {/* Description */}
        <div className="min-h-[150px] w-full max-w-4xl flex items-center text-center text-base sm:text-lg md:text-xl">
          <p>{Datas.description}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 w-full max-w-6xl">
          {Datas.cards.map((data) => (
            <div
            
              className="h-[150px] flex flex-col items-center justify-center rounded-lg bg-[#34005c] text-white text-center hover:shadow-[0_8px_15px_rgba(255,0,0,0.6)] transition duration-300 p-4"
            >
              <i className={data.icons}></i>
              <h2 className="text-lg sm:text-xl mt-2"> {data.title}</h2>
              <p className="text-sm sm:text-base mt-1 px-2">{data.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
