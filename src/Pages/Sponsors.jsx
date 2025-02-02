import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


// Sponsor data
const sponsors = [
  {
    id: 1,
    name: "Platinum Sponsor",
    logo: "https://via.placeholder.com/300",
    description: "Empowering innovation through technology leadership.",
  },
  {
    id: 2,
    name: "Gold Sponsor",
    logo: "https://via.placeholder.com/300",
    description: "Driving success with cutting-edge solutions and expertise.",
  },
];

export default function Sponsors() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);
  useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms animation duration
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, [location.pathname]);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="py-12 px-6" style={{ backgroundColor: "#f3f4f6" }}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">
          Our Sponsors
        </h1>
        <p
          className="text-lg text-gray-700 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A big thank you to our sponsors for their generous support and
          dedication to excellence.
        </p>
        
        {/* Sponsors Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={`${index * 200}`}
            >
              <div className="p-6 text-center">
                {/* Sponsor Logo */}
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="mx-auto mb-4 max-w-full h-40 object-contain"
                />
                {/* Sponsor Name */}
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {sponsor.name}
                </h2>
                {/* Sponsor Description */}
                <p className="text-gray-600">{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
