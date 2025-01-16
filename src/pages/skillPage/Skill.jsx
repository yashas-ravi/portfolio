import styles from './Skill.module.css';

export const Skill = () => {
    return(
        <section id='skill' className={styles.Skill}>
            <div className={styles.colorBox3}></div>
            <div className={styles.colorBox4}></div>
            <div className={styles.skillBox}>
                <h2 className={styles.skillText}>Skills I have</h2>
                <div className={styles.langBox}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-c-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175191.png?f=webp&w=512" alt="c" />
                    <strong>C</strong>
                    <p>Intermediate</p>
                </div>
                <div className={styles.langBox}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-c-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226082.png?f=webp&w=512" alt="c++" />
                    <strong>C++</strong>
                    <p>Begineer</p>
                </div>
                <div className={styles.langBox}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-python-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226051.png?f=webp&w=512" alt="python" />
                    <strong>Python</strong>
                    <p>Intermediate</p>
                </div>
                <div className={styles.langBox}>
                    <div className={styles.hcrow}><img src="https://cdn.iconscout.com/icon/free/png-512/free-html-logo-icon-download-in-svg-png-gif-file-formats--brand-company-business-brands-pack-logos-icons-2284975.png?f=webp&w=512" alt="html" />
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-css-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722685.png?f=webp&w=512" alt="css" /></div>
                    <strong>Html&Css</strong>
                    <p>Intermediate</p>
                </div>
                <div className={styles.langBox}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-company-business-brands-pack-logos-icons-2284965.png?f=webp&w=512" alt="javascript" />
                    <strong>JavaScript</strong>
                    <p>Intermediate</p>
                </div>
                <div className={styles.langBox}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175109.png?f=webp&w=512" alt="react" />
                    <strong>React</strong>
                    <p>Intermediate</p>
                </div>
                <div className={styles.langBox}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175139.png?f=webp&w=512" alt="mongoDB" />
                    <strong>MongoDB</strong>
                    <p>Begineer</p>
                </div>
                <div className={styles.langBox}>
                   <img src="https://cdn.iconscout.com/icon/free/png-512/free-nodejs-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226034.png?f=webp&w=512" alt="nodejs" />
                   <strong>NodeJS</strong>
                   <p>Begineer</p>
                </div>
            </div>
        </section>
    )
}