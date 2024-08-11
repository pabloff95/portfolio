import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExpand,
  faCompress,
  faPeopleGroup,
  faGears,
  faClock,
  faLightbulb,
  faRotate,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  faFileSignature,
  faEnvelopeCircleCheck,
  faHourglassHalf,
  faArrowUpRightFromSquare,
  faMapLocation,
  faMoon,
  faSun,
  faDesktop,
  faDatabase,
  faCode,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { library, IconProp } from "@fortawesome/fontawesome-svg-core";

interface FaIconProps {
  icon: string;
  className?: string;
  iconColor?: string;
  changeOnHover?: boolean;
}

const iconList: IconDefinition[] = [
  faGithub,
  faLinkedin,
  faExpand,
  faCompress,
  faPeopleGroup,
  faGears,
  faClock,
  faLightbulb,
  faRotate,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  faFileSignature,
  faEnvelopeCircleCheck,
  faHourglassHalf,
  faArrowUpRightFromSquare,
  faMapLocation,
  faMoon,
  faSun,
  faDesktop,
  faDatabase,
  faCode,
  faXmark,
];

library.add(...iconList);

const FaIcon: React.FC<FaIconProps> = ({
  icon,
  className,
  iconColor = "var(--text-color)",
  changeOnHover = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverColor: string = "var(--primary-element-contrast)";

  return (
    <FontAwesomeIcon
      icon={icon as IconProp}
      className={className}
      style={{ color: isHovered ? hoverColor : iconColor }}
      onMouseEnter={(): void => {
        if (changeOnHover) setIsHovered(true);
      }}
      onMouseLeave={(): void => setIsHovered(false)}
    />
  );
};

export default FaIcon;
