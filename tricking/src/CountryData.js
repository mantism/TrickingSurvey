import _ from 'lodash';
import { scaleLinear } from 'd3-scale';
import trickerCountries from './data/trickerCountries.json';

const countries = trickerCountries;

const countriesOnlyValues = _.map(countries, (country) => {
    return country.numTrickers;
});                         
export const minValue = Math.min.apply(null, countriesOnlyValues);
export const maxValue = 31;
                         
export const palleteScale = scaleLinear()
                         .domain([minValue, maxValue])
                         .range(['#0584ba','#cd853f']);

