import Section from "../components/basic-components/Section";
import SoftSkill from "../components/pages/about/Soft-skill";
import TimeLine from "../components/pages/about/Time-line";
import { TimeLineItemProps } from "../components/pages/about/Time-line-item";
import { useState } from "react";
import Switch from "../components/basic-components/Switch";

export default function About() {
  const workExperienceEvents: TimeLineItemProps[] = [
    {
      title: "Full stack developer",
      from: "02/2022",
      to: "Present",
      place: "Data Ahead",
      placeUrl: "https://dataahead.de/",
      location: "Nürnberg | Germany",
      shortText:
        "Full-Stack Developer focused primarily on Front-End development (80% Front-End, 20% Back-End). My role involves contributing to the development and maintenance of two key company products: Process Hawk and Xitavis.",
      longText:
        'As a Full-Stack Developer at Data Ahead (80% Front-End, 20% Back-End), my role centers on contributing to the development and maintenance of two key company products: Process Hawk and Xitavis. I use a diverse tech stack, including Ember JS, Node JS, GraphQL, MongoDB, Tailwind, Bootstrap, Python, Docker, and Git.<br /><br />My responsibilities encompass a wide range of tasks such as: <ul class="list-disc pl-6"><li>Fix bugs and performance problems.</li><li>Concept, design, plan and testing of new features and further development of the existing functionalities.</li><li>Update dependencies.</li><li>Code reviews.</li><li>Mentor front end developers and onboarding of new team members.</li><li>Participate in technical interviews of new candidates.</li><li>Collaboration with the sales team and management to ensure alignment on project goals and deliverables.</li></ul>',
      isItRelevant: true,
    },
    {
      title: "Environmental educator",
      from: "03/2022",
      to: "11/2022",
      place: "Affenberg Salem",
      placeUrl: "https://www.affenberg-salem.de/",
      location: "Salem | Germany",
      shortText:
        "Environmental Educator teaching visitors about the biology and ecology of Barbary macaques, offering insights into primate behavior and conservation.",
      longText:
        "Teach about primate biology and ecology (Macaca sylvanus), answer questions of visitors and ensure the security of the visitors.<br /><br />At Affenberg Salem, my responsibilities included teaching visitors about the biology and ecology of primates (specifically Macaca sylvanus). I answered visitor questions, providing detailed information and insights into primate behavior and conservation.<br /><br />Additionally, I ensured the safety and security of all visitors, managing interactions between the public and the primates to create a safe and educational environment.",
      isItRelevant: false,
    },
    {
      title: "IT Validator",
      from: "12/2021",
      to: "03/2021",
      place: "Capgemini",
      placeUrl: "https://www.capgemini.com/",
      location: "Barcelona | Spain",
      shortText:
        "Validation of software changes for a leading pharmaceutical company, ensuring compliance with regulatory standards, conducting rigorous testing, and managing risks to maintain the reliability and safety of critical software systems.",
      longText:
        "At Capgemini, I specialized in the validation of changes and new implementations of software for a leading pharmaceutical company.<br /><br />My role involved ensuring that all software modifications met stringent regulatory standards and functioned seamlessly within the company's operational framework. I collaborated closely with cross-functional teams to develop and execute comprehensive validation plans, conduct rigorous testing, and document results to maintain compliance with the industry regulations.<br /><br />As part of my work, I was also responsible for the risk management associated with software changes and new implementations. I conducted risk assessments, developed mitigation strategies, and implemented robust risk management processes. My efforts ensured the reliability and safety of critical software systems, contributing to the overall quality and efficiency of the company's operations.",
      isItRelevant: true,
    },
    {
      title: "Resear intern",
      from: "03/2020",
      to: "09/2020",
      place: "Forest & Nature Lab",
      placeUrl: "https://www.ugent.be/bw/environment/en/research/fornalab",
      location: "Ghent | Belgium",
      shortText:
        "Research on the impacts of global warming on forest understorey plants using Integral Projection Models (IPMs) in R. ",
      longText:
        "During the development of my master's thesis, I joined the Forest & Nature Lab research group, where I worked with Integral Projection Models (IPMs) using R to model the impacts of global warming on forest understorey plant populations. As a result of my work, I authored a research paper that was published, highlighting the findings and contributions of my research (see link bellow).<br /><br />In addition to my modeling work, I participated in fieldwork for various experiments, which included tasks such as collecting soil samples, measuring specific plant traits, and trimming tree branches.",
      isItRelevant: true,
    },
    {
      title: "Primate caregiver",
      from: "10/2018",
      to: "10/2019",
      place: "Wild Futures",
      placeUrl: "https://www.wildfutures.org/",
      location: "Looe | England",
      shortText:
        "Erasmus+ internship focused on captive primates (barbary macaques, woolly monkey) care and research.",
      longText:
        'Erasmus + Grant: One year long intership in the Wild Future´s Monkey Sanctuary in Cornwall, England. The project consists of learning the skills for the animal care in captivity and taking part within the research department of the centre. Work developed:<ul class="list-disc pl-6"><li>Full training in Barbary Macaque (Macaca sylvanus) care.</li><li>Full training in Woolly Monkey (Lagothrix sp.) care.</li><li>Data collect (with Zoo Monitor) and analysis (with Microsoft Excel).</li><li>Giving informative talks to the visitors.</li><li>Construction of new enviromental enrichment items.</li><li>Basic training in Capuchin monkeys (Cebus sp. and Sapajus sp.) care and ecology.</li></ul>',
      isItRelevant: false,
    },
    {
      title: "Research assistant",
      from: "03/2018",
      to: "06/2019",
      place: "CREAF",
      placeUrl: "https://www.creaf.cat",
      location: "Barcelona | Spain",
      shortText:
        'Internship as a research technician for the project "Biodiversity and Land Use in the Face of Climate Change in High Mountain Systems".',
      longText:
        'During my internship as a research technician for the project "Biodiversity and Land Use in the Face of Climate Change in High Mountain Systems" I undertook a variety of tasks, such as:<ul class="list-disc pl-6"><li>Mapping Species Distribution: I used QGIS to map the distribution of various species.</li><li>Arthropodal Classification: I conducted detailed classification and analysis of arthropods collected during field studies.</li><li>Other field work tasks: installing insect traps, configurating camera traps, checking bird nests, measurement of trees.</li></ul>',
      isItRelevant: false,
    },
    {
      title: "Research assistant",
      from: "02/2018",
      to: "05/2018",
      place: "Fundación MONA",
      placeUrl: "https://fundacionmona.org/",
      location: "Girona | Spain",
      shortText: "Internship as researcher of captive chimpanzee behaviour.",
      longText:
        "As part of my bachelor's degree dissertation, I conducted a research study on the behavior of captive chimpanzees (Pan troglodytes). This involved data collection using Zoo Monitor, where I observed and recorded various behavioral patterns.</br></br>Following the data collection, I performed a comprehensive analysis utilizing Microsoft Excel and SPSS statistics to interpret the findings. This research provided valuable insights into chimpanzee behavior and contributed significantly to my academic development.",
      isItRelevant: false,
    },
    {
      title: "Primate caregiver",
      from: "06/2017",
      to: "07/2017",
      place: "Fundación MONA",
      placeUrl: "https://fundacionmona.org/",
      location: "Girona | Spain",
      shortText:
        "Internship as primate caregiver of chimpanzees and barbary macaques.",
      longText:
        "During my internship as a primate caregiver, my responsibilities included preparing diets, cleaning enclosures, developing environmental enrichment activities and performing various maintenance tasks.",
      isItRelevant: false,
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

  const [showItRelevantExperiencesOnly, setShowItRelevantExperiencesOnly] =
    useState<boolean>(true);

  return (
    <>
      <Section title="About me" animateLeft>
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
      <Section title="Work experience" animateRight>
        <div className="text-center md:text-end">
          <Switch
            boolValue={showItRelevantExperiencesOnly}
            onChange={() => {
              setShowItRelevantExperiencesOnly(!showItRelevantExperiencesOnly);
            }}
            label="Display only IT-relevant work experience"
          />
        </div>
        <div className="mb-5 py-5 mx-auto flex flex-col gap-6 w-full min-[500px]:w-11/12 md:w-2/3">
          <TimeLine
            events={workExperienceEvents.filter((event) => {
              if (showItRelevantExperiencesOnly) {
                return event.isItRelevant;
              }

              return true;
            })}
          />
        </div>
      </Section>
      <Section title="Academic background" animateLeft>
        <div className="my-5 py-5 mx-auto flex flex-col gap-6 w-full min-[500px]:w-11/12 md:w-2/3">
          <TimeLine events={academicBackgroundEvents} />
        </div>
      </Section>
      <Section title="Soft skills" animateRight>
        <p className="paragraph">
          I place a very high value on the soft skills I have developed
          throughout my career, because I believe that they contribute to a
          positive work environment and can enhance the productivity of a team.
          From all of them, I highlight the following:
        </p>
        <div className="my-5 w-full flex flex-wrap justify-evenly items-center gap-2 min-h-fit h-[10vh]">
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
