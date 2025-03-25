import { useState } from "react";

export default function Registration() {
  const [isGeneralRegistration, setIsGeneralRegistration] = useState(true);

  const Heading = [
    "Registration for TRYST 2025 to attend all open events and activities",
  ];

  const Data1 = [
    { label: "Full Name", placeHolder: "Enter your Full Name" },
    { label: "College Roll Number", placeHolder: "Enter your college roll number" },
    { label: "Course", placeHolder: "Enter your Course" },
    { label: "Email", placeHolder: "Enter your Email" },
    { label: "College/University", placeHolder: "Enter your College Name" },
    { label: "Year", placeHolder: "Select year" },
    { label: "Phone", placeHolder: "Enter your Number" },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col items-center pb-10 bg-[#130520] relative z-20 px-4 sm:px-6">
      <div className="absolute h-full w-full inset-0 bg-[url('/Event.jpg')] bg-cover bg-center opacity-25 -z-10 bg-fixed"></div>
      <h1 className="text-yellow-500 text-4xl text-center pt-16 sm:pt-24">Registration</h1>
      <hr className="w-[95px] border-t-4 border-yellow-500 mt-4 mx-auto pb-6" />

      {/* Form Heading */}
      {Heading.map((para, index) => (
        <p
          key={index}
          className="text-white text-center text-lg md:text-xl lg:text-2xl max-w-[90%] lg:max-w-[900px] pb-6"
        >
          {para}
        </p>
      ))}

      {/* Switch Buttons */}
      <div className="text-white text-xl w-full max-w-[700px] flex justify-between items-center px-5 bg-[#34005c] py-2 mb-5 rounded-lg">
        <button
          className={`border border-transparent px-4 py-2 rounded-lg transition ${isGeneralRegistration ? "bg-yellow-500" : "hover:bg-yellow-600"}`}
          onClick={() => setIsGeneralRegistration(true)}
        >
          General Registration
        </button>
        <button
          className={`border border-transparent px-4 py-2 rounded-lg transition ${!isGeneralRegistration ? "bg-yellow-500" : "hover:bg-yellow-600"}`}
          onClick={() => setIsGeneralRegistration(false)}
        >
          Event Registration
        </button>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-[700px] bg-[#34005c] rounded-lg p-5 sm:p-6">
        <h1 className="text-yellow-500 text-2xl mb-2">
          {isGeneralRegistration ? "General Registration" : "Event Registration"}
        </h1>
        <p className="text-white mb-4">
          {isGeneralRegistration
            ? "Registration for TRYST 2025 to attend all open events and activities"
            : "Register for specific competitions and events in TRYST 2025"}
        </p>
        <form action="" className="text-white pb-5 flex flex-col">
          <div className="w-full flex flex-wrap gap-4">
            {Data1.map((item) => (
              <div className="w-full sm:w-[48%]">
                <label htmlFor={item.label} className="block px-1 mb-1">
                  {item.label}
                </label>
                <input
                  type="text"
                  id={item.label}
                  className="w-full border-2 bg-[#210e33] rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
                  placeholder={item.placeHolder}
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-black text-center px-4 py-2 rounded-lg hover:bg-yellow-600 transition mt-5"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
}