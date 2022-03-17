import styles from "./body.module.css";

export function Body() {
  return (
    <>
      <div className={styles["introContainer"]}>
        <div className={styles["contentContainer"]}>
          <span>Hi There! 👋</span>

          <p>
            I am Gurpal Singh aka PhantomKnight287. I am from India and I am a
            full stack Web Developer.
          </p>
        </div>
        <div className={styles["imageContainer"]}>
          <img src="/myself.jpg" alt="Gurpal Singh" />
        </div>
      </div>
    </>
  );
}
