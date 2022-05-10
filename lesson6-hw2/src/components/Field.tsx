import { Cell } from "./Cell";
import React from "react";

import "./Field.css";

type FiledProps = {
  squares: string[];
  onClick: (i: number) => void;
};

type FiledState = {};

export default class Field extends React.Component<FiledProps, FiledState> {
  renderCell(i: number) {
    return (
      <Cell
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="field">
        <div className="field-row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>
        <div className="field-row">
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>
        <div className="field-row">
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
      </div>
    );
  }
}