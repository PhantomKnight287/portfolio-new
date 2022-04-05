import "./App.css";
import { Containered } from "./Components";
import { Partytown } from "@builder.io/partytown/react";
function App() {
  return (
    <>
      <Containered />
      <Partytown debug={true} forward={["dataLayer.push"]} />
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

export default App;
