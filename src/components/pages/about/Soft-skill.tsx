import React from "react";
import FaIcon from "../../basic-components/Fa-icon";

interface SoftSkillProps {
  title: string;
  icon: string;
}

const SoftSkill: React.FC<SoftSkillProps> = ({ title, icon }) => {
  return (
    <div className="flex flex-col gap-2 h-full">
      <FaIcon icon={icon} className="grow" changeOnHover={false} />
      <span className="font-impact">{title}</span>
    </div>
  );
};

export default SoftSkill;
