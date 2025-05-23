import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="text-[#838894] rounded-xl p-7 lg:p-14 flex gap-3 flex-col bg-white"
    style={{ boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)" }}>
      <h1 className="text-4xl leading-10 font-semibold text-black">
        Got a Idea? We&apos;ve got the skills. Let&apos;s team up
      </h1>
      <p className="">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
