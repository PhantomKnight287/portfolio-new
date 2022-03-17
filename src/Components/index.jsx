import { Body } from "./Body";
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
    </>
  );
}
