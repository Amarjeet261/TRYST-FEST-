import Navbar from './Navbar';
import '../index.css';

export default function Header() {

  const Datas = {
    title: "TRYST 2025",
    subtitle: "Annual Cultural Fest of Keshav Mahavidyalaya",
    date: "March 15-17, 2025 | Delhi, India",
    timer:[
      {
        text:"17",
        para:"Days ",
      },

      {
        text:"12",
        para:"Hours ",
      },
      {
        text:"13",
        para:"Minutes",
      },
      {
        text:"9",
        para:"second ",
      },
    
    ],
    buttons: [
      { text: "Register Now",
         link: "#", 
         style: "bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-600 transition" },
      { text: "Learn More",
         link: "#", 
         style: "bg-[#23003d] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#35005d] transition" },
    ],
  };
  return (
    <>
      <header
        className="relative h-full w-full"
        style={{
          backgroundImage: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(35, 0, 61, 0.7), rgba(102, 0, 51, 0.7)), url('https://vorlane.com/wp-content/uploads/2024/11/Concert-stage-setup-with-professional-lighting-LED-screens-sound-equipment-and-instruments-for-a-dynamic-live-performance.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center w-full h-full gap-6  ">
          <h1 className="text-4xl sm:text-5xl  md:text-6xl lg:text-7xl font-bold  flex items-center text-white gap-5 text-center  ">
            <span className="text-yellow-500 font-bold animate-pulse drop-shadow-[0px_0px_10px_rgb(255,193,7)]">{Datas.title.split(' ')[0]}</span> {Datas.title.split(' ')[1]}
          </h1>
          {/* show date and subtitle */}
          <div className="text-white text-center text-lg sm:text:xl md:text-2xl">
            <h3 className='text-2xl sm:text-3xl md:text-4xl'>{Datas.subtitle}</h3>
            <p className='text-2xl sm:text-2xl md:text-3xl'>{Datas.date}</p>
          </div>
          {/*show timer button */}
          <div className="flex gap-3 sm:gap-5 mt-4">
            {Datas.timer.map((time, index) => (
              <div key={index} className="flex flex-col items-center text-white font-bold">
                <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl bg-[#34005c] rounded-md">
                  {time.text}
                </div>
                <p className="text-sm sm:text-base">{time.para}</p>
              </div>
            ))}
          </div>
         
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {Datas.buttons.map((button) => (
              <a href={button.link} className={button.style}>
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
