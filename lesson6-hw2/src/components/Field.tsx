import { Cell } from "./Cell";
import React from "react";

import "./Field.css";

type FiledProps = {
  cells: { id: number; active: boolean }[];
  onClick: (i: number) => void;
};

type FiledState = {};

export default class Field extends React.Component<FiledProps, FiledState> {
  renderCell(id: number, filled?: boolean) {
    return (
      <Cell id={id} active={filled} onClick={() => this.props.onClick(id)} />
    );
  }

  render() {
    const cells = this.props.cells;

    return (
      <div className="field">
        <div className="field-row">
          {this.renderCell(cells[0].id, cells[0].active)}
          {this.renderCell(cells[1].id, cells[1].active)}
          {this.renderCell(cells[2].id, cells[2].active)}
        </div>
        <div className="field-row">
          {this.renderCell(cells[3].id, cells[3].active)}
          {this.renderCell(cells[4].id, cells[4].active)}
          {this.renderCell(cells[5].id, cells[5].active)}
        </div>
        <div className="field-row">
          {this.renderCell(cells[6].id, cells[6].active)}
          {this.renderCell(cells[7].id, cells[7].active)}
          {this.renderCell(cells[8].id, cells[8].active)}
        </div>
      </div>
    );
  }
}
