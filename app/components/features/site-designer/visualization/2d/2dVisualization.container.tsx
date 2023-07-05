import { throttle } from 'lodash';
import { useLayoutEffect, useMemo, useRef } from 'react';

import { useStore } from '@/app/lib/store';
import { drawChart } from '@/app/utils/2dVisualization';

import { TwoDimensionalVisualizationBase } from './2dVisualization.base';

export const TwoDimensionalVisualizationContainer = () => {
  const targetRef = useRef(null);
  const state = useStore();

  const throttledDrawChart = useMemo(() => throttle(drawChart, 1_500), []);

  useLayoutEffect(() => {
    throttledDrawChart(state, targetRef);
  }, [state, throttledDrawChart]);

  return <TwoDimensionalVisualizationBase ref={targetRef} />;
};
