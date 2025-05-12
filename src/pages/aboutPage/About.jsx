import styles from './About.module.css';
import aiImg from '../../assets/ai-about.png';

export const About = () => {
    return(
        <section id='about' className={styles.About}>
            <div className={styles.aiImageBox}><img src={aiImg} alt="ai-image" className={styles.aiImage}/></div>
            <div className={styles.aboutBox}>
                <h1 className={styles.a1}>About me</h1>
                <p>
                    Hi, I'm <b>Yashas mr</b> studying computer science engineering at SJC institute of technology, chikkaballapur, Karnataka.<br/> I'm very passionate about computer and technology since from very young age.<br/> I spend most of the time by working on projects. You can find my projects in next page. <br />feel free to contact me for any queries.<br /><br /> <b>Interests:</b> <br/>full stack web and app development <br />web3 <br />Ai and ml
                </p>
            </div>
            <div className={styles.colorBox1}></div>
            <div className={styles.colorBox2}></div>
            <div className={styles.helloText}>Hello World Hello World Hello World Hello World hello world</div>
        </section>
    );
}