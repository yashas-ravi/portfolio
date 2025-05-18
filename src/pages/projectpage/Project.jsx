import styles from './Project.module.css';
import projects from "../../components/ProjectsList";

export const Project = () => {
    return(
            <section id="project" className={styles.project}>
                <div className={styles.projectWrapper}>
                <p>At the moment, I've completed only a few projects - Some are still under construction. Check back later for more!</p>
                <div className={styles.projectContainer}>
                        <div className={styles.swiperContainer}>
                        <img src={projects.buildbox.img} alt="buildbox" />
                        <h1>{projects.buildbox.title}</h1>
                        <p>{projects.buildbox.discription}</p>
                        <a href={projects.buildbox.link}>See how</a>
                        </div>                   
                        <div className={styles.swiperContainer}>
                        <img src={projects.portfolio.img} alt="buildbox" />
                        <h1>{projects.portfolio.title}</h1>
                        <p>{projects.portfolio.discription}</p>
                        <a href={projects.portfolio.link}>See how</a>
                        </div>                   
                </div>
                </div>
            </section>
    )
}