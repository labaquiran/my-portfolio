import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contactSection}>
      <ContactForm />
      <div className={styles.contactMsg}>
        <h2>Say hi!</h2>
      </div>
    </section>
  );
}

export default Contact;
