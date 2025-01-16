import styles from './Project.module.css';
import logoImg from '../../assets/logo.png';
import arrowLeft from '../../assets/arrow-left-solid.svg';
import arrowRight from '../../assets/arrow-right-solid.svg';
import buildbox from '../../assets/buildbox.png';
import { useState } from 'react';

export const Project = () => {
    const [itemnum,setItemnum] = useState(0);

    const cardItems = [
    {
        img:buildbox,
        name:"Build Box",
        desc:"no code, drag and drop website builder that helps people to build webpages and download the source code for the further development and deployment.",
        link:"https://github.com/yashas-ravi/buildbox",
    },
    {
        img:logoImg,
        name:"This Portfolio",
        desc:"I have built this portfolio for myself using react, watch out how i built this",
        link:"https://github.com/yashas-ravi/portfolio",
    },
    ]
    const arrlen = cardItems.length;

    const handleleftclick = () => {
        setItemnum(itemnum-1);
    }

    const handlerightclick = () => {
        setItemnum(itemnum+1);
    }

    return(
            <section id="project" className={styles.project}>
                <div className={styles.colorBox5}></div>
                <div className={styles.colorBox6}></div>
                <div className={styles.projectBox}> 
                    <h2 className={styles.projText}>My projects</h2>
                    <img src={arrowLeft} alt="img" className={styles.arrowLeft} onClick={()=>handleleftclick()}/>
                    <img src={arrowRight} alt="img" className={styles.arrowRight} onClick={()=>handlerightclick()}/>
                    <div className={styles.cardSlider}> 
                      <div className={styles.cardHolder}>
                          <div className={styles.cardItem}>
                            <img src={cardItems[itemnum%arrlen].img} alt="Img" />
                            <h3>{cardItems[itemnum%arrlen].name}</h3>
                            <p>{cardItems[itemnum%arrlen].desc}</p>
                            <a href={`${cardItems[itemnum%arrlen].link}`}>See how</a>
                          </div>
                          {/* <div className={styles.cardItem}>
                             <img src={cardItems[(itemnum+1)%arrlen].img} alt="Img" />
                             <h3>{cardItems[(itemnum+1)%arrlen].name}</h3>
                             <p>{cardItems[(itemnum+1)%arrlen].desc}</p>
                             <a href={cardItems[(itemnum+1)%arrlen].link}>See how</a>
                             </div>
                            <div className={styles.cardItem}>
                             <img src={cardItems[(itemnum+2)%arrlen].img} alt="Img" />
                             <h3>{cardItems[(itemnum+2)%arrlen].name}</h3>
                             <p>{cardItems[(itemnum+2)%arrlen].desc}</p>
                             <a href={cardItems[(itemnum+2)%arrlen].link}>See how</a>
                             </div> */}
                      </div>
                    </div>
                    <div className={styles.viewArea}></div>
                </div>
            </section>
    )
}