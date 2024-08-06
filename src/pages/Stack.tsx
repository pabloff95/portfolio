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
        name: "Python",
        imgPath: "/images/pages/stack/python.png",
        level: 5.0,
      },
      {
        name: "Git",
        imgPath: "/images/pages/stack/git.png",
        level: 7.0,
      },
    ],
  },
  backEnd: {
    name: "Back End",
    icon: "database",
    stack: [
      {
        name: "Python",
        imgPath: "/images/pages/stack/python.png",
        level: 5.0,
      },
      {
        name: "Git",
        imgPath: "/images/pages/stack/git.png",
        level: 7.0,
      },
      {
        name: "JavaScript",
        imgPath: "/images/pages/stack/js.png",
        level: 9.0,
      },
    ],
  },
  other: {
    name: "Others",
    icon: "code",
    stack: [
      {
        name: "Git",
        imgPath: "/images/pages/stack/git.png",
        level: 7.0,
      },
      {
        name: "Python",
        imgPath: "/images/pages/stack/python.png",
        level: 5.0,
      },
      {
        name: "JavaScript",
        imgPath: "/images/pages/stack/js.png",
        level: 9.0,
      },
    ],
  },
};

export default function Stack() {
  const [selectedStack, setSelectedStack] = useState<StackInterface | null>(
    null
  );

  const noStackSelectedContainerStyles: string =
    "w-full h-full gap-4 justify-evenly items-center";
  const stackSelectedContainerStyles: string = "items-start";

  const handleSelectStack: (stack: StackInterface) => void = (stack) => {
    setSelectedStack(stack);
  };

  return (
    <>
      <Section fullHeight title="Stack">
        <section className="w-full h-full">
          <div
            className={`${
              selectedStack?.name
                ? stackSelectedContainerStyles
                : noStackSelectedContainerStyles
            } flex flex-row ease-in-out duration-5000`}
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
          <div>
            {selectedStack && (
              <div className="my-12 w-full flex justify-center gap-12">
                {selectedStack.stack.map(({ name, imgPath }, index) => {
                  return (
                    <StackItem
                      name={name}
                      src={imgPath}
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
