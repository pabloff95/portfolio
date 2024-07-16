import Section from "../components/basic-components/Section";
import ProjectCard, {
  ProjectCardProps,
} from "../components/pages/projects/Project-card";
import { useState } from "react";

export default function Projects() {
  const [expandedCard, setExpandedCard] = useState<null | number>(null);

  const projectsData: ProjectCardProps[] = [
    {
      title: "The GuessGame",
      shortDescription:
        'Adaptation of the boardgame "Mastermind", with global users rank tranking',
      longDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis sapiente architecto alias temporibus voluptates molestias totam. Nihil, aliquam dicta est eaque praesentium repellat asperiores natus dolore nam ipsam enim.",
      imgSrc: "/images/pages/projects/guessgame.PNG",
      imgAlt: "The GuessGame project board view",
      githubUrl: "https://github.com/pabloff95/The-GuessGame",
    },
    {
      title: "Weather App",
      shortDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis sapiente architecto",
      longDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis sapiente architecto alias temporibus voluptates molestias totam. Nihil, aliquam dicta est eaque praesentium repellat asperiores natus dolore nam ipsam enim.",
      imgSrc: "/images/pages/projects/weather-app.PNG",
      imgAlt: "Weather app project image",
      githubUrl: "https://github.com/pabloff95/Weather-App",
    },
    {
      title: "Finances Manager",
      shortDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis sapiente architecto",
      longDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis sapiente architecto alias temporibus voluptates molestias totam. Nihil, aliquam dicta est eaque praesentium repellat asperiores natus dolore nam ipsam enim.",
      imgSrc: "/images/pages/projects/finance-manager.PNG",
      imgAlt: "Finances Manager project image",
      githubUrl: "https://github.com/pabloff95/Finance-Manager",
    },
    {
      title: "Research study",
      shortDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis sapiente architecto",
      longDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis sapiente architecto alias temporibus voluptates molestias totam. Nihil, aliquam dicta est eaque praesentium repellat asperiores natus dolore nam ipsam enim.",
      imgSrc: "/images/pages/projects/research-study.PNG",
      imgAlt: "Research study project image",
    },
    {
      title: "Calculator",
      shortDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis sapiente architecto",
      longDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis sapiente architecto alias temporibus voluptates molestias totam. Nihil, aliquam dicta est eaque praesentium repellat asperiores natus dolore nam ipsam enim.",
      imgSrc: "/images/pages/projects/calculator.PNG",
      imgAlt: "Calculator project image",
      githubUrl: "https://github.com/pabloff95/React-Calculator",
    },
    {
      title: "Snake Game",
      shortDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis sapiente architecto",
      longDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim debitis sapiente architecto alias temporibus voluptates molestias totam. Nihil, aliquam dicta est eaque praesentium repellat asperiores natus dolore nam ipsam enim.",
      imgSrc: "/images/pages/projects/snake-game.PNG",
      imgAlt: "Snake Game project image",
      githubUrl: "https://github.com/pabloff95/Snake-Game",
    },
  ].map((el, index) => ({
    // Pass general props that are shared by all the objects
    ...el,
    index,
    expandedCard,
    setExpandedCard: (value: number) => setExpandedCard(value),
  }));

  return (
    <>
      <Section title="Projects">
        <div className="w-full my-4 flex flex-wrap justify-center gap-y-8">
          {projectsData.map((project: ProjectCardProps, index) => (
            <ProjectCard {...project} key={`project-${index}`} />
          ))}
        </div>
      </Section>
    </>
  );
}
