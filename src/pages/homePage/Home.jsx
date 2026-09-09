import styles from "./Home.module.css";
import githubImg from "../../assets/github-brands-solid.svg";
import linkedInImg from "../../assets/linkedin-brands-solid.svg";
import instagramImg from "../../assets/instagram-brands-solid.svg";
import homeImg from "../../assets/homeImg.png";

export const Home = () => (
  <section id="home" class={styles.Hero}>
    <div class={styles.textdiv}>
      <div class={styles.text1}><p>Namaste</p></div>
      <div class={styles.text2}><p>You have just landed on my Portfolio</p></div>
      <div class={styles.text3}><h1>Hi! I'm Yashas mr</h1></div>
      <div class={styles.text4}><p>Student</p></div>
      <div class={styles.socialIcons}>
        <a href="https://github.com/yashas-ravi" rel="noreferrer" target="_blank"><img src={githubImg} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/yashas-mr-7b95471b5" rel="noreferrer" target="_blank"><img src={linkedInImg} alt="Linkedin" /></a>
        <a href="https://www.instagram.com/yashas__ravi" rel="noreferrer" target="_blank"><img src={instagramImg} alt="Instagram" /></a>
      </div>
      <div class={styles.buttonBox}>
        <button class={styles.button}><a href="#contact">Let's connect <i class="fa-solid fa-angle-right" style="color: rgb(137, 35, 201);"></i></a></button>
        <button><a href="#project">See projects <i class="fa-solid fa-angle-right" style="color: rgb(137, 35, 201);"></i></a></button>
      </div>
    </div>
    <div class={styles.imageDiv}><img src={homeImg} alt="Image" /></div>
  </section>
);
