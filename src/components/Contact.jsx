import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactMsg}>
        <h2>Say hi!</h2>
      </div>
      <ContactForm />
    </section>
  );
}

export default Contact;
