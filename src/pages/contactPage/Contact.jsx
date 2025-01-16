import styles from './Contact.module.css';
import contactImg from '../../assets/contactImg.png'; 
import config from '../../config';

export const Contact = () => {

    const onSubmit = async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", config.web3forms);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit",
             {
                method: "POST",
                headers:{
                    "content-type":"application/json",
                    Accept:"application/json"
                },
                body:json
            }).then((res)=>res.json());

            if(res.success){
                console.log("success",res)
                alert("Message sent")
            }
            else{
                console.log(res)
                alert("message failed")
            }
    }

    return(
       <section id="contact" className={styles.contact}>
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
                <a href="https://github.com/yashas-ravi"><i class="fa-brands fa-github"></i></a>
                <a href="https://linkedin.com/in/yashas-mr-7b95471b5"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/yashas__mr"><i class="fa-brands fa-instagram"></i></a>
            </div>
         </div>
       </section>
    )
}