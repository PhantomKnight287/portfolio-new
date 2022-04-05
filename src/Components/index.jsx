import { Body } from "./Body";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Socials } from "./Socials";
import { Dock } from "./Dock";
export function Containered() {
  return (
    <>
      <Navbar />
      <main>
        <div id="whoami">
          <Body />
        </div>
        <div id="socials">
          <Socials />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </main>
      <aside>
        <Dock />
      </aside>
    </>
  );
}
