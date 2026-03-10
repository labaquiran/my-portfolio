import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send(process.env.REACT_APP_EMAILJS_SERVICE_ID, "contact_form", data, {
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    }).then((result) => {
      console.log(result.text);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <div className={styles.field}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          {...register("name", { required: true })}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", { required: true })}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          {...register("subject", { required: true })}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          {...register("message", { required: true })}
        ></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
