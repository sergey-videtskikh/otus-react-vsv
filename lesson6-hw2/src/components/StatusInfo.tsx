import { FC } from "react";
import './Cell.css';

type StatusInfoProps = {
  value?: number;
  onClick?: () => void;
};

export const StatusInfo: FC<StatusInfoProps> = (props: StatusInfoProps) => {
  return (
    <div className="status-info">
      Клик по квадртау: {props.value}
    </div>
  );
};
