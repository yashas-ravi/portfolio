import { createSignal, onMount, onCleanup } from "solid-js";
import logo from "../assets/logo.png";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const [sectionName, setSectionName] = createSignal("portfolio");

  const handleSectionName = () => {
    const position = window.scrollY;
    if (position <= 500) setSectionName("portfolio");
    else if (position <= 1100) setSectionName("About");
    else if (position <= 1800) setSectionName("Skills");
    else if (position <= 2600) setSectionName("Projects");
    else setSectionName("Contact");
  };

  onMount(() => {
    handleSectionName();
    window.addEventListener("scroll", handleSectionName, { passive: true });
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleSectionName);
  });

  return (
    <nav class={styles.nav}>
      <div class={styles.navContainer}>
        <img src={logo} alt="logo" />
        <div class={styles.sectionName}>
          <p>{sectionName()}</p>
        </div>
      </div>
    </nav>
  );
};
