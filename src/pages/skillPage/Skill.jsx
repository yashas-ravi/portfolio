import styles from './Skill.module.css';

export const Skill = () => {
    return(
        <section id='skill' className={styles.Skill}>
            <div className={styles.skillContainer}>
                <p className={styles.sp1}>
                These are the skills I’m confident in
                </p>
                <p>
                💻  Programming Languages:  JavaScript, C, Java, Python.<br></br><br></br>🌐  Web Dev:  HTML, CSS, React, Node.js, Express.js.<br></br><br></br>
🧠  Concepts:  OOP, REST, API Integration, CI/CD.<br></br><br></br>
⚙️  Tools:  Git, GitHub, VS Code, Postman.<br></br><br></br>
📦  Databases:  MongoDB, Firebase.
                </p>
            </div>
        </section>
    )
}