import TimeLineItem, { TimeLineItemProps } from "./Time-line-item";

interface TimeLineProps {
  events: TimeLineItemProps[];
}

const TimeLine: React.FC<TimeLineProps> = ({ events }) => {
  return (
    <ol className="relative border-s-4 border-font-base">
      {events?.length > 0 &&
        events.map((event, index) => {
          return <TimeLineItem {...event} key={`time-line-item-${index}`} />;
        })}
    </ol>
  );
};

export default TimeLine;
