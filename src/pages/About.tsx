import Section from "../components/basic-components/Section";
import SoftSkill from "../components/pages/about/Soft-skill";
import TimeLine from "../components/pages/about/Time-line";
import { TimeLineItemProps } from "../components/pages/about/Time-line-item";

export default function About() {
  const workExperienceEvents: TimeLineItemProps[] = [
    {
      title: "Full stack developer",
      from: "02/2022",
      to: "Present",
      place: "Data Ahead",
      placeUrl: "www.dataahead.de",
      location: "Nürnberg | Germany",
      shortText:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo deserunt earum architecto omnis, libero nulla sint",
      longText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat accusamus modi rerum ullam temporibus cum sequi officia pariatur saepe voluptate, mollitia iusto est sed, dicta hic, consequatur ipsa ipsam quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat accusamus modi rerum ullam temporibus cum sequi officia pariatur saepe voluptate, mollitia iusto est sed, dicta hic, consequatur ipsa ipsam quisquam.",
    },
    {
      title: "IT Validator",
      from: "12/2021",
      to: "03/2021",
      place: "Capgemini",
      placeUrl: "www.capgemini.com",
      location: "Barcelona | Spain",
      shortText:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo deserunt earum architecto omnis, libero nulla sint",
      longText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat accusamus modi rerum ullam temporibus cum sequi officia pariatur saepe voluptate, mollitia iusto est sed, dicta hic, consequatur ipsa ipsam quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat accusamus modi rerum ullam temporibus cum sequi officia pariatur saepe voluptate, mollitia iusto est sed, dicta hic, consequatur ipsa ipsam quisquam.",
    },
    {
      title: "Resear intern",
      from: "03/2020",
      to: "09/2020",
      place: "Forest & Nature Lab",
      location: "Ghent | Belgium",
      shortText:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo deserunt earum architecto omnis, libero nulla sint",
      longText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat accusamus modi rerum ullam temporibus cum sequi officia pariatur saepe voluptate, mollitia iusto est sed, dicta hic, consequatur ipsa ipsam quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat accusamus modi rerum ullam temporibus cum sequi officia pariatur saepe voluptate, mollitia iusto est sed, dicta hic, consequatur ipsa ipsam quisquam.",
    },
  ];

  const academicBackgroundEvents: TimeLineItemProps[] = [
    {
      from: "2020",
      to: "2022",
      title: "Web Applications Development",
      shortText: "Higher education degree",
      place: "Ilerna",
      location: "Spain",
      isSortVersion: true,
    },
    {
      from: "2019",
      to: "2020",
      title: "Terrestrial Ecology & Biodiversity Management",
      shortText: "Master of Science degree",
      place: "Autonomous University of Barcelona",
      location: "Spain",
      isSortVersion: true,
    },
    {
      from: "2014",
      to: "2018",
      title: "Biology",
      shortText: "Bachelor of Science degree",
      place: "University of Girona",
      location: "Spain",
      isSortVersion: true,
    },
  ];

  return (
    <>
      <Section title="About me">
        <p className="paragraph">
          I grew up in the north of Spain, in Santander. But I have had the
          opportunity to live in various locations such as Barcelona (Spain),
          Gerona (Spain), Looe (UK), Ghent (Belgium) and Salem (Germany). Now, I
          am based in Nürnberg (Germany). Each of these places has allowed me to
          learn from diverse cultures and meet incredible people. Because of it
          I can speak English, Spanish, and German
        </p>
        <p className="paragraph">
          During my undergraduate studies, I commuted daily approximately four
          hours between Barcelona and Gerona, but I used this time for studying
          and for working in my projects. This determination, combined with my
          curiosity, has brought me to learn from a variety of subjects
          including software development, data analysis, economics, ecology, and
          genetics. I am always eager to continue learning and improving.
        </p>
        <p className="paragraph">
          In addition to my studies, I am also passionate about new experiences
          and challenges. This led me to participate in an Erasmus volunteer
          project, where I lived in a caravan for a year in the UK. I believe
          volunteering is an excellent way to grow as an individual and make a
          positive impact in the world.
        </p>
        <p className="paragraph">
          In my free time I enjoy staying active through sports, coding personal
          projects, spending time with friends and family, reading and cooking.
        </p>
      </Section>
      <Section title="Work experience">
        <div className="my-5 py-5 mx-auto flex flex-col gap-6 w-2/3">
          <TimeLine events={workExperienceEvents} />
        </div>
      </Section>
      <Section title="Academic background">
        <div className="my-5 py-5 mx-auto flex flex-col gap-6 w-2/3">
          <TimeLine events={academicBackgroundEvents} />
        </div>
      </Section>
      <Section title="Soft skills">
        <p className="paragraph">
          I place a very high value on the soft skills I have developed
          throughout my career, because I believe that they contribute to a
          positive work environment and can enhance the productivity of a team.
          From all of them, I highlight the following:
        </p>
        <div className="my-5 w-full flex justify-evenly items-center h-[10vh]">
          <SoftSkill title="Team Work" icon="fa-people-group" />
          <SoftSkill title="Critical Thinking" icon="fa-gears" />
          <SoftSkill title="Time Management" icon="fa-clock" />
          <SoftSkill title="Adaptability" icon="fa-rotate" />
          <SoftSkill title="Problem Solving" icon="fa-lightbulb" />
        </div>
      </Section>
    </>
  );
}
