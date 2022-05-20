import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";

import Field from "./Field";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

afterEach(cleanup);

describe("Field", () => {
  it("renders filled cells", () => {
    render(
      <Field
        cells={[
          { id: 1, active: false },
          { id: 2, active: false },
          { id: 3, active: false },
          { id: 4, active: false },
          { id: 5, active: false },
          { id: 6, active: false },
          { id: 7, active: false },
          { id: 8, active: false },
          { id: 9, active: true },
        ]}
        onClick={jest.fn()}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });
  it("passed onClick inside cells", () => {
    const onClick = jest.fn();

    render(
      <Field
        cells={[
          { id: 1, active: false },
          { id: 2, active: false },
          { id: 3, active: false },
          { id: 4, active: false },
          { id: 5, active: false },
          { id: 6, active: false },
          { id: 7, active: false },
          { id: 8, active: false },
          { id: 9, active: true },
        ]}
        onClick={onClick}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "2" }));
    expect(onClick).toHaveBeenCalledWith(2);
  });
});
