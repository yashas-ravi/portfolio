import styles from './Project.module.css';
import {buildbox,portfolio} from "../../components/ProjectsList";

export const Project = () => {
    return(
            <section id="project" className={styles.project}>
                <div className={styles.projectWrapper}>
                <p>At the moment, I've completed only a few projects - Some are still under construction. Check back later for more!</p>
                <div className={styles.projectContainer}>
                        <div className={styles.swiperContainer}>
                        <img src={buildbox.img} alt="buildbox" />
                        <h1>{buildbox.title}</h1>
                        <p>{buildbox.discription}</p>
                        <a href={buildbox.link}>See how</a>
                        </div>                   
                        <div className={styles.swiperContainer}>
                        <img src={portfolio.img} alt="buildbox" />
                        <h1>{portfolio.title}</h1>
                        <p>{portfolio.discription}</p>
                        <a href={portfolio.link}>See how</a>
                        </div>                   
                </div>
                </div>
            </section>
    )
}