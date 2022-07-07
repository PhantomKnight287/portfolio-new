import { Body } from "./Body";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Dock } from "./Dock"
export function Containered() {
  return (
    <>
      <Navbar />
      <main>
        <div id="main">
          <Body />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </main>
      {
        import.meta.env.DEV &&
        <aside>
          <Dock />
        </aside>
      }
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-285TD5F9QW"
        type="text/partytown"
      ></script>
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
    
          gtag("config", "G-285TD5F9QW");
          `,
        }}
      ></script>
    </>
  );
}
