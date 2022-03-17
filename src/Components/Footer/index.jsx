import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles["footerContainer"]}>
      <div className={styles["linksContainer"]}>
        <a
          href="http://github.com/PhantomKnight287"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" />
        </a>
        <a
          href="http://discord.com/users/510480545160101898"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/discord.svg" />
        </a>
      </div>
    </footer>
  );
}
