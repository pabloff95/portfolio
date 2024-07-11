import Section from "../components/basic-components/Section";
import SoftSkill from "../components/pages/about/Soft-skill";
import BackgroundCard from "../components/pages/about/Background-card";

export default function About() {
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
          <BackgroundCard
            from="2022"
            fromLong="02/2022"
            to="2024"
            toLong="12/2024"
            title="Full stack developer"
            place="Data Ahead (Nürnberg)"
            isExpandable={true}
          >
            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo deserunt earum architecto omnis, libero nulla sint
              fugiat labore adipisci. Id totam tenetur accusamus nobis quasi at
              blanditiis dolorum asperiores distinctio?
            </p>
          </BackgroundCard>
          <BackgroundCard
            from="2021"
            fromLong="12/2021"
            to="2021"
            toLong="03/2021"
            title="IT Validator"
            place="Capgemini (Barcelona)"
            isExpandable={true}
          >
            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo deserunt earum architecto omnis, libero nulla sint
              fugiat labore adipisci. Id totam tenetur accusamus nobis quasi at
              blanditiis dolorum asperiores distinctio?
            </p>
          </BackgroundCard>
          <BackgroundCard
            from="2020"
            fromLong="03/2020"
            to="2020"
            toLong="09/2020"
            title="Resear intern"
            place="Forest & Nature Lab (Ghent University)"
            isExpandable={true}
          >
            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo deserunt earum architecto omnis, libero nulla sint
              fugiat labore adipisci. Id totam tenetur accusamus nobis quasi at
              blanditiis dolorum asperiores distinctio?
            </p>
          </BackgroundCard>
        </div>
      </Section>
      <Section title="Academic background">
        <div className="my-5 py-5 mx-auto flex flex-col gap-6 w-2/3">
          <BackgroundCard
            from="2020"
            to="2022"
            title="Web Applications Development"
            degreeType="Higher education degree"
            place="Ilerna (Spain)"
          ></BackgroundCard>
          <BackgroundCard
            from="2019"
            to="2020"
            title="Terrestrial Ecology & Biodiversity Management"
            degreeType="Master of Science degree"
            place="Autonomous University of Barcelona (Spain)"
          ></BackgroundCard>
          <BackgroundCard
            from="2014"
            to="2018"
            title="Biology"
            degreeType="Bachelor of Science degree"
            place="University of Girona (Spain)"
          ></BackgroundCard>
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
