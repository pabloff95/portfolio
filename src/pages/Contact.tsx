import Section from "../components/basic-components/Section";
import ContactForm from "../components/pages/contact/Contact-form";
import FaIcon from "../components/basic-components/Fa-icon";
import ExternalLink from "../components/basic-components/External-link";

export default function Contact() {
  return (
    <>
      <Section hideTittle fullHeight>
        <div className="py-6 grid grid-cols-2 h-full">
          <section className="h-fit m-auto">
            <header className="font-impact text-6xl text-primary">
              Let's get in touch!
            </header>
            <main>
              <p className="paragraph">
                I'm always excited to connect with fellow developers, potential
                collaborators, and anyone interested in my work. Whether you
                have a question, need some advice, or just want to network,
                don't hesitate to drop me a message.
              </p>
              <section className="mt-12 flex flex-col gap-8 w-full">
                <div className="flex gap-4 w-full h-full items-center">
                  <div className="h-auto flex justify-start items-center">
                    <FaIcon
                      icon="fa-map-location"
                      className="h-[8vh] aspect-square"
                      changeOnHover={false}
                    />
                  </div>
                  <div className="min-h-[7vh] flex flex-col gap border-l-2 px-4">
                    <span className="text-xl bold font-impact">
                      My location
                    </span>
                    <span className="text-md opacity-80">
                      Nürnberg, Germany
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 w-full h-full items-center">
                  <ExternalLink
                    className="h-auto flex justify-start items-center"
                    url="https://linkedin.com/in/pablo-fdezfdez"
                  >
                    <FaIcon
                      icon="fa-brands fa-linkedin"
                      className="h-[8vh] aspect-square"
                    />
                  </ExternalLink>
                  <div className="min-h-[7vh] flex flex-col gap border-l-2 px-4">
                    <span className="text-xl bold font-impact">Message me</span>
                    <span className="text-md opacity-80">
                      Visit my Linked In profile and write me a message
                      <ExternalLink
                        url="https://linkedin.com/in/pablo-fdezfdez"
                        className="ml-2"
                      >
                        <FaIcon
                          iconColor="var(--primary-element-dark)"
                          icon="fa-arrow-up-right-from-square"
                        ></FaIcon>
                      </ExternalLink>
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 w-full h-full items-center">
                  <ExternalLink
                    className="h-auto flex justify-start items-center"
                    url="https://github.com/pabloff95"
                  >
                    <FaIcon
                      icon="fa-brands fa-github"
                      className="h-[8vh] aspect-square"
                    />
                  </ExternalLink>
                  <div className="min-h-[7vh] flex flex-col gap border-l-2 px-4">
                    <span className="text-xl bold font-impact">
                      See all my projects
                    </span>
                    <span className="text-md opacity-80">
                      Visit all my Github repositories
                      <ExternalLink
                        url="https://github.com/pabloff95"
                        className="ml-2"
                      >
                        <FaIcon
                          iconColor="var(--primary-element-dark)"
                          icon="fa-arrow-up-right-from-square"
                        ></FaIcon>
                      </ExternalLink>
                    </span>
                  </div>
                </div>
              </section>
            </main>
          </section>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
