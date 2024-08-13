import { useState } from "react";
import FaIcon from "../../basic-components/Fa-icon";
import ExternalLink from "../../basic-components/External-link";

export interface TimeLineItemProps {
  title: string;
  from: string;
  to: string;
  shortText: string;
  longText?: string;
  location: string;
  place: string;
  placeUrl?: string;
  isSortVersion?: boolean;
}

const TimeLineItem: React.FC<TimeLineItemProps> = ({
  title,
  location,
  from,
  to,
  shortText,
  longText,
  place,
  placeUrl,
  isSortVersion,
}) => {
  const [displayLongText, setDisplayLongText] = useState<boolean>(false);

  const dateRange: string = `${from} - ${to}`;
  const dateStyle = {
    width: `${dateRange.length * 1.5}ch`,
    left: `-${dateRange.length * (isSortVersion ? 2 : 1.85)}ch`,
  };

  const longTextHTML = { __html: `<p>${longText}</p>` };

  return (
    <li className="my-6 ml-6">
      <div className="relative">
        <p className="top-1 font-bold absolute text-end" style={dateStyle}>
          {dateRange}
        </p>
      </div>
      {!isSortVersion && (
        <>
          <div className="flex">
            <div>
              <h1 className="text-2xl font-semibold">{title}</h1>
              <p className="text-lg opacity-85">
                {place}
                {placeUrl && (
                  <ExternalLink url={placeUrl} className="ml-2">
                    <FaIcon
                      iconColor="var(--font-color)"
                      icon="fa-arrow-up-right-from-square"
                    ></FaIcon>
                  </ExternalLink>
                )}{" "}
                | {location}
              </p>
            </div>
            <div className="absolute w-5 h-5 border-4 border-font-base bg-primary-background rounded-full mt-1.5 -start-[0.75rem]"></div>
          </div>
          {displayLongText && (
            <div className="paragraph" dangerouslySetInnerHTML={longTextHTML} />
          )}
          {!displayLongText && <p className="paragraph">{shortText}</p>}
          <button
            className="py-0.5 px-2 bg-primary-dark rounded font-bold text-secondary-background tracking-wider hover:bg-primary-contrast"
            type="button"
            onClick={() => setDisplayLongText(!displayLongText)}
          >
            <FaIcon
              icon={
                displayLongText
                  ? "fa-magnifying-glass-minus"
                  : "fa-magnifying-glass-plus"
              }
              className="mr-2"
              iconColor="var(--dark-font-base)"
              changeOnHover={false}
            ></FaIcon>
            {displayLongText ? "Read less" : "Read more"}
          </button>
        </>
      )}
      {isSortVersion && (
        <>
          <div className="flex">
            <div>
              <h1 className="text-2xl font-semibold">{title}</h1>
            </div>
            <div className="absolute w-5 h-5 border-4 border-font-base bg-primary-background rounded-full mt-1.5 -start-[0.75rem]"></div>
          </div>
          <p className="paragraph my-0">{shortText}</p>
          <p className="text-lg opacity-85">
            {place} | {location}
          </p>
        </>
      )}
    </li>
  );
};

export default TimeLineItem;
