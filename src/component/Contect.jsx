export default function Contect() {
  const Form = [
    { label: "Full Name", type: "Enter Your Full Name" },
    { label: "College/University", type: "Enter Your College Name" },
    { label: "Email", type: "Enter your Email" },
    { label: "Course", type: "Enter Your Course" },
  ];

  const Contact = [
    { icon: "fa-solid fa-envelope", heading: "Email", para: "tryst.com" },
    {
      icon: "fa-solid fa-phone",
      heading: "Phone",
      para: "+91 9876543211 (General Inquiries)",
    },
  ];

  const Visit = [
    {
      college: "Keshav Mahavidyalaya university of Delhi",
      address: "H-4-5 Zone , pitampura Delhi-110034",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center pb-10 py-20 relative bg-[#130520] z-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute h-full w-full inset-0 bg-[url('/Event.jpg')] bg-cover bg-center opacity-25 -z-10 bg-fixed"></div>
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Contact <span className="text-yellow-500">Us</span>
      </h1>
      <hr className="w-[85px] border-t-4 border-yellow-500 mt-4 mx-auto pb-9" />

      <p className="text-center text-white text-lg sm:text-xl max-w-2xl mx-auto mb-10">
        Have a question about TRYST 2025? Reach out to us and we'll get back to
        you as soon as possible.
      </p>

      {/* Contact Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* First Container */}
        <div className="p-6 bg-[#34005c] rounded-lg">
          <h1 className="text-yellow-500 text-2xl font-bold mb-2">
            Send us a message
          </h1>
          <p className="text-white mb-4">
            Fill out the form below and we'll respond to your query soon.
          </p>

          {/* Form */}
          <div className="flex flex-col gap-4">
            {Form.map((item) => (
              <div className="w-full" key={item.label}>
                <label htmlFor={item.label} className="block text-white mb-1">
                  {item.label}
                </label>
                <input
                  type="text"
                  className="w-full bg-[#210e33] text-white rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500 border-2"
                  placeholder={item.type}
                />
              </div>
            ))}

            <div className="w-full">
              <label htmlFor="message" className="block text-white mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full h-24 bg-[#210e33] text-white rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500 border-2"
                placeholder="Enter your Message"
              ></textarea>
            </div>

            <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-600 transition w-full text-center">
              Register Now
            </button>
          </div>
        </div>

        {/* Second Container */}
        <div className="flex flex-col gap-6">
          {/* Contact Information */}
          <div className="bg-[#34005c] p-6 rounded-lg">
            <h1 className="text-yellow-500 text-2xl font-bold mb-4">
              Contact Information
            </h1>
            {Contact.map((info) => (
              <div className="flex items-start gap-4 mb-3" key={info.heading}>
                <i className={`${info.icon} text-yellow-500 text-lg`}></i>
                <div>
                  <h2 className="text-white font-semibold">{info.heading}</h2>
                  <p className="text-white">{info.para}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visit Us */}
          <div className="bg-[#34005c] p-6 rounded-lg flex flex-col gap-4">
            <h1 className="text-yellow-500 text-2xl font-bold">Visit us</h1>
            {Visit.map((visit) => (
              <div key={visit.address}>
                <p className="text-white">{visit.college}</p>
                <p className="text-white">{visit.address}</p>
              </div>
            ))}
            <div className="w-full h-40 overflow-hidden rounded-lg">
              <img
                src="https://static.vecteezy.com/system/resources/previews/004/639/638/non_2x/portrait-photo-icon-isolated-on-white-background-design-vector.jpg"
                className="w-full h-full object-cover"
                alt="Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
