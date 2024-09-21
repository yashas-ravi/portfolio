import styles from './Skill.module.css';

export const Skill = () => {
    return(
        <section className={styles.Skill}>
            <div className={styles.colorBox3}></div>
            <div className={styles.colorBox4}></div>
            <div className={styles.skillBox}>
                <h2 className={styles.skillText}>Skills I have</h2>
                <div className={styles.langBox}>
                    <p>C</p>
                    <p>Intermediate</p>
                </div>
                <div className={styles.langBox}>
                    <p>C++</p>
                    <p>Begineer</p>
                </div>
                <div className={styles.langBox}>
                    <p>Python</p>
                    <p>Begineer</p>
                </div>
                <div className={styles.langBox}>
                    <p>Html & css</p>
                    <p>Intermediate</p>
                </div>
                <div className={styles.langBox}>
                    <p>JavaScript</p>
                    <p>Begineer</p>
                </div>
                <div className={styles.langBox}>
                    <p>React</p>
                    <p>Begineer</p>
                </div>
            </div>
        </section>
    )
}