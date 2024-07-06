import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import { library, IconProp } from "@fortawesome/fontawesome-svg-core";

interface FaIconProps {
  icon: string;
  className?: string;
  iconColor?: string;
}

const iconList: IconDefinition[] = [faGithub, faLinkedin, faExpand, faCompress];

library.add(...iconList);

const FaIcon: React.FC<FaIconProps> = ({
  icon,
  className,
  iconColor = "var(--text-color)",
}) => {
  return (
    <FontAwesomeIcon
      icon={icon as IconProp}
      className={className}
      style={{ color: iconColor }}
    />
  );
};

export default FaIcon;
