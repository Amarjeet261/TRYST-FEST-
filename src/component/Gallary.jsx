import { useState } from "react";

export default function Gallery() {
  const [setGallery, updateGallery] = useState(1);

  const Datas = [{ year: "2024" }, { year: "2023" }, { year: "2022" }];

  const Concert = {
    gallery1: [
      {
        img: "https://dubeat.com/wp-content/uploads/2019/06/IMG_20190621_042702.png",
      },
      {
        img: "https://cdn.pixabay.com/photo/2017/08/01/14/51/concert-2566002_1280.jpg",
      },
      {
        img: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/03/14/Pictures/performance-confluence-hindustan-college-cultural-students-enjoying_451e127c-088b-11e7-ba13-f6aef3964879.JPG",
      },
      {
        img: "https://images.shiksha.com/mediadata/images/articles/1490877207php35Znzn.jpeg",
      },
      {
        img: "https://png.pngtree.com/thumb_back/fh260/background/20240627/pngtree-singer-singing-on-stage-on-a-concert-image_15829097.jpg",
      },
      {
        img: "https://media.istockphoto.com/id/1137781483/photo/black-male-guitarist-singing-and-playing-acoustic-guitar-on-stage.jpg?s=612x612&w=0&k=20&c=FumC-iuwoUWijPo6wcx4V162mV5PB8g7FQGOR7A1a88=",
      },
      {
        img: "https://c1.wallpaperflare.com/preview/361/703/711/singer-vocalist-performer-on-stage.jpg",
      },
      {
        img: "https://wallpapers.com/images/hd/arijit-singh-indian-singer-guitar-performance-on-stage-fuw4t0crzw32rnfx.jpg",
      },
      {
        img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    gallery2: [
      {
        img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        img: "https://dubeat.com/wp-content/uploads/2019/06/IMG_20190621_042702.png",
      },
      {
        img: "https://cdn.pixabay.com/photo/2017/08/01/14/51/concert-2566002_1280.jpg",
      },
      {
        img: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/03/14/Pictures/performance-confluence-hindustan-college-cultural-students-enjoying_451e127c-088b-11e7-ba13-f6aef3964879.JPG",
      },
      {
        img: "https://images.shiksha.com/mediadata/images/articles/1490877207php35Znzn.jpeg",
      },
      {
        img: "https://png.pngtree.com/thumb_back/fh260/background/20240627/pngtree-singer-singing-on-stage-on-a-concert-image_15829097.jpg",
      },
      {
        img: "https://media.istockphoto.com/id/1137781483/photo/black-male-guitarist-singing-and-playing-acoustic-guitar-on-stage.jpg?s=612x612&w=0&k=20&c=FumC-iuwoUWijPo6wcx4V162mV5PB8g7FQGOR7A1a88=",
      },
      {
        img: "https://c1.wallpaperflare.com/preview/361/703/711/singer-vocalist-performer-on-stage.jpg",
      },
      {
        img: "https://wallpapers.com/images/hd/arijit-singh-indian-singer-guitar-performance-on-stage-fuw4t0crzw32rnfx.jpg",
      },
    ],
    gallery3: [
      {
        img: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/03/14/Pictures/performance-confluence-hindustan-college-cultural-students-enjoying_451e127c-088b-11e7-ba13-f6aef3964879.JPG",
      },
      {
        img: "https://cdn.pixabay.com/photo/2017/08/01/14/51/concert-2566002_1280.jpg",
      },
      {
        img: "https://dubeat.com/wp-content/uploads/2019/06/IMG_20190621_042702.png",
      },
      {
        img: "https://cdn.pixabay.com/photo/2017/08/01/14/51/concert-2566002_1280.jpg",
      },
      {
        img: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/03/14/Pictures/performance-confluence-hindustan-college-cultural-students-enjoying_451e127c-088b-11e7-ba13-f6aef3964879.JPG",
      },
      {
        img: "https://images.shiksha.com/mediadata/images/articles/1490877207php35Znzn.jpeg",
      },
      {
        img: "https://png.pngtree.com/thumb_back/fh260/background/20240627/pngtree-singer-singing-on-stage-on-a-concert-image_15829097.jpg",
      },
      {
        img: "https://media.istockphoto.com/id/1137781483/photo/black-male-guitarist-singing-and-playing-acoustic-guitar-on-stage.jpg?s=612x612&w=0&k=20&c=FumC-iuwoUWijPo6wcx4V162mV5PB8g7FQGOR7A1a88=",
      },
      {
        img: "https://c1.wallpaperflare.com/preview/361/703/711/singer-vocalist-performer-on-stage.jpg",
      },
    ],
  };

  return (
    <section className="min-h-[730px] bg-[#1a0033] flex flex-col items-center pb-15 px-4 md:px-0">
      <h1 className="text-yellow-500 text-[45px] font-bold text-center pt-19">
        Gallery
      </h1>
      <hr className="w-[85px] border-t-4 border-yellow-500 mx-auto pb-8" />
      <p className="text-white text-center text-[22px]">
        Relive the memories from preview edition of TRYST through our Gallery
      </p>

      {/* Year btn */}
      <div className="h-[40px] w-full max-w-[500px] border-2 text-white flex items-center justify-between px-3 mt-[25px] rounded-lg">
        {Datas.map((iteme, index) => (
          <button
            key={index}
            className={`px-4 rounded-lg transition duration-300 ${
              setGallery === index + 1
                ? "bg-yellow-500 text-black"
                : "bg-transparent"
            }`}
            onClick={() => updateGallery(index + 1)}
          >
            {iteme.year}
          </button>
        ))}
      </div>

      {/* Image Gallery */}
      {setGallery == 1 ? (
        <div className="flex flex-wrap gap-5 justify-center mt-5">
          {Concert.gallery1.map((picks) => {
            return (
              <img
                src={picks.img}
                alt="Concert"
                className="h-[250px] w-[90%] sm:w-[400px] rounded-lg cursor-pointer hover:scale-105 transition duration-300"
              />
            );
          })}
        </div>
      ) : null}
      {setGallery == 2 ? (
        <div className="flex flex-wrap gap-5 justify-center mt-5">
          {Concert.gallery2.map((picks) => {
            return (
              <img
                src={picks.img}
                alt="Concert"
                className="h-[250px] w-[90%] sm:w-[400px] rounded-lg cursor-pointer hover:scale-105 transition duration-300"
              />
            );
          })}
        </div>
      ) : null}

      {setGallery == 3 ? (
        <div className="flex flex-wrap gap-5 justify-center mt-5">
          {Concert.gallery3.map((picks) => {
            return (
              <img
                src={picks.img}
                alt="Concert"
                className="h-[250px] w-[90%] sm:w-[400px] rounded-lg cursor-pointer hover:scale-105 transition duration-300"
              />
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
