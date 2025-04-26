export default function Footer() {
  const Datas = {
    about: {
      heading: "TRYST 2025",
      description:
        "The annual cultural festival of Keshav Mahavidyalaya, Delhi University. Join us for three days of music, dance, art, and more!",
      icons: [
        "fab fa-facebook-f",
        "fab fa-instagram",
        "fab fa-twitter",
        "fab fa-youtube",
      ],
    },
    links: ["Home", "About", "Events", "Artists", "Registration"],
    contact: {
      email: "tryst2025@keshav.du.ac.in",
      phone: "+91 98765 43210",
      address: "Keshav Mahavidyalaya, Delhi University",
    },
  };

  return (
    <footer className="w-full bg-[#1a0033] text-white py-10 ">
      <div className="justify-between px-15 md:flex-row space-y-8 md:space-y-0 grid gird-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* About Section */}
        <div className="flex flex-col w-[300px] px-[10px] text-white gap-y-[10px]">
          <h1 className="text-yellow-500 text-2xl font-bold =">
            {Datas.about.heading}
          </h1>
          <p className="text-white ">{Datas.about.description}</p>
          <ul className="space-x-4 mt-4">
            {Datas.about.icons.map((icon, idx) => (
              <a href="" key={"icon" + idx}>
                <i className={icon}></i>
              </a>
            ))}
          </ul>
        </div>
        {/* Quick link */}
        <div className="flex flex-col w-[300px] px-[10px]">
          <h1 className="text-yellow-500 text-xl font-bold">Quick link</h1>
          <ul className="flex flex-col text-white text-xl">
            {Datas.links.map((link, idx) => (
              <li key={"icon" + idx}>
                <a
                  href="#"
                  className="hover:text-yellow-500"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col w-[300px] px-[10px] text-white ">
          <h1 className="text-yellow-500 text-2xl font-bold =">Contact </h1>
          <p>Email:{Datas.contact.email}</p>
          <p>Phone:{Datas.contact.phone}</p>
          <p>Address:{Datas.contact.address}</p>
        </div>
        {/* Subscribe Section */}
        <div className="flex flex-col w-[300px] text-white px-[10px]">
          <h1 className="text-yellow-500 text-2xl font-bold">Subscribe</h1>
          <p className="text-[18px]">
            Subscribe to our newletter to get updates about 2025{" "}
          </p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 bg-[#4b006e] text-white border border-[#6a00a8] outline-none"
            />
            <button className="bg-yellow-500 text-[#34005c]  hover:bg-yellow-600 px-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="w-[90%] mx-auto opacity-50 mt-4" />
      <h1 className="text-white text-center mt-[12px] text-xl">
        Du Fest 2025 Copyright © . All rights reserved.
      </h1>
    </footer>
  );
}
