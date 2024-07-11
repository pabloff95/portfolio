import React, { useState } from "react";
import FaIcon from "../../basic-components/Fa-icon";

interface BackgroundCardProps {
  title: string;
  degreeType?: string;
  place: string;
  from: string;
  fromLong?: string;
  to: string;
  toLong?: string;
  isExpandable?: boolean;
  children?: any;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({
  title,
  degreeType,
  place,
  from,
  to,
  isExpandable = false,
  fromLong,
  toLong,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full text-lg bg-dark-bg p-4 rounded-2xl shadow-box-primary shadow-contrast-on-hover-child">
      <div className="flex items-center gap-6 ">
        {(!isExpandable || (isExpandable && !isExpanded)) && (
          <>
            <section className="flex flex-col justify-between items-center self-stretch">
              <span className="font-bold">{from}</span>
              <span className="w-0.5 h-full bg-font-base"></span>
              <span className="font-bold">{to}</span>
            </section>
            <div className="w-0.5 bg-font-base rounded-lg self-stretch"></div>
          </>
        )}
        <section className="grow">
          <p className="text-2xl font-bold">{title}</p>
          <p className="opacity-90">{degreeType}</p>
          <p className="opacity-90">{place}</p>
          {isExpandable && !isExpanded && (
            <div className="w-full flex justify-start">
              <button
                className="py-0.5 px-2 mt-2 bg-primary-dark rounded text-sm font-bold text-dark-bg tracking-wider hover:bg-primary-contrast"
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
          )}
          {isExpandable && isExpanded && (
            <div className="opacity-90">{`${fromLong} - ${toLong}`}</div>
          )}
        </section>
      </div>
      {isExpandable && isExpanded && (
        <div>
          {children}
          <button
            className="py-0.5 px-2 mt-2 bg-primary-dark rounded text-sm font-bold text-dark-bg tracking-wider hover:bg-primary-contrast"
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
      )}
    </div>
  );
};

export default BackgroundCard;
