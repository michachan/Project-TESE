import { SVG } from '@svgdotjs/svg.js';
import * as d3 from 'd3';
import { throttle } from 'lodash';
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';

import { useStore } from '@/app/lib/store';
import { drawChart } from '@/app/utils/2dVisualization';
import { greedyBalancing } from '@/app/utils/greedyBalancing';

export function SvgVisualization() {
  const ref = useRef(null);
  const state = useStore();

  const throttledDrawChart = useMemo(() => throttle(drawChart, 1_500), []);

  useLayoutEffect(() => {
    throttledDrawChart(state, ref);
  }, [state, throttledDrawChart]);

  return <div id="svg_target" ref={ref} />;
}
