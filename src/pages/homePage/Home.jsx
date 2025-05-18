import styles from "./Home.module.css";
import githubImg from "../../assets/github-brands-solid.svg";
import linkedInImg from "../../assets/linkedin-brands-solid.svg";
import instagramImg from "../../assets/instagram-brands-solid.svg";

export const Home = () => {
    return <section id="home" className={styles.Hero}>
        <div className= {styles.textdiv}>
            <div className={styles.text1}><p>Namaste</p></div>
            <div className={styles.text2}><p>You have just landed on my Portfolio</p></div>
            <div className={styles.text3}><h1>Hi! I'm Yashas mr</h1></div>
            <div className={styles.text4}><p>Student</p></div>
            <div className={styles.socialIcons}>
            <img src={githubImg} alt="Github" />
            <img src={linkedInImg} alt="Linkedin" />
            <img src={instagramImg} alt="Instagram" />
            </div>
            <div className={styles.buttonBox}>
               <button className={styles.button}>
                    <a href="#contact">Let's connect  <i class="fa-solid fa-caret-right"></i></a>
                </button>
                <button>
                    <a href="#project">See projects  <i class="fa-solid fa-caret-right"></i></a>
                </button>
            </div>
        </div>
        <div className={styles.imgdiv}>
            <img alt="" className={styles.heroImg} />
        </div>
    </section>
};