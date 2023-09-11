"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { container } from "@/constants/motion";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api", {
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const isValid = () => {
    if (!emailRegex.test(email)) {
      return false;
    }
    if (name === "" || subject === "" || message === "") {
      return false;
    }
    return true;
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="prose mx-auto h-full flex flex-col justify-center items-center"
      >
        <h1 className="w-full uppercase text-primary">
          let&apos;s get in touch
        </h1>
        <div className="mt-8 z-1 w-full bg-base-200 p-4 text-base-content/80 mx-auto flex flex-col items-center h-max">
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <label className="my-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input w-full"
              placeholder="Your name.."
            />

            <label className="my-1" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full"
              placeholder="Your email.."
            />

            <label className="my-1" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="input w-full"
              placeholder="Subject..."
            />

            <label className="my-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea w-full"
              placeholder="Write something.."
            />

            <div className="flex justify-between items-start mt-4">
              <div className="text-error not-prose">
                {!isValid() && <span>Form is not valid!</span>}
              </div>
              <button
                type="submit"
                className={`${
                  isValid() ? "btn-primary" : "btn-disabled"
                } btn btn-primary btn-block btn-md md:btn-wide uppercase rounded-none`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
}

export default ContactForm;
