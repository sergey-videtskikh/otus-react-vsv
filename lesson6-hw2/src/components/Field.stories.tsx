import React from "react";
import Field from "./Field";

export default {
  component: Field,
  title: "Game/Field",
};

export const FiledWithCellFrom1To9 = () => (
  <Field
    onClick={(i) => console.log("Click on cell with value = " + i)}
    cells={[
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true },
      { id: 4, active: false },
      { id: 5, active: false },
      { id: 6, active: false },
      { id: 7, active: false },
      { id: 8, active: false },
      { id: 9, active: true },
    ]}
  />
);
