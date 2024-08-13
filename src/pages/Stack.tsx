import Section from "../components/basic-components/Section";
import { useState } from "react";
import SkillButton from "../components/pages/stack/skill-button";
import StackItem from "../components/pages/stack/stack-item";

export interface StackInterface {
  name: string;
  icon: string;
  stack: {
    name: string;
    imgPath: string;
    level: number;
  }[];
}

interface SkillsInterface {
  [key: string]: StackInterface;
}

const SKILLS: SkillsInterface = {
  frontEnd: {
    name: "Front End",
    icon: "desktop",
    stack: [
      {
        name: "JavaScript",
        imgPath: "/images/pages/stack/js.png",
        level: 9.0,
      },
      {
        name: "HTML",
        imgPath: "/images/pages/stack/html.png",
        level: 9.0,
      },
      {
        name: "CSS",
        imgPath: "/images/pages/stack/css.png",
        level: 9.0,
      },
      {
        name: "Ember",
        imgPath: "/images/pages/stack/ember_js.png",
        level: 9.0,
      },
      {
        name: "Tailwind",
        imgPath: "/images/pages/stack/tailwind.png",
        level: 8,
      },
      {
        name: "React",
        imgPath: "/images/pages/stack/react.png",
        level: 7.0,
      },
      {
        name: "Typescript",
        imgPath: "/images/pages/stack/typescript.png",
        level: 5.5,
      },
      {
        name: "Bootstrap",
        imgPath: "/images/pages/stack/bootstrap.png",
        level: 5,
      },
      {
        name: "Angular",
        imgPath: "/images/pages/stack/angular.png",
        level: 1,
      },
    ],
  },
  backEnd: {
    name: "Back End",
    icon: "database",
    stack: [
      {
        name: "SQL",
        imgPath: "/images/pages/stack/sql.png",
        level: 7.0,
      },
      {
        name: "Node",
        imgPath: "/images/pages/stack/node.png",
        level: 4.0,
      },
      {
        name: "Python",
        imgPath: "/images/pages/stack/python.png",
        level: 4.0,
      },
      {
        name: "Flask",
        imgPath: "/images/pages/stack/flask.png",
        level: 3.0,
      },
      {
        name: "MongoDB",
        imgPath: "/images/pages/stack/mongo_db.png",
        level: 1.5,
      },
      {
        name: "PHP",
        imgPath: "/images/pages/stack/php.png",
        level: 1.5,
      },
      {
        name: "C#",
        imgPath: "/images/pages/stack/c_sharp.png",
        level: 1.5,
      },
    ],
  },
  other: {
    name: "Others",
    icon: "code",
    stack: [
      {
        name: "GraphQl",
        imgPath: "/images/pages/stack/graphql.png",
        level: 8.0,
      },
      {
        name: "Git",
        imgPath: "/images/pages/stack/git.png",
        level: 7.5,
      },
      {
        name: "CI/CD",
        imgPath: "/images/pages/stack/ci_cd.png",
        level: 3.5,
      },
      {
        name: "Docker",
        imgPath: "/images/pages/stack/docker.png",
        level: 1.5,
      },
    ],
  },
};

export default function Stack() {
  const [selectedStack, setSelectedStack] = useState<StackInterface | null>(
    null
  );

  const handleSelectStack: (stack: StackInterface) => void = (stack) => {
    setSelectedStack(stack);
  };

  return (
    <>
      <Section fullHeight hideTittle>
        <section className="w-full h-full flex flex-col">
          <div
            className={`${
              selectedStack ? "items-start" : "w-full h-full  items-center"
            } flex flex-col justify-center gap-8 ease-in-out duration-5000`}
          >
            <div className="font-impact text-6xl text-primary">
              Discover my Tech Stack!
            </div>
            {!selectedStack && (
              <p className="paragraph w-[80%]">
                Here you will find the set of tools and technologies that I use
                in my projects. Take a closer look at the resources I use to
                develop dynamic, responsive and efficient web applications.
              </p>
            )}
            <div
              className={`w-full flex justify-center flex-row ${
                selectedStack ? "gap-8" : "gap-16"
              }`}
            >
              <SkillButton
                name={SKILLS.frontEnd.name}
                icon={SKILLS.frontEnd.icon}
                handleButtonClick={() => handleSelectStack(SKILLS.frontEnd)}
                selectedStack={selectedStack}
              />
              <SkillButton
                name={SKILLS.backEnd.name}
                icon={SKILLS.backEnd.icon}
                handleButtonClick={() => handleSelectStack(SKILLS.backEnd)}
                selectedStack={selectedStack}
              />
              <SkillButton
                name={SKILLS.other.name}
                icon={SKILLS.other.icon}
                handleButtonClick={() => handleSelectStack(SKILLS.other)}
                selectedStack={selectedStack}
              />
            </div>
          </div>
          <div>
            {selectedStack && (
              <div className="my-12 m-auto w-[80%] lg:w-1/2 flex flex-wrap justify-center">
                {selectedStack.stack.map(({ name, imgPath, level }, index) => {
                  return (
                    <StackItem
                      name={name}
                      src={imgPath}
                      level={level}
                      key={`${index}-stack-item`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </Section>
    </>
  );
}
