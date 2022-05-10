import React from 'react';

import { Cell } from "./Cell";

export default {
  component: Cell,
  title: 'Cell',
};

export const With1 = () => (
  <Cell value={"1"}/>
)

export const With13 = () => (
  <Cell value={"13"}/>
)