import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me",
};

function Contact() {
  return <ContactForm />;
}

export default Contact;
