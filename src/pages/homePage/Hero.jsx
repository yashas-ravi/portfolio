import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.png";

export const Hero = () => {
    return <section className={styles.Hero}>
        <div className= {styles.textdiv}>
            <div className={styles.textbox}><h2 className={styles.text1}>Namaste</h2></div>
            <div className={styles.textbox}><h2 className={styles.text2}>Welcome to my Portfolio</h2></div>
            <div className={styles.textbox}><h1 className={styles.text3}>Hi! I'm Yashas mr</h1></div>
            <div className={styles.changetext}><span></span></div>
            <div className={styles.textbox}><p className={styles.p1}>A passionate computer science student <br />based in Karnataka, India.</p></div>
            <div className={styles.buttonBox}>
               <button className={styles.button}>
                    <a href="#contact">Let's connect</a>
                </button>
                <button>
                    <a href="#project">See projects</a>
                </button>
            </div>
        </div>
        <div className={styles.imgdiv}>
            <img src={heroImg} alt="Hero" className={styles.heroImg} />
        </div>
    </section>
};