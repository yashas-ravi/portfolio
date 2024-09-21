import styles from './Project.module.css';
import itemImg from '../../assets/logo.png';
import arrowLeft from '../../assets/arrow-left-solid.svg';
import arrowRight from '../../assets/arrow-right-solid.svg';

export const Project = () => {
    return(
            <section className={styles.project}>
                <div className={styles.colorBox5}></div>
                <div className={styles.colorBox6}></div>
                <div className={styles.projectBox}> 
                    <h2 className={styles.projText}>My projects</h2>
                    <img src={arrowLeft} alt="img" className={styles.arrowLeft} />
                    <img src={arrowRight} alt="img" className={styles.arrowRight} />
                    <div className={styles.cardSlider}>
                        <div className={styles.cardItem}>
                            <img src={itemImg} alt="Img" />
                            <h3>Flutter App</h3>
                            <p>I created a flutter app that communicates with the server. It send request to my server through API which i have one in my home and my server response with the requested query. <a href="">See how</a></p>
                        </div>
                        <div className={styles.cardItem}>
                            <img src={itemImg} alt="Img" />
                            <h3>Flutter App</h3>
                            <p>I created a flutter app that communicates with the server. It send request to my server through API which i have one in my home and my server response with the requested query. <a href="">See how</a></p>
                        </div>
                        <div className={styles.cardItem}>
                            <img src={itemImg} alt="Img" />
                            <h3>Flutter App</h3>
                            <p>I created a flutter app that communicates with the server. It send request to my server through API which i have one in my home and my server response with the requested query. <a href="">See how</a></p>
                        </div>
                    </div>
                    <div className={styles.viewArea}></div>
                </div>
            </section>
    )
}