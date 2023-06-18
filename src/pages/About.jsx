import React from "react";

function About() {
  return (
    <div
      className="flex  md:flex-row  my-10  px-[10%] justify-center items-center mx-auto flex-wrap-reverse"
      id="about"
    >
      <div
        className="md:w-1/2  w-full"
        data-aos="fade-right"
        ata-aos-duration="3000"
      >
        <p className="md:text-4xl text-2xl text-center md:text-left my-5 font-bold text-primary bg-clip-text">
          About the Company
        </p>
        <p className="text-sm   font-semibold">
          Welcome to AppCrafters, your premier destination for professional and
          innovative app development services. We specialize in creating
          high-quality, user-centric mobile applications that empower businesses
          and individuals to thrive in the digital era. At AppCrafters, we
          understand that a well-designed and functional app can be a
          game-changer, providing a seamless user experience and driving
          business growth. Our team of experienced app developers, UI/UX
          designers, and quality assurance specialists work in harmony to craft
          bespoke solutions that align with your unique goals and requirements.
          Welcome to AppCrafters, your premier destination for professional and
          innovative app development services. We specialize in creating
          high-quality, user-centric mobile applications that empower businesses
          and individuals to thrive in the digital era. At AppCrafters, we
          understand that a well-designed and functional app can be a
          game-changer, providing a seamless user experience and driving
          business growth.
        </p>

        <div className="flex flex-row md:justify-start justify-center items-center">
          <button className="bg-primary px-4 py-2 rounded-md flex space-x-4  items-center my-5">
            <p className="text-sm text-white">View More</p>
          </button>
        </div>
      </div>
      <div
        className="md:w-1/2 w-full"
        data-aos="fade-left"
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

export default About;
