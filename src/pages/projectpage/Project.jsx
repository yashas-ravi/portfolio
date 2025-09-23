import styles from './Project.module.css';
import {buildbox,portfolio,chatBot} from "../../components/ProjectsList";

export const Project = () => {
    return(
            <section id="project" className={styles.project}>
                <div className={styles.projectWrapper}>
                <p>These are my projects <br /><p style={{fontSize:"0.8em",marginTop:"10px",opacity:"80%"}}>Some are still under development. Check back later for more!</p></p>
                <div className={styles.projectContainer}>
                        <div className={styles.swiperContainer}>
                        <img src={chatBot.img} alt="chatBot" />
                        <h1>{chatBot.title}</h1>
                        <p>{chatBot.discription}</p>
                        <a href="https://yashas-chat-bot.netlify.app">Visit website</a>
                        <a href={chatBot.link}>See how</a>
                        </div>    
                        <div className={styles.swiperContainer}>
                        <img src={buildbox.img} alt="buildbox" />
                        <h1>{buildbox.title}</h1>
                        <p>{buildbox.discription}</p>
                        <a href={buildbox.link}>See how</a>
                        </div>                   
                        <div className={styles.swiperContainer}>
                        <img src={portfolio.img} alt="portfolio" />
                        <h1>{portfolio.title}</h1>
                        <p>{portfolio.discription}</p>
                        <a href={portfolio.link}>See how</a>
                        </div>      
                </div>
                </div>
            </section>
    )
}