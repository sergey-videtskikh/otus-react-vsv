import React from "react";
import { StatusInfo } from "./StatusInfo";

export default {
  component: StatusInfo,
  title: "Game/StatusInfo",
};

export const With1 = () => <StatusInfo value={1} />;

export const With100 = () => <StatusInfo value={100} />;

export const Empty = () => <StatusInfo />;
