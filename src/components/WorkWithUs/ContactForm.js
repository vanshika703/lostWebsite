import React from "react";

const ContactForm = () => {
  return (
    <section className="py-16 px-8 bg-white text-center" data-aos="fade-up" id="contactus">
      <h2 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
        Contact Us
      </h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <button className="border-2 border-[#116b89] p-2 px-5 my-4 rounded-md font-medium font-dmsans text-sm text-[#116b89]">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
