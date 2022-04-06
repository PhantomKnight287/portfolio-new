import { Body } from "./Body";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Socials } from "./Socials";

export function Containered() {
  return (
    <>
      <Navbar />
      <main>
        <Body />
        <Skills />
        <Projects />
        <Socials />
      </main>
    </>
  );
}
