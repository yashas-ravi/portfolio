import styles from './Contact.module.css';
import contactImg from '../../assets/contactImg.png';
import instagram from '../../assets/instagram-brands-solid.svg';
import github from '../../assets/github-brands-solid.svg';
import linkedIn from '../../assets/linkedin-brands-solid.svg';  

export const Contact = () => {

    const onSubmit = async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit",
             {
                method: "post",
                headers:{
                    "content-type":"application/json",
                    Accept:"application/json"
                },
                body:json
            }).then((res)=>res.json());
    }
    return(
       <section className={styles.contact}>
         <div className={styles.colorBox7}></div>
         <div className={styles.colorBox8}></div>
         <div className={styles.contactForm}>
            <h2 className={styles.conText}>Contact me</h2>
            <form onSubmit={onSubmit} className={styles.formBox}>
                <input type="text" name='name' placeholder='Your name' required />
                <input type="email" name='email' placeholder='Your email' required />
                <textarea name="message" placeholder='Enter message' required></textarea>
                <button type='submit'>Send</button>
            </form>       
         </div>
         <div className={styles.socialBox}>
            <div className={styles.contImgBox}>
            <img src={contactImg} alt="Img" />
            </div>
            <h3>Let's connect</h3>
            <div className={styles.socialApps}>
                <a href=""><img src={github} alt="img" className={styles.appIcons} /></a>
                <a href=""><img src={linkedIn} alt="img" className={styles.appIcons} /></a>
                <a href="https://www.instagram.com/mr____yashas_"><img src={instagram} alt="img" className={styles.appIcons} /></a>
            </div>
         </div>
       </section>
    )
}