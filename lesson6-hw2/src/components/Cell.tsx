import { FC } from "react";

import "./Cell.css";

type CellProps = {
  id: number;
  active?: boolean;
  onClick: () => void;
};

export const Cell: FC<CellProps> = ({
  id,
  active = false,
  onClick,
}: CellProps) => {
  const styleSelected = active ? " selected" : "";
  return (
    <button className={"cell" + styleSelected} onClick={onClick}>
      {id}
    </button>
  );
};
