import React from "react";
import FaIcon from "../../basic-components/Fa-icon";

interface SoftSkillProps {
  title: string;
  icon: string;
}

const SoftSkill: React.FC<SoftSkillProps> = ({ title, icon }) => {
  return (
    <div className="flex flex-col align-center gap-2 h-full text-center text-md md:text-lg">
      <FaIcon icon={icon} className="h-[5vh]" changeOnHover={false} />
      <span className="font-impact">{title}</span>
    </div>
  );
};

export default SoftSkill;
