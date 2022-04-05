import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${styles["navbarContainer"]} ${
          isScrolled ? styles["scrolled"] : ""
        }`}
      >
        <div className={styles["nameContainer"]}>
          <h1 className="name">Gurpal Singh</h1>
        </div>
      </div>
    </>
  );
}
