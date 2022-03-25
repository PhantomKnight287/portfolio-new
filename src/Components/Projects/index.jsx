import styles from "./projects.module.css";

const AllProjects = [
  {
    name: "Portfolio",
    description: "My Portfolio",
    visitUrl: "https://gurpalsingh.me",
    githubUrl: "https://github.com/PhantomKnight287/portfolio-new",
  },
  {
    name: "React Cli",
    description: "A Cli To Create React Components and Hooks.",
    githubUrl: "https://github.com/PhantomKnight287/react-cli",
  },
  {
    name: "Tracker Website",
    description: `A site which I made when I was learning JavaScript which can tell
              the information about user's device.`,
    visitUrl: "https://tracker-website.vercel.app",
    githubUrl: "https://github.com/PhantomKnight287/Tracker-Website",
  },
  {
    name: "Chat App",
    description:
      "An App made using React Native and firebase. You can install this app in your android device and talk with someone in real time.",
    visitUrl:
      "https://drive.google.com/file/d/1OYia-6pMIxtyf9wdyKSs2wjRrPLcMuUM/view?usp=sharing",
    githubUrl: "https://github.com/PhantomKnight287/ReactNative",
  },
  {
    name: "PhantomKnight",
    description:
      "A Discord Bot made using Typescript and Discord.js. It has Automoderation Commands,Leveling,Image Manipulation,Music Commands. You can create Your Own playlist.",
    visitUrl: "https://top.gg/bot/838686966387965992",
    githubUrl: "https://github.com/PhantomKnight287/PhantomKnight",
  },
];
export function Projects() {
  return (
    <div className={styles["projectsContainer"]}>
      <h3>Projects</h3>
      <div className={styles["projects"]}>
        {AllProjects.map((project, index) => (
          <div className={`${styles["project"]}`} key={index}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <div className={styles["links"]}>
              {project.visitUrl && (
                <a
                  href={project.visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <OtherProjects />
    </div>
  );
}

const Otherprojects = [
  {
    name: "Hackarmour Landing",
    visitUrl: "https://ha-landing.pages.dev/",
    githubUrl: "https://github.com/Hackarmour/hackarmour-landing",
    description: "Landing page of the hackarmour community!",
  },
  {
    name: "Discord Assistant Js",
    githubUrl: "https://github.com/hackarmour/discord-assistant-js",
    description: "An open source discord bot for everyone!",
  },
  {
    name: "Discord Assistant Py",
    githubUrl: "https://github.com/hackarmour/discord-assistant-py",
    description:
      "An open source discord bot for everyone by the hack armour team! ",
  },
  {
    name: "Kek Blogs",
    githubUrl: "https://github.com/kekwlabs/kek-blogs",
    visitUrl: "https://kekblogs.pages.dev/",
    description:
      "Blogging platform for members of kekwlabs to publish content on computer science research and writups ",
  },
  {
    name: "Epic App Ideas",
    githubUrl: "https://github.com/kekwlabs/epic-app-ideas/",
    description: "Fetch a random app idea from reddit ",
  },

  {
    name: "Kek Blogs",
    githubUrl: "https://github.com/kekwlabs/kekwlabs.github.io",
    visitUrl: "https://kekwlabs.github.io/",
    description: "KekwLab's Landing Page",
  },
];

export function OtherProjects() {
  return (
    <div className={styles["projectsContainer"]}>
      <h3>Other Projects</h3>
      <div className={styles["projects"]}>
        {Otherprojects.map((project, index) => (
          <div className={styles["project"]} key={index}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <div className={styles["links"]}>
              {project.visitUrl && (
                <a
                  href={project.visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
