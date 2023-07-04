import * as d3 from 'd3';
import { MutableRefObject } from 'react';

import { Store } from '../lib/store';
import { balanceItemsGreedy } from './balanceItemsGreedy';

/**
 * Inefficient
 * @param state
 */
export const drawChart = (state: Store, ref: MutableRefObject<null>) => {
  const { maxLength, flattenedPlots } = balanceItemsGreedy(state, 10, 100);

  const width = 550;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;
  const rangeMax = Math.max(maxLength, 100) + 50;

  d3.select(ref.current).selectAll('*').remove();

  const svg = d3
    .select(ref.current)
    .append('svg')
    .attr('width', width + marginLeft + marginRight)
    .attr('height', height + marginBottom + marginTop)
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

  const x = d3.scaleLinear().range([0, width]).domain([0, 100]);
  const y = d3.scaleLinear().range([height, 0]).domain([rangeMax, 0]);

  const xAxis = d3.axisTop(x);
  const yAxis = d3.axisLeft(y);

  svg
    .selectAll('rect')
    .data(flattenedPlots)
    .enter()
    .append('g')
    .append('rect')
    .attr('x', (d) => d.plot.x * (width / d.dimensions.width) + 2)
    .attr('y', (d) => d.plot.y * 10 * (height / rangeMax))
    .attr('width', 10 * (width / 100) - 4)
    .attr('height', (d) => d.dimensions.length * (height / rangeMax))
    .attr('fill', (d) => d.plot.color)
    .style('stroke', 'black')
    .style('stroke-width', 1)
    .style('border', '1px solid black');

  svg.append('g').call(xAxis);
  svg.append('g').call(yAxis);
};
