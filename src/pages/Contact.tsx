import Section from "../components/basic-components/Section";
import ContactForm from "../components/pages/contact/Contact-form";

export default function Contact() {
  return (
    <>
      <Section title="Contact">
        <div className="p-4">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
