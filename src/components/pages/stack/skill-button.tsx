import FaIcon from "../../basic-components/Fa-icon";
import { StackInterface } from "../../../pages/Stack";

interface SkillButtonProps {
  name: string;
  icon: string;
  handleButtonClick: any;
  selectedStack: StackInterface | null;
}

const SkillButton: React.FC<SkillButtonProps> = ({
  name,
  icon,
  handleButtonClick,
  selectedStack,
}) => {
  const isStackSelected: boolean = selectedStack?.name === name;
  const isAnyStackSelected: boolean = !!selectedStack;

  if (isAnyStackSelected) {
    return (
      <button type="button" onClick={handleButtonClick}>
        <div
          className={`border-2 rounded-sm min-w-[10vw] flex gap-2 items-center justify-center ${
            isStackSelected
              ? "bg-primary-contrast border-primary-contrast"
              : "bg-secondary-background"
          } p-4 ease-in-out duration-500`}
        >
          <div className="h-6">
            <FaIcon
              icon={`fa-${icon}`}
              className="h-full"
              changeOnHover={false}
            />
          </div>
          <span className="font-impact">{name}</span>
        </div>
      </button>
    );
  }

  return (
    <div>
      <div className="min-w-[18vw] flex flex-col gap-4 items-center bg-secondary-background border-b-4 border-b-primary-dark rounded-t-md justify-center p-6 transition ease-in-out duration-500 shadow-black-85">
        <span className="font-impact text-3xl">{name}</span>
        <div className="h-[15vh] aspect-square p-6">
          <FaIcon
            icon={`fa-${icon}`}
            className="h-full"
            changeOnHover={false}
          />
        </div>
        <button
          type="button"
          onClick={handleButtonClick}
          className="w-full font-impact bg-primary hover:bg-primary-contrast py-2 text-secondary-background text-lg font-bold rounded-sm"
        >
          SHOW MORE
        </button>
      </div>
    </div>
  );
};

export default SkillButton;
