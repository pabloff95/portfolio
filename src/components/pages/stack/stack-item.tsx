import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { useState, useEffect } from "react";

interface StackItemPropsInterface {
  src: string;
  name: string;
  level: number;
}

interface levelPaletteInterface {
  [key: string]: {
    limit: number;
    color: string;
  };
}

interface ProgressProviderPropsInterface {
  endValue: number;
  children: any;
}

const ProgressProvider: React.FC<ProgressProviderPropsInterface> = ({
  endValue,
  children,
}) => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setValue(endValue);
  }, [endValue]);

  return children(value);
};

const LEVEL_PALETTE: levelPaletteInterface = {
  goodLevel: {
    limit: 7,
    color: "#00FF00",
  },
  mediumLevel: {
    limit: 3,
    color: "#ffd32c",
  },
};

const StackItem: React.FC<StackItemPropsInterface> = ({ src, name, level }) => {
  const pathColor: string =
    level >= LEVEL_PALETTE.goodLevel.limit
      ? LEVEL_PALETTE.goodLevel.color
      : level >= LEVEL_PALETTE.mediumLevel.limit
      ? LEVEL_PALETTE.mediumLevel.color
      : "#ff7400"; // Low level default color

  return (
    <div className="basis-1/3 my-4">
      <div className="h-[20vh] m-auto aspect-square flex flex-col justify-center">
        <ProgressProvider endValue={level}>
          {(value: number) => (
            <CircularProgressbarWithChildren
              value={value}
              maxValue={10}
              circleRatio={0.75}
              strokeWidth={5}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                strokeLinecap: "round",
                trailColor: "var(--secondary-background)",
                pathColor,
                pathTransitionDuration: 1,
              })}
            >
              <img src={src} alt={name} className="h-1/2 img-shadow " />
              <span className="absolute bottom-0 font-impact text-center">
                {name}
              </span>
            </CircularProgressbarWithChildren>
          )}
        </ProgressProvider>
      </div>
    </div>
  );
};

export default StackItem;
