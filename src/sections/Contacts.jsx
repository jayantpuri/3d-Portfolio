import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// service_zeg6yka

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await emailjs.send(
        "service_zeg6yka",
        "template_kptqee6",
        {
          from_name: formState.name,
          to_name: "Jayant",
          from_email: formState.email,
          to_email: "jayantpuri16@gmail.com",
          message: formState.message,
        },
        "K0BfljYbGow75lUQB"
      );
      alert("message sent");
    } catch (error) {
      console.log("Error sending message: ", error);
      alert("something went wrong");
    } finally {
      setLoading(false);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const formChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <section id="contact" className="w-full min-h-screen my-20 c-space flex flex-col gap-24">
      <div className="text-3xl font-bold text-neutral-50">Contact Me</div>
      <div className="w-full min-h-screen relative flex flex-col justify-center items-center">
        <img
          src={"./assets/terminal.png"}
          alt="terminal"
          className="absolute inset-0 min-h-screen w-full lg:mb-40 sm:w-[85%] xl:w-[80%] mx-auto"
        />
        <div className="contact-container">
          <p className="head-text">Let&apos;s Talk</p>
          <p className="text-xl text-white-600">
            Wether you are looking to build a new project, or improve an
            existing project, I&apos;m here to help.
          </p>

          <form
            className="flex flex-col w-full gap-4 mt-12 space-y-7"
            onSubmit={submitForm}
          >
            <label className="text-lg text-white-600">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              value={formState.name}
              onChange={formChange}
              className="field-input"
            />
            <label className="text-lg text-white-600">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="johnDoe@gmail.com"
              value={formState.email}
              onChange={formChange}
              className="field-input"
            />
            <label className="text-lg text-white-600">Your Message</label>
            <textarea
              required
              name="message"
              placeholder="Hi, I wanna give you a job...."
              value={formState.message}
              onChange={formChange}
              rows={5}
              className="field-input"
            />
            <button disabled={loading} className="field-btn">
              {!loading ? <span>Send Message</span> : <span>Message Sent</span>}
              <img
                src={"./assets/arrow-up.png"}
                alt="arrow"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
