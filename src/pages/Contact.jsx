import React, { useState } from "react";

function Contact() {
  const [Data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="flex bg-secondary justify-between px-[10%] items-center py-8 mb-16 flex-wrap gap-4"
      id="contact"
    >
      <div
        className="md:w-2/5 rounded-md w-full"
        data-aos="fade-down"
        ata-aos-duration="3000"
      >
        <img
          src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg"
          alt=""
          className="rounded-md "
        />
      </div>

      <form
        className="md:w-2/5 w-full"
        data-aos="fade-up"
        ata-aos-duration="3000"
      >
        <div className="my-3">
          <label htmlFor="email" className="block mt-2 mb-1 text-white text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-1 outline-none rounded-md "
            value={Data.email}
            onChange={handleChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="name" className="block mt-2 mb-1 text-white text-sm">
            Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="w-full px-4 py-1 outline-none rounded-md "
            value={Data.name}
            onChange={handleChange}
          />
        </div>
        <div className="my-3">
          <label
            htmlFor="subject"
            className="block mt-2 mb-1 text-white text-sm"
          >
            Subject
          </label>
          <input
            type="subject"
            name="subject"
            id="subject"
            className="w-full px-4 py-1 outline-none rounded-md "
            value={Data.subject}
            onChange={handleChange}
          />
        </div>
        <div className="my-3">
          <label
            htmlFor="message"
            className="block mt-2 mb-1 text-white text-sm"
          >
            Message
          </label>
          <textarea
            type="message"
            name="message"
            rows={5}
            id="message"
            className="w-full px-4 py-1 outline-none rounded-md "
          />
        </div>

        <button
          type="submit"
          className="px-6 bg-white py-1 rounded-full text-primary font-semibold w-1/5 text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
