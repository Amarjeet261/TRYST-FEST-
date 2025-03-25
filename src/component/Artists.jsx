import { useState } from "react";

export default function Artists() {
  const [set, setclick] = useState(false);
  const [index, setindex] = useState(0);

  const Datas = {
    title: "Featured Artists",
    description:
      "Experience electrifying performances from these talented artists who will be lighting up the stage at TRYST 2025.",
    artists: [
      {
        name: "B.Park",
        song: "Pop",
        img: "https://feeds.abplive.com/onecms/images/uploaded-images/2023/07/29/1f37eb21422af19c276408ada7c13d631690646084487721_original.jpg",
        para: "B Praak is a celebrated Bollywood playback singer and music composer, known for hits like Mann Bharrayaa and Filhall, and describes him as extremely popular among the youth.",
      },
      {
        name: "Jassic Gill",
        song: "Punjabi",
        img: "https://i.ytimg.com/vi/sN1_SjuAG6A/maxresdefault.jpg",
        para: "Jassie Gill, a Punjabi singer and actor, has performed in various cities and events, including live concerts, college shows, and wedding events.",
      },
      {
        name: "Milind Gaba",
        song: "Pop",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA33lSVhqPPDGWaF7Wab12i9TVSs00fWHV14CNBBrOYopLSJ1Eqv11MYLij3i-01bDwHg&usqp=CAU",
        para: "Millind Gaba, an Indian musician, rapper, singer-songwriter, composer, and actor, is known for his live concerts and popular songs like Dilli Waali Baatcheet and Teri Yaad, and has performed in Sambalpur, Odisha.",
      },
      {
        name: "Diljit Dosanjh",
        song: "Punjabi",
        img: "https://images.cnbctv18.com/uploads/2024/06/diljit-dosanjh-2024-06-fb70d536420ffbd9f1fdca2d4d93e740.jpg",
        para: "Diljit Dosanjh recently announced he will stop performing concerts in India until the infrastructure for live shows improves, stating that the current facilities are inadequate and that the sector generates significant revenue and provides livelihoods for many.",
      },
      {
        name: "Guru Randhawa",
        song: "Pop",
        img: "https://i.ytimg.com/vi/hjr8pOT4Y24/maxresdefault.jpg",
        para: "Guru Randhawa, known for songs like High Rated Gabru and Suit Suit, has been involved in several concerts and tours, including the Moon Rise India Tour which started in October 2024, and has faced some cancellations and challenges.",
      },
      {
        name: "Honey Singh",
        song: "Desi Hip Hop",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr63fBKykFGEW2IdjiIpwPBmzU98kBcw9XsbAJXRL-jL70lAH0knDqGMjCRC6CBuxqss8&usqp=CAU",
        para: "Honey Singh's Delhi concert was packed with nostalgic hits, emotional tributes, surprise guests, and exclusive remixes. The rapper promised bigger things ahead as his Millionaire Tour continues.",
      },
    ],
  };

  return (
    <>
      <section className="h-auto w-full bg-[#1a0033]  flex flex-col text-white items-center justify-center">
        {/* heading */}
        <div className="flex items-center justify-center pt-15 sm:text-2xl">
          <h1 className="text-4xl flex items-center text-white gap-2 pt-10 sm:text-4xl "> Featured
            <span className="text-yellow-500 font-bold">Artists</span>
          </h1>
        </div>
        <hr className="w-[85px] border-t-4 border-yellow-500 mt-4 mx-auto pb-9" />
        <div className="min-h-[150px] w-full flex items-center justify-center text-center text-base sm:text-lg px-[5px]">
          <p>{Datas.description}</p>
        </div>
        {/* Arists card */}
        <div className="relative w-full flex flex-wrap justify-center items-center gap-[40px]  max-sm:gap-4 mb-20">
          {Datas.artists.map((artist, index) => (
            <div
              className="h-[250px] w-[370px] border-2 border-pink-400 rounded-lg overflow-hidden flex flex-col bg-cover bg-center transform transition-transform duration-300 hover:scale-105 cursor-pointer "
              style={{ backgroundImage: `url(${artist.img})` }}
              onClick={() => {
                setindex(index);
                setclick(true);
              }}
            >
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold ">{artist.name}</h2>
                <p className="text-yellow-500 ">{artist.song}</p>
              </div>
            </div>
          ))}
          {/* show card */}
          {set && (
            <div className="absolute w-[650px] h-[250px] px-5 bg-[#34005c] rounded-3xl gap-[20px] flex justify-center items-center max-sm:p-[10px] max-sm:flex-col max-sm:w-[300px] max-sm:h-fit">
              <img
                src={Datas.artists[index].img}
                alt={Datas.artists[index].name}
                className="h-40 w-40 object-cover rounded-[20px] mb-4 border-4 border-pink-400"
              />
              <div className="text-white  p-[20px]">
                <h2 className="text-xl font-bold mb-2">
                  {Datas.artists[index].name}
                </h2>
                <p className="text-yellow-500 mb-4 text-2xl ">
                  {Datas.artists[index].song}
                </p>
                <p className="mb-4">{Datas.artists[index].para}</p>
                <button
                  className="mt-2 px-2 py-2 flex items-center justify-center absolute right-[10px] top-0 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
                  onClick={() => setclick(false)}
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
