import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mpzgpjzn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section
      className="py-16 px-8 bg-white text-center flex flex-col justify-center items-center"
      data-aos="fade-up"
      id="contactus"
    >
      <h2 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
        Contact Us
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  text-[#4c4e4e] w-1/3 text-left"
      >
        <label htmlFor="name" className="text-sm">Name : </label>
        <input
          id="name"
          type="text"
          name="name"
          className="border-2 border-[#f4f4f4] rounded p-1 my-1"
        />
        <ValidationError prefix="name" field="name" errors={state.errors} />
        <label htmlFor="email" className="text-sm">Email Address : </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border-2 border-[#f4f4f4] rounded p-1 my-1"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message" className="text-sm">Message : </label>
        <textarea
          id="message"
          name="message"
          className="border-2 border-[#f4f4f4] rounded p-1 my-1"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="border-2 bg-[#116b89] p-2 px-5 my-4 rounded-md font-medium font-dmsans text-sm text-[#fff]"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
