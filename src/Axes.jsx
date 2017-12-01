import React from 'react';
import Axis from './Axis';

const Axes = ({scales, margins, svgHeight, svgWidth, xLabel, yLabel}) => {
  const height = svgHeight;
  const width = svgWidth;

  const xProps = {
    orient: 'Bottom',
    scale: scales.xScale,
    translate: `translate(0, ${height - margins.bottom})`,
    tickSize: height - margins.top - margins.bottom,
    label: xLabel,
  }

  const yProps = {
    orient: 'Left',
    scale: scales.yScale,
    translate: `translate(${margins.left}, 0)`,
    tickSize: width - margins.left - margins.right,
    label: yLabel
  }

  return (
    <g>
      <Axis {...xProps}/>
      <Axis {...yProps}/>
    </g>
  )
}

export default Axes;