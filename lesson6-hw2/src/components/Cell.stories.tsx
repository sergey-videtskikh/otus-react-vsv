import React from "react";

import { Cell } from "./Cell";

export default {
  component: Cell,
  title: "Game/Cell",
};

export const Index1Filled = () => (
  <Cell id={1} active={true} onClick={() => {}} />
);

export const Index13 = () => <Cell id={13} active={false} onClick={() => {}} />;
