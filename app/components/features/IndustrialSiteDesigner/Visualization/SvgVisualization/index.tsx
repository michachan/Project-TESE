import { SVG } from '@svgdotjs/svg.js';
import * as d3 from 'd3';
import { useEffect, useLayoutEffect, useRef } from 'react';

import { useStore } from '@/app/lib/store';
import { greedyBalancing } from '@/app/utils/greedyBalancing';

export function SvgVisualization() {
  const ref = useRef(null);
  const state = useStore();

  const { maxLength, flattenedPlots } = greedyBalancing(state, 10, 100);

  const drawChart = () => {
    const width = 640;
    const height = 400;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;
    const data = [
      { name: '1', data: [1, 2, 3, 4] },
      { name: '2', data: [1, 2, 3, 5] },
    ];
    const colourScale = ['red', 'blue', 'yellow', 'pink', 'black'];

    d3.select(ref.current).selectAll('*').remove();

    const svg = d3
      .select(ref.current)
      .append('svg')
      .attr('width', width + marginLeft + marginRight)
      .attr('height', height + marginBottom + marginTop)
      .append('g')
      .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

    const x = d3.scaleLinear().range([0, width]).domain([0, 100]);
    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([Math.max(maxLength, 100), 0]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    svg
      .selectAll('rect')
      .data(flattenedPlots)
      .enter()
      .append('g')
      .append('rect')
      .attr('x', (d) => {
        console.log(d.plot.x);
        return d.plot.x * 64;
      })
      .attr('y', (d) => {
        console.log('d.plot.y');
        console.log(d.plot.y);
        return d.plot.y;
      })
      .attr('width', 10 * (width / 100) - 8)
      .attr('height', (d) => d.dimensions.length * 1)
      .attr('fill', (d) => d.plot.color)
      .style('border', '1px solid black');

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);
  };

  useLayoutEffect(() => {
    drawChart();
  }, [flattenedPlots]);

  return <div id="svg_target" ref={ref} />;
}
