import { useState } from "react";
import { FiMapPin, FiHome, FiSearch } from "react-icons/fi";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  return (
    <section className="relative w-full  flex flex-col md:flex-row items-start justify-between gap-10">
      <div className="max-w-4xl z-10 py-16 sm:ps-24 px-6 text-center sm:text-start md:py-18">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black">
          Let’s Find The Most <span className="text-blue-500">Suitable Home</span> For You !
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-8">
          We offer the best resident for you with a strategic location and the best home developer.
          Find your home right now !
        </p>

        <div className="flex gap-8 mb-10">
          <div className="text-center flex gap-2 sm:flex-row flex-col items-center">
            <p className="text-2xl font-bold text-black">29</p>
            <p className="text-sm text-gray-500 sm:w-1/2 ">Success Partners</p>
          </div>
          <div className="text-center flex gap-2 sm:flex-row flex-col items-center">
            <p className="text-2xl font-bold text-black">92+</p>
            <p className="text-sm text-gray-500 sm:w-1/2">Strategic Location</p>
          </div>
          <div className="text-center flex gap-2 sm:flex-row flex-col items-center">
            <p className="text-2xl font-bold text-black">120K</p>
            <p className="text-sm text-gray-500 sm:w-1/2">Satisfying Customer</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-xl shadow-md px-4 py-3 gap-4 w-full max-w-2xl">
          <div className="flex items-center w-full border-r pr-4">
            <FiMapPin className="text-blue-500 text-xl mr-2" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Type your location"
              className="w-full text-sm placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex items-center w-full border-r pr-4">
            <FiHome className="text-blue-500 text-xl mr-2" />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full text-sm text-gray-600 focus:outline-none bg-transparent"
            >
              <option value="">Select your type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
            </select>
          </div>
          <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2.5 rounded-lg">
            <FiSearch className="text-xl" />
            Search
          </button>
        </div>
      </div>

      <div className="relative hidden md:block w-full md:w-1/2 overflow-hidden">
        <img
          src="/images/map-placeholder.png"
          alt="Map"
          className="w-full h-auto rounded-lg object-cover transition-transform duration-500"
        />
        
        <div className="absolute top-1/3 left-1/3 transform -translate-y-1/2">
          <div className="relative bg-white border border-indigo-100 shadow-md rounded-xl p-2 w-[285px]">
            <div className="flex gap-3">
              <img
                src="/images/component-map.png"
                alt="Palm Tree"
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex flex-col">
                <p className="text-xs text-gray-500">Pandeyan, Yogyakarta</p>
                <h4 className="font-semibold text-sm mb-1">Palm Tree Resident</h4>
                <div className="flex gap-1 text-xs text-gray-600 items-center mt-1">
                  <div className="flex items-center gap-1 text-indigo-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span className="text-gray-600">120 M²</span>
                  </div>
                  <div className="flex items-center gap-1 text-indigo-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 20v-6m0 0H6m6 0h6" />
                    </svg>
                    <span className="text-gray-600">2 Room</span>
                  </div>
                  <div className="flex items-center gap-1 text-indigo-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    <span className="text-gray-600">4 Room</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white shadow-sm"></div>
          </div>
        </div>


        <img src="/images/component-map-2.png" alt="place-holder" className="absolute top-0 -translate-y-10 left-10 w-24"/>
        <img src="/images/component-map-2.png" alt="place-holder" className="absolute top-0 -translate-y-2 right-10 w-20"/>
        <img src="/images/component-map-2.png" alt="place-holder" className="absolute bottom-55 right-20 w-20"/>
        <img src="/images/component-map-2.png" alt="place-holder" className="absolute bottom-30 left-40 w-20"/>

      </div>
    </section>
  );
};

export default HeroSection;
