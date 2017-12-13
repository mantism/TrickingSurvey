import { scaleLinear } from 'd3-scale';

export const palleteScale = (minValue, maxValue) => { 
  return scaleLinear().domain([minValue, maxValue]).range(['#0584ba','#cd853f'])
};
export const hoursRank = {
  "0-1" : 1,
  "1-2" : 2,
  "2-4" : 3,
  "4-6" : 4,
  "6-8" : 5,
  "8-10" : 6,
  "10-12" : 7,
}

export const yearsRank = {
  "0-1" : 1,
  "1-3" : 2,
  "3-5" : 3,
  "6-8" : 4,
  "9+" : 5
}

export const gatherRank = {
  "0": 1,
  "1-5": 2,
  "6-10": 3,
  "10+": 4,
  "20+": 5,
}