import React from "react";
import Field from "./Field";

export default {
  component: Field,
  title: "Field",
};

export const FiledWithCellFrom1To9 = () => (
  <Field
    onClick={(i) => console.log("Click on cell with value = " + i)}
    squares={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
  />
);

export const FiledWithEmptyCell = () => (
  <Field
    onClick={(i) => console.log("Click on cell with value = " + i)}
    squares={Array(9).fill(null)}
  />
);