import React, { useState, useRef, useEffect, MutableRefObject } from "react";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef: MutableRefObject<string> = useRef(title.split(" ").join("_"));

  useEffect(() => {
    // Scroll element into view, when the user expands the card
    if (!isExpanded) {
      return;
    }

    const targetCard: HTMLElement | null = document.getElementById(
      cardRef?.current
    );

    if (targetCard) {
      // Use a small delay, otherwise sometimes the element is not fully rendered before scrolling, resulting in the element not being centered
      setTimeout(() => {
        targetCard.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, 100);
    }
  }, [isExpanded]);

  return (
    <div className="px-[1vw]" id={cardRef.current}>
      <div
        className={`bg-dark-bg min-w-[300px] ${
          isExpanded ? "w-[52vw] h-full" : "w-[25vw]"
        } rounded-xl shadow-box-primary shadow-contrast-on-hover-child ease-in-out duration-200`}
      >
        {!isExpanded && (
          <div className="p-6 flex flex-col gap-2 justify-center items-center text-center">
            <div className="w-full">
              <button
                className="overflow-hidden w-full flex justify-center rounded-xl"
                onClick={() => setIsExpanded(true)}
                type="button"
              >
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className="h-[30vh] min-w-full hover:scale-110 cursor-pointer hover:bg-primary-contrast ease-in-out duration-200"
                />
              </button>
              <p className="mt-2 font-impact text-3xl w-full text-contrast-on-sibling-hover">
                {title}
              </p>
              <p className="text-start text-lg">{shortDescription}</p>
              <button
                className="mt-2 w-full text-xl py-2 bg-primary-dark rounded-xl font-bold text-dark-bg tracking-wider hover:bg-primary-contrast"
                type="button"
                onClick={() => setIsExpanded(true)}
              >
                <FaIcon
                  icon="fa-magnifying-glass-plus"
                  className="mr-2"
                  iconColor="var(--bg-color-dark)"
                  changeOnHover={false}
                ></FaIcon>
                Read more
              </button>
            </div>
          </div>
        )}
        {isExpanded && (
          <div className="p-6 flex flex-col gap-2 justify-between items-center text-center h-full">
            <div className="grow flex flex-col justify-evenly">
              <p className="font-impact text-3xl w-full text-contrast-on-sibling-hover">
                {title}
              </p>
              <div className="mt-2 w-full flex">
                <div className="w-1/2">
                  <p className="text-start text-lg">{longDescription}</p>
                  <br />
                  {githubUrl && (
                    <p className="text-start text-lg">
                      See project{" "}
                      <ExternalLink url={githubUrl} showLinkClasses>
                        here
                        <FaIcon
                          icon="fa-brands fa-github"
                          className="ml-2"
                          changeOnHover={false}
                        />
                      </ExternalLink>
                    </p>
                  )}
                </div>
                <div className="w-1/2 flex justify-end">
                  <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-[90%] h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-start mt-2">
              <button
                className="mt-2 w-fit text-xl py-2 px-6 bg-primary-dark rounded-xl font-bold text-dark-bg tracking-wider hover:bg-primary-contrast"
                type="button"
                onClick={() => setIsExpanded(false)}
              >
                <FaIcon
                  icon="fa-magnifying-glass-minus"
                  className="mr-2"
                  iconColor="var(--bg-color-dark)"
                  changeOnHover={false}
                ></FaIcon>
                Read less
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
