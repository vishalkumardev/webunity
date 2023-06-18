import React from "react";

function Home() {
  return (
    <div
      className="flex  md:flex-row 0 min-h-screen bg-secondary px-[10%] justify-center items-center mx-auto flex-wrap-reverse"
      id="home"
    >
      <div
        className="md:w-1/2  w-full"
        data-aos="fade-down"
        ata-aos-duration="3000"
      >
        <p className="md:text-4xl text-2xl text-center md:text-left my-5 font-bold text-white bg-clip-text ">
          The thing we need is skills
        </p>
        <p className="text-sm  font-medium text-white">
          At TechGenius Solutions, we understand that in today's fast-paced and
          digital world, having a strong online presence is crucial for
          businesses to thrive. Whether you need a dynamic mobile application to
          engage with your customers or a responsive website that showcases your
          brand, we have the expertise to bring your vision to life.
        </p>

        <div className="flex flex-row md:justify-start justify-center items-center">
          <button className="bg-primary px-4 py-2 rounded-md flex space-x-4  items-center my-5">
            <p className="text-sm text-white">View More</p>
          </button>
        </div>
      </div>
      <div
        className="md:w-1/2 w-full"
        data-aos="fade-up"
        ata-aos-duration="3000"
      >
        <img
          src="/laptop (2).png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Home;
