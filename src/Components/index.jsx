import { Body } from "./Body";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export function Containered() {
  return (
    <>
      <Navbar />
      <Body />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
