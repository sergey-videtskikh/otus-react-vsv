import { Cell } from "./Cell";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";

afterEach(cleanup);

describe("Cell", () => {
  test("calls onClick callback on click by cell", () => {
    const onClick = jest.fn();

    render(<Cell onClick={onClick} id={1} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
