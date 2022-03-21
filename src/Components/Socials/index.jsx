import styles from "./Socials.module.css";

export function Socials() {
  return (
    <>
      <div className={styles["socialsContainer"]}>
        <h2>Socials</h2>
        <div className={styles["socials"]}>
          <a
            href="https://github.com/PhantomKnight287"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="http://discord.com/users/510480545160101898"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </div>
      </div>
    </>
  );
}
