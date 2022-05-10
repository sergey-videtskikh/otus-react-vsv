import { FC } from "react";
import './Cell.css';

type CellProps = {
  value?: string;
  onClick?: () => void;
};

export const Cell: FC<CellProps> = (props: CellProps) => {
  return (
    <button className="cell" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
