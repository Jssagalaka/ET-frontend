import React from "react";
import Skill from "./Skill";

const ServicesSection = () => {
  const services = [
    {
      icon: "🌐",
      title: "Custom Software Development",
      description:
        "We offer bespoke software development services to address your unique business requirements. Our highly skilled developer team utilizes the latest technologies to create robust, scalable solutions tailored to your specifications.",
      link: "#",
    },
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "We offer bespoke software development services to address your unique business requirements. Our highly skilled developer team utilizes the latest technologies to create robust, scalable solutions tailored to your specifications.",
      link: "#",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Stay ahead in the mobile-first era with our exceptional mobile app development services. Whether it's iOS, Android, or cross-platform solutions, we develop intuitive and feature-rich apps that elevate your brand and enhance customer experiences.",
      link: "#",
    },
    {
      icon: "🔍",
      title: "Graphics Design",
      description:
        "Elevate your brand identity with our creative graphics design services. From logos and branding materials to marketing collateral and user interfaces, our talented design team brings your vision to life with stunning visuals that leave a lasting impression.",
      link: "#",
    },
  ];

  return (
    <div name="Services" className="py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-white text-lg">
          We provide the best services to help your business grow and succeed.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start transition-transform duration-500 hover:translate-x-2 hover:bg-gray-400 hover:text-white "
            >
              <div className="text-green-500 text-4xl mb-4 hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-white transition-colors:white duration-500">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 hover:text-white transition-colors duration-500">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-blue-500 font-bold flex items-center hover:underline hover:text-white transition-colors duration-500"
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
      <Skill />
    </div>
  );
};

export default ServicesSection;
