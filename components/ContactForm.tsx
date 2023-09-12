"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { container } from "@/constants/motion";
import PageHeading from "./PageHeading";
import ArrowRight from "./icons/ArrowRight";
import socialLinks from "@/constants/socialLinks";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid()) {
      setIsValidEmail(false);
      return;
    }
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

  const inputClasses = "input input-ghost input-bordered w-full";

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="prose flex flex-col justify-center"
      >
        <PageHeading>Let&apos;s Connect</PageHeading>
        <a
          href={`mailto:${socialLinks.gmail}`}
          className="mail-direct no-underline"
        >
          <span>Mail Directly</span> <ArrowRight />
        </a>
        <div className="z-1 w-full ring-1 ring-slate-300/20 rounded-md bg-slate-900/80 p-4 text-base-content/80   flex flex-col items-center h-max">
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <label
              className="mb-1 mt-2 font-semibold text-base-content/90"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClasses}
              placeholder="Your name.."
            />

            <label
              className="mb-1 mt-2 font-semibold text-base-content/90"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClasses}
              placeholder="Your email.."
            />

            <label
              className="mb-1 mt-2 font-semibold text-base-content/90"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClasses}
              placeholder="Subject..."
            />

            <label
              className="mb-1 mt-2 font-semibold text-base-content/90"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea textarea-ghost textarea-bordered w-full"
              placeholder="Write something.."
            />

            <div className="flex flex-col justify-between items-end mt-4">
              <div className="text-error not-prose">
                {!isValidEmail && <span>Form is not valid!</span>}
              </div>
              <button
                type="submit"
                disabled={!isValid()}
                className={`${
                  isValid() ? "btn-accent" : "btn-accent btn-outline"
                } btn btn-block btn-md md:btn-wide uppercase rounded-sm`}
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
