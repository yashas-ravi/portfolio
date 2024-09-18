import styles from './Project.module.css';

export const Project = () => {
    return(
            <section className={styles.project}>
                <div className={styles.colorBox5}></div>
                <div className={styles.colorBox6}></div>
                <div className={styles.projectBox}> 
                    <h2 className={styles.projText}>My projects</h2>
                </div>
            </section>
    )
}