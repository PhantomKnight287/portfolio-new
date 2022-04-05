import styles from "./Dock.module.css";

const routes = [
  {
    icon: "/bitmoji.png",
    name: "WhoAmI",
    href: "#whoami",
  },
  {
    icon: "/settings.png",
    name: "Skills",
    href: "#skills",
  },
  {
    icon: "/suitcase.png",
    name: "Projects",
    href: "#projects",
  },
  {
    icon: "/social.png",
    name: "Socials",
    href: "#socials",
  },
];

export function Dock() {
  return (
    <div className={styles["container"]}>
      <div className={styles.dockContainer}>
        <div className={styles["dockElementsContainer"]}>
          {routes.map((route, index) => {
            return (
              <a href={route.href} key={index}>
                <div className={styles["dockElement"]} >
                  <div className={styles["icon"]}>
                    <img src={route.icon} alt="BitMoji" />
                  </div>
                  <a href={route.href}>{route.name}</a>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
