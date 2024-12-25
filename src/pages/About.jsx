import React from "react";
import Tech from "../../public/tech.avif";
import Tech2 from "../../public/Tech2.avif";

function About() {
  return (
    <div
      name="About"
      style={{
        background:
          "radial-gradient(at center right, #95b9d7 -50%, #333333 72%)",
      }}
      className="py-10"
    >
      {/* About Us Section */}
      <div className="text-center space-y-4 px-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-white">
          About Us
        </h2>
        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
          We are dedicated to providing the best IT solutions for businesses and
          individuals. Our mission is to innovate and deliver exceptional
          services to help you succeed in the digital world.
        </p>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-12 mb-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white">Vision</h2>
          <p className="text-white leading-relaxed">
            At Elementals Technologies, our vision is to become a global leader
            in the IT industry, renowned for our unwavering commitment to
            excellence, innovation, and client satisfaction. We aspire to
            elevate businesses worldwide by providing cutting-edge IT solutions
            that empower growth, efficiency, and success.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Tech}
            alt="Tech Illustration"
            className="rounded-lg w-full max-w-md shadow-lg "
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 px-4 md:px-12">
        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white">Mission</h2>
          <p className="text-white leading-relaxed">
            Our mission at Elementals Technologies is to shatter records by
            acquiring a multitude of groundbreaking clients and projects in
            2024. With an unwavering focus on excellence and innovation, we aim
            to propel our company to new heights, paving the way towards global
            leadership in the IT industry. Through relentless dedication and
            unparalleled service, we are committed to exceeding expectations and
            delivering transformative solutions that inspire success.
          </p>
        </div>

        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Tech2}
            alt="Tech Illustration"
            className="rounded-lg w-full max-w-md shadow-lg h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
