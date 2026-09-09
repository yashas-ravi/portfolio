import { createSignal } from "solid-js";
import styles from "./Contact.module.css";


export const Contact = () => {
  const [submitting, setSubmitting] = createSignal(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent");
        form.reset();
      } else {
        console.error(result);
        alert("Message failed");
      }
    } catch (error) {
      console.error(error);
      alert("Message failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" class={styles.contact}>
      <div class={styles.contactForm}>
        <p>You have reached the end of the grid.. If you have anything to say mail me.</p>
        <form onSubmit={onSubmit} class={styles.formBox}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Enter message" required></textarea>
          <button id="submitBtn" type="submit" disabled={submitting()}>
            {submitting() ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};
