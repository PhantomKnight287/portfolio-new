import { Languages, OtherThings, Technologies } from "./Tables";
import styles from "./skills.module.css";

export function Skills() {
  return (
    <>
      <div className={styles["skillsContainer"]}>
        <h2>Experience</h2>
        <div className={styles["experienceContainer"]}>
          <div className={styles["showcaseContainer"]}>
            <Languages />
            <Technologies />
            <OtherThings />
          </div>
        </div>
      </div>
    </>
  );
}
