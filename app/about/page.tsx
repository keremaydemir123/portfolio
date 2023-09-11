import { Metadata } from "next";
import About from "@/components/About";
import BlogBox from "@/components/BlogBox";
import Certificates from "@/components/Certificates";
import Tecnologies from "@/components/Technologies";

export const metadata: Metadata = {
  title: "About",
  description: "About Kerem Aydemir.",
};

function AboutPage() {
  return (
    <>
      <About />
      <BlogBox />
      <Certificates />
      <Tecnologies />
    </>
  );
}

export default AboutPage;
