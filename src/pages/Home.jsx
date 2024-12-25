import React from "react";
import { ReactTyped } from "react-typed";

import pic from "../../public/emp.png";

function Home() {
  return (
    <div
      name="Home"
      className="h-screen text-white p-10 mt-5 "
      style={{
        background:
          "radial-gradient(at center right, #95b9d7 -50%, #333333 72%)",
      }}
    >
      <div className="flex items-center">
        <div
          className="w-1/2 font-poppins"
          style={{
            background: "linear-gradient(90deg, #2875ff 0%, #46FEC0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Empower Your &nbsp;
            <ReactTyped
              className="text-4xl font-bold "
              strings={[" Business", " Ideas"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </h1>
          <h2 className="text-4xl font-bold mb-6">
            With Tailored Tech Solutation
          </h2>
          <h3 className="text-4xl font-bold mb-6">and Innovative Design</h3>
        </div>
        <div className="w-1/2">
          <img
            src={pic}
            alt="Woman giving thumbs up"
            className="ro  mx-auto my-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
