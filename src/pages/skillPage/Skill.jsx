import styles from "./Skill.module.css";

export const Skill = () => (
  <section id="skill" class={styles.Skill}>
    <div class={styles.skillContainer}>
      <p class={styles.sp1}>These are the skills I’m confident in</p>
      <p>
        💻 Programming Languages: JavaScript, Typescript, Python.<br /><br />
        🌐 Web Dev: HTML, CSS, React, Node.js, Express.js.<br /><br />
        🧠 Concepts: OOP, REST, API Integration, CI/CD.<br /><br />
        ⚙️ Tools: Git, Docker, .<br /><br />
        📦 Databases: MongoDB, Firebase.
      </p>
    </div>
  </section>
);