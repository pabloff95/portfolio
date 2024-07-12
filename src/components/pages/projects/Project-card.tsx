import React, { useState } from "react";
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

  return (
    <div>
      <div className="bg-dark-bg min-w-[300px] w-[25vw] rounded-xl shadow-box-primary shadow-contrast-on-hover-child">
        <div className="p-6 flex flex-col gap-2 justify-center items-center text-center">
          <button
            className="overflow-hidden w-full flex justify-center rounded-xl"
            onClick={() => setIsExpanded(!isExpanded)}
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
          <p className="text-start text-lg w-full">
            {isExpanded ? longDescription : shortDescription}
            {isExpanded && githubUrl && (
              <span className="w-full text-start">
                {" "}
                See project{" "}
                <ExternalLink url={githubUrl} showLinkClasses>
                  here
                  <FaIcon
                    icon="fa-brands fa-github"
                    className="ml-2"
                    changeOnHover={false}
                  />
                </ExternalLink>
              </span>
            )}
          </p>

          <button
            className="mt-2 w-full text-xl py-2 bg-primary-dark rounded-xl font-bold text-dark-bg tracking-wider hover:bg-primary-contrast"
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <FaIcon
              icon={
                isExpanded
                  ? "fa-magnifying-glass-minus"
                  : "fa-magnifying-glass-plus"
              }
              className="mr-2"
              iconColor="var(--bg-color-dark)"
              changeOnHover={false}
            ></FaIcon>
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
