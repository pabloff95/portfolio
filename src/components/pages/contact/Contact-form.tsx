import React, {
  useState,
  useEffect,
  SyntheticEvent,
  ChangeEvent,
  FocusEvent,
} from "react";
import FaIcon from "../../basic-components/Fa-icon";

interface formData {
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<formData>({
    email: "",
    subject: "",
    message: "",
  });
  const [textAreaRows, setTextAreaRows] = useState<number>(1);
  const [focusedField, setFocusedField] = useState<string>("");
  const [invalidFields, setInvalidFields] = useState<string[]>([]);

  useEffect(() => {
    // Handle text area element height
    if (!formData.message) {
      setTextAreaRows(1);
      return;
    }

    if (textAreaRows !== 10) {
      setTextAreaRows(10);
    }
  }, [formData.message]);

  const missingFieldError = "This field cannot be blank";

  const handleFormInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Remove required field flags
    if (!invalidFields.includes(name) || !value) {
      return;
    }

    setInvalidFields(invalidFields.filter((field) => field !== name));
  };

  const handleFieldGainedFocus = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    const { name } = event.target;

    if (name) {
      setFocusedField(name);
    }
  };

  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();

    // Validate required fields
    const newInvalidFields: string[] = [];

    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        newInvalidFields.push(key);
      }
    }

    setInvalidFields(newInvalidFields);

    if (newInvalidFields.length > 0) {
      return;
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className="w-5/6 m-auto bg-dark-bg rounded-lg px-4 py-8 flex flex-col gap-6 shadow-box-primary shadow-contrast-on-focus-input"
    >
      <header>
        <div className="w-full flex justify-center">
          <div className="h-28 aspect-square bg-primary rounded-full flex justify-center">
            <FaIcon
              icon="fa-file-signature"
              changeOnHover={false}
              className="h-4/6 m-auto"
              iconColor="var(--bg-color-dark)"
            />
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-6 w-5/6 m-auto">
        <section>
          <label
            htmlFor="email-field"
            className={`select-none text-lg ${
              focusedField === "email"
                ? "text-primary-contrast"
                : "text-transparent"
            } font-bold ease-in-out duration-500`}
          >
            Email *
          </label>
          <input
            className={`w-full text-xl bg-transparent !outline-none border-b-2 ${
              invalidFields.includes("email")
                ? "border-b-red-500"
                : "border-b-primary-dark"
            } focus:border-b-primary-contrast`}
            type="email"
            name="email"
            id="email-field"
            placeholder={`${focusedField === "email" ? "" : "Email *"}`}
            onChange={handleFormInput}
            onFocus={handleFieldGainedFocus}
            onBlur={() => setFocusedField("")}
            required
          />
          {invalidFields.includes("email") && (
            <p className="text-red-500 text-lg">{missingFieldError}</p>
          )}
        </section>
        <section>
          <label
            htmlFor="subject-field"
            className={`select-none text-lg ${
              focusedField === "subject"
                ? "text-primary-contrast"
                : "text-transparent"
            } font-bold ease-in-out duration-500`}
          >
            Subject *
          </label>
          <input
            className={`w-full text-xl bg-transparent !outline-none border-b-2 ${
              invalidFields.includes("subject")
                ? "border-b-red-500"
                : "border-b-primary-dark"
            } focus:border-b-primary-contrast`}
            type="text"
            name="subject"
            id="subject-field"
            placeholder={`${focusedField === "subject" ? "" : "Subject *"}`}
            onChange={handleFormInput}
            onFocus={handleFieldGainedFocus}
            onBlur={() => setFocusedField("")}
            required
          />
          {invalidFields.includes("subject") && (
            <p className="text-red-500 text-lg">{missingFieldError}</p>
          )}
        </section>
        <section>
          <label
            htmlFor="message-field"
            className={`select-none text-lg ${
              focusedField === "message"
                ? "text-primary-contrast"
                : "text-transparent"
            } font-bold ease-in-out duration-500`}
          >
            Message *
          </label>
          <textarea
            className={`w-full text-xl bg-transparent !outline-none border-b-2 ${
              invalidFields.includes("message")
                ? "border-b-red-500"
                : "border-b-primary-dark"
            } focus:border-b-primary-contrast`}
            name="message"
            id="message-field"
            placeholder={`${focusedField === "message" ? "" : "Message *"}`}
            rows={textAreaRows}
            onChange={handleFormInput}
            onFocus={handleFieldGainedFocus}
            onBlur={() => setFocusedField("")}
            required
          ></textarea>
          {invalidFields.includes("message") && (
            <p className="text-red-500 text-lg">{missingFieldError}</p>
          )}
        </section>
      </main>
      <footer className="w-full flex justify-center">
        <button
          className="border-2 border-primary-dark text-xl text-primary-dark px-8 py-4 rounded-lg font-impact tracking-wider hover:bg-font-base hover:border-font-base hover:text-primary-contrast  hover:shadow-box-primary-contrast-xl ease-in-out duration-200"
          type="submit"
        >
          SEND
        </button>
      </footer>
    </form>
  );
};

export default ContactForm;
