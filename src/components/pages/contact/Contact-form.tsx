import React, {
  useState,
  useEffect,
  useRef,
  SyntheticEvent,
  ChangeEvent,
  FocusEvent,
  useReducer,
} from "react";
import FaIcon from "../../basic-components/Fa-icon";
import { formMachineReducer, FormState, FormEvent } from "./Form-machine";
import emailjs from "@emailjs/browser";

interface formData {
  email: string;
  name: string;
  message: string;
}

const CONTAINER_STYLES: string =
  "mt-12 lg:mt-auto min-w-[350px] w-5/6 h-fit m-auto bg-secondary-background px-4 py-16 flex flex-col gap-6 rounded-md border-b-4 border-b-primary";
const BUTTON_STYLES: string =
  "bg-primary rounded-md text-xl text-secondary-background px-8 py-4 font-impact tracking-wider hover:bg-primary-contrast hover:border-primary-contrast";

const MISSING_FIELD_ERROR = "This field cannot be blank";

const ContactForm: React.FC = () => {
  // ---- HOOKS ----
  const [formData, setFormData] = useState<formData>({
    email: "",
    name: "",
    message: "",
  });
  const [textAreaRows, setTextAreaRows] = useState<number>(1);
  const [focusedField, setFocusedField] = useState<string>("");
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const form = useRef<HTMLFormElement>(null);

  const [formState, dispatch] = useReducer(
    formMachineReducer,
    FormState.Initial
  );

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

  // ---- HANDLE FUNCTIONS ----
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

  // ---- REMAINING LOGIC ----
  const submitForm = async (event: SyntheticEvent) => {
    event.preventDefault();

    // Validate required fields
    const newInvalidFields: string[] = [];

    for (const [key, value] of Object.entries(formData)) {
      if (["email", "message"].includes(key) && !value) {
        newInvalidFields.push(key);
      }
    }

    setInvalidFields(newInvalidFields);

    if (newInvalidFields.length > 0 || !form.current) {
      return;
    }
    dispatch(FormEvent.Submit);

    emailjs
      .sendForm(
        process.env.MAIL_SERVICE_ID || "",
        process.env.MAIL_TEMPLATE_ID || "",
        form.current,
        process.env.MAIL_PUBLIC_KEY || ""
      )
      .then(
        () => {
          dispatch(FormEvent.Success);
        },
        (error) => {
          console.log(error.text);
          dispatch(FormEvent.Fail);
        }
      );
  };

  const handleNewMessage = () => {
    dispatch(FormEvent.Restart);
    setFormData({
      email: "",
      name: "",
      message: "",
    });
  };

  // ---- COMPONENT VIEW ----
  if (formState === FormState.Submitting) {
    return (
      <div className={CONTAINER_STYLES}>
        <header>
          <div className="w-full flex justify-center">
            <div className="h-28 w-28 aspect-square bg-primary rounded-full flex justify-center items-center">
              <svg
                aria-hidden="true"
                className="w-20 h-20 animate-spin text-secondary-background fill-primary-contrast"
                viewBox="0 0 100 101"
                fill="none"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </div>
        </header>
        <main>
          <div className="px-4 w-full flex flex-col justify-center items-center">
            <p className="paragraph text-center">
              Your message is being sent...
            </p>
          </div>
        </main>
      </div>
    );
  }

  if (formState === FormState.Failed) {
    return (
      <div className={CONTAINER_STYLES}>
        <header>
          <div className="w-full flex justify-center">
            <div className="h-28 aspect-square bg-red-500 rounded-full flex justify-center">
              <FaIcon
                icon="fa-xmark"
                changeOnHover={false}
                className="h-4/6 m-auto"
                iconColor="var(--dark-secondary-background)"
              />
            </div>
          </div>
        </header>
        <main>
          <div className="px-4 w-full">
            <p className="paragraph text-center">
              Something went wrong, please try to send a message again
            </p>
          </div>
        </main>
        <footer className="w-full flex justify-center">
          <button
            className={BUTTON_STYLES}
            type="button"
            onClick={() => dispatch(FormEvent.Restart)}
          >
            BACK
          </button>
        </footer>
      </div>
    );
  }

  if (formState === FormState.Submitted) {
    return (
      <div className={CONTAINER_STYLES}>
        <header>
          <div className="w-full flex justify-center">
            <div className="h-28 aspect-square bg-primary rounded-full flex justify-center">
              <FaIcon
                icon="fa-envelope-circle-check"
                changeOnHover={false}
                className="h-4/6 m-auto"
                iconColor="var(--dark-secondary-background)"
              />
            </div>
          </div>
        </header>
        <main>
          <div className="px-4 w-full">
            <p className="paragraph text-center">Thank you for your message!</p>
            <p className="paragraph text-center">
              It was successfully sent, I will reply your as soon as possible!
            </p>
          </div>
        </main>
        <footer className="w-full flex justify-center">
          <button
            className={BUTTON_STYLES}
            type="button"
            onClick={handleNewMessage}
          >
            NEW MESSAGE
          </button>
        </footer>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={submitForm} className={CONTAINER_STYLES}>
      <header>
        <div className="w-full flex justify-center">
          <div className="h-28 aspect-square bg-primary rounded-full flex justify-center">
            <FaIcon
              icon="fa-file-signature"
              changeOnHover={false}
              className="h-4/6 m-auto"
              iconColor="var(--dark-secondary-background)"
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
            value={formData.email}
            required
          />
          {invalidFields.includes("email") && (
            <p className="text-red-500 text-lg">{MISSING_FIELD_ERROR}</p>
          )}
        </section>
        <section>
          <label
            htmlFor="name-field"
            className={`select-none text-lg ${
              focusedField === "name"
                ? "text-primary-contrast"
                : "text-transparent"
            } font-bold ease-in-out duration-500`}
          >
            Name
          </label>
          <input
            className={`w-full text-xl bg-transparent !outline-none border-b-2 ${
              invalidFields.includes("name")
                ? "border-b-red-500"
                : "border-b-primary-dark"
            } focus:border-b-primary-contrast`}
            type="text"
            name="name"
            id="name-field"
            placeholder={`${focusedField === "name" ? "" : "Name"}`}
            onChange={handleFormInput}
            onFocus={handleFieldGainedFocus}
            onBlur={() => setFocusedField("")}
            value={formData.name}
          />
          {invalidFields.includes("name") && (
            <p className="text-red-500 text-lg">{MISSING_FIELD_ERROR}</p>
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
            value={formData.message}
            required
          ></textarea>
          {invalidFields.includes("message") && (
            <p className="text-red-500 text-lg">{MISSING_FIELD_ERROR}</p>
          )}
        </section>
      </main>
      <footer className="w-full flex justify-center">
        <button className={BUTTON_STYLES} type="submit">
          SEND
        </button>
      </footer>
    </form>
  );
};

export default ContactForm;
