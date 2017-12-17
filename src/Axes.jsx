import React from 'react';
import Axis from './Axis';

const Axes = ({scales, margins, svgHeight, svgWidth, xLabel, yLabel, theme}) => {
  const height = svgHeight;
  const width = svgWidth;

  const xProps = {
    orient: 'Bottom',
    scale: scales.xScale,
    translate: `translate(0, ${height - margins.bottom})`,
    tickSize: height - margins.top - margins.bottom,
    label: xLabel,
    transformLabel: `translate(${width / 2 - margins.left / 2}, ${height - margins.bottom / 2})`,
    theme
  }

  const yProps = {
    orient: 'Left',
    scale: scales.yScale,
    translate: `translate(${margins.left}, 0)`,
    tickSize: width - margins.left - margins.right,
    label: yLabel,
    transformLabel: `translate(${margins.left / 3}, ${height / 2 - margins.bottom / 2}) rotate(-90 20,40)`,
    theme
  }

  return (
    <g>
      <Axis {...xProps}/>
      <Axis {...yProps}/>
    </g>
  )
}

export default Axes;