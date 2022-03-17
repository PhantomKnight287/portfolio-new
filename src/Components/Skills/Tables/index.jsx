import styles from "./languages.module.css";

const Language = [
  {
    name: "JavaScript",
    iconHref: "/languages/javascript.png",
  },
  {
    name: "TypeScript",
    iconHref: "/languages/typescript.svg",
  },
  {
    name: "Python",
    iconHref: "/languages/python.png",
  },
];

export function Languages() {
  return (
    <>
      <div className={styles["languagesContainer"]}>
        <div className={styles["experienceContainer"]}>
          <h2>Languages</h2>
        </div>
        {Language.map((language, index) => {
          return (
            <div className={styles["languageContainer"]} key={index}>
              <img src={language.iconHref} alt={language.name} />
              <h3>{language.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

const Tech = [
  {
    name: "React",
    iconHref: "/tech/React.png",
  },
  {
    name: "Next.js",
    iconHref: "/tech/next.png",
  },
  {
    name: "TailwindCSS",
    iconHref: "/tech/tailwind.png",
  },
  {
    name: "Styled Components",
    iconHref: "/tech/styled-components.png",
  },
  {
    name: "React Native",
    iconHref: "/tech/React.png",
  },
];

export function Technologies() {
  return (
    <>
      <div className={styles["languagesContainer"]}>
        <div className={styles["experienceContainer"]}>
          <h2>Technologies</h2>
        </div>
        {Tech.map((tech, index) => {
          return (
            <div className={styles["languageContainer"]} key={index}>
              <img src={tech.iconHref} alt={tech.name} />
              <h3>{tech.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

const otherThings = [
  {
    name: "Git",
    iconHref: "/tech/git.png",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Docker",
  },
  {
    name: "AWS",
  },
  {
    name: "Firebase",
  },
];

export function OtherThings() {
  return (
    <div className={styles["languagesContainer"]}>
      <div className={styles["experienceContainer"]}>
        <h2>Other</h2>
      </div>
      {otherThings.map((other, index) => {
        return (
          <div className={styles["languageContainer"]} key={index}>
            {other.iconHref ? (
              <img src={other.iconHref} alt={other.name} />
            ) : null}
            <h3>{other.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
