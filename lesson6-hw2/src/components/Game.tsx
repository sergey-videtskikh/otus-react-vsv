import React from "react";
import Field from "./Field";
import { StatusInfo } from "./StatusInfo";

type GameProps = {};

type GamedState = {
  cells: { id: number; active: boolean }[];
  clickedId?: number;
};

export default class Game extends React.Component<GameProps, GamedState> {
  constructor(props: Readonly<GameProps> | GameProps) {
    super(props);
    this.state = {
      cells: [
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
        { id: 6, active: false },
        { id: 7, active: false },
        { id: 8, active: false },
        { id: 9, active: false },
      ],
    };
  }

  handleClick(i: number) {
    const cells = this.state.cells.slice();
    const id = i - 1;
    cells[id] = {
      id: cells[id].id,
      active: !cells[id].active,
    };

    this.setState({
      cells,
      clickedId: i,
    });
  }

  render() {
    return (
      <div className="game">
        <div className="game-field">
          <Field
            onClick={(i) => this.handleClick(i)}
            cells={this.state.cells}
          />
        </div>
        <div className="game-info">
          <StatusInfo value={this.state.clickedId} />
        </div>
      </div>
    );
  }
}
