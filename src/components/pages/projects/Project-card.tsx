import React, { useState, useRef, MutableRefObject } from "react";
import FaIcon from "../../basic-components/Fa-icon";
import ExternalLink from "../../basic-components/External-link";

export interface ProjectCardProps {
  title: string;
  shortDescription: string;
  imgSrc: string;
  imgAlt: string;
  longDescription: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  shortDescription,
  imgSrc,
  imgAlt,
  longDescription,
  githubUrl,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const cardRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const openCard = () => {
    cardRef?.current?.classList.remove("rotate-y-animation");

    setTimeout(() => {
      cardRef?.current?.classList.add("rotate-y-animation");
    }, 0);

    setTimeout(() => {
      setIsOpened(!isOpened);
    }, 500); // Animation last 1s, it is rotated at the 50% -> after 0.5s the project card content is changed
  };

  const longDescriptionHTML = { __html: `<p>${longDescription}</p>` };

  return (
    <div className="px-[1vw]">
      <div
        className="bg-secondary-background min-w-[350px] w-[25vw] h-full rounded-lg shadow-box-primary shadow-contrast-on-hover-child"
        ref={cardRef}
      >
        <div className="min-h-[50vh] h-full p-6 flex flex-col gap-2 justify-center items-center text-center">
          <div className="flex flex-col w-full h-full">
            <button
              className="overflow-hidden w-full flex justify-center rounded-lg"
              onClick={openCard}
              type="button"
            >
              {!isOpened && (
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className="h-[30vh] min-w-full cursor-pointer hover:scale-110 hover:bg-primary-contrast ease-in-out duration-200"
                />
              )}
            </button>
            <p className="mt-2 font-impact text-3xl w-full text-contrast-on-sibling-hover">
              {title}
            </p>
            {isOpened ? (
              <div className="grow">
                <div
                  className="paragraph"
                  dangerouslySetInnerHTML={longDescriptionHTML}
                />
                {githubUrl && (
                  <ExternalLink url={githubUrl} showLinkClasses>
                    <p className="paragraph">
                      <FaIcon
                        icon="fa-brands fa-github"
                        className="mr-2"
                        iconColor="var(--text-color)"
                        changeOnHover={false}
                      ></FaIcon>
                      See in GitHub
                    </p>
                  </ExternalLink>
                )}
              </div>
            ) : (
              <p className="paragraph grow my-1">{shortDescription}</p>
            )}
            <button
              className="w-full text-xl py-2 bg-primary-dark rounded-lg font-bold text-font-base tracking-wider hover:bg-primary-contrast"
              type="button"
              onClick={openCard}
            >
              <FaIcon
                icon={
                  isOpened
                    ? "fa-magnifying-glass-minus"
                    : "fa-magnifying-glass-plus"
                }
                className="mr-2"
                iconColor="var(--text-color)"
                changeOnHover={false}
              ></FaIcon>
              {isOpened ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
