import styles from './Contact.module.css';
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
         <div className={styles.contactForm}>
            <p>You have reached the end of the grid..  If you have anything to say mail me.</p>
            <form onSubmit={onSubmit} className={styles.formBox}>
                <input type="text" name='name' placeholder='Your name' required />
                <input type="email" name='email' placeholder='Your email' required />
                <textarea name="message" placeholder='Enter message' required></textarea>
                <button type='submit'>Send</button>
            </form>       
         </div>
       </section>
    )
}