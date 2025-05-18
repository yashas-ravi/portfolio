import styles from './About.module.css';

export const About = () => {
    return(
        <section id='about' className={styles.About}>
            <div className={styles.aboutBox}>
                <p>
                Hi, I'm Yashas M.R<br></br><br></br>I'm currently pursuing a degree in Information Science and Engineering at SJC Institute of Technology, Chikkaballapur – 562101, Karnataka.<br></br><br></br>I've been passionate about computers and technology from a very young age. I spend most of my time working on exciting tech projects, constantly learning and experimenting with new tools and concepts.<br></br><br></br>You can explore some of my projects on the next page.<br></br><br></br>Feel free to reach out to me for any queries or collaborations!
                </p>
                <p>
                <b>Interests:</b><br></br><br></br>full stack web and app development <br></br><br></br>web3 <br></br><br></br>Ai and ml
                </p>
            </div>
        </section>
    );
}