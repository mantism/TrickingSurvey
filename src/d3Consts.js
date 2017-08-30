import _ from 'lodash';
import { scaleLinear } from 'd3-scale';
                         
export const palleteScale = scaleLinear()
                         .domain([minValue, maxValue])
                         .range(['#0584ba','#cd853f']);




