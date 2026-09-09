import styles from "./Project.module.css";
import { buildbox, portfolio, chatBot } from "../../components/ProjectsList";

const ProjectCard = (props) => (
  <div class={styles.swiperContainer}>
    <img src={props.project.img} alt={props.project.title} />
    <h1>{props.project.title}</h1>
    <p>{props.project.discription}</p>
    <div class={styles.projectLinks}>
    {props.project.website && <a href={props.project.website} target="_blank" rel="noreferrer">Visit website</a>}
    {props.project.website && <strong class={styles.projectLinkSep}>|</strong>}
    <a href={props.project.link} target="_blank" rel="noreferrer">See how</a></div>
  </div>
);

export const Project = () => (
  <section id="project" class={styles.project}>
    <div class={styles.projectWrapper}>
      <p>
        These are my projects
        <br />
        <span style={{ "font-size": "0.8em", "margin-top": "10px", opacity: "80%" }}>
          Some are still under development. Check back later for more!
        </span>
      </p>
      <Suspense fallback="Loading...">
        <div class={styles.projectContainer}>
        <ProjectCard project={chatBot} />
        <ProjectCard project={buildbox} />
        <ProjectCard project={portfolio} />
        </div>
      </Suspense>
    </div>
  </section>
);
