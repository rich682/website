import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Vergo",
  description: "Vergo is the operating system for accounting teams. Learn about our mission, our values, and why we are building the future of accounting workflows.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
