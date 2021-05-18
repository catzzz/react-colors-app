import React, { Component } from "react";
import { SortableContainer } from "react-sortable-hoc";
import DragableColorBox from './DragableColorBox';

class DragableColorList extends Component {

  render() {
      const {colors,removeColor} = this.props
    return (
      <div style={{height:"100%"}}>
        {colors.map((color,i) => (
          <DragableColorBox
          index = {i}
            key={color.name}
            color={color.color}
            name={color.name}
            handleClick={() => removeColor(color.name)}
          />
        ))}
      </div>
    );
  }
}

export default SortableContainer(DragableColorList);
