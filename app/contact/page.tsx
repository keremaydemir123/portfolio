import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs written by Kerem Aydemir.",
};

function Contact() {
  return <ContactForm />;
}

export default Contact;
