import { Flex } from '@chakra-ui/react';
import { throttle } from 'lodash';
import { useLayoutEffect, useMemo, useRef } from 'react';

import { useStore } from '@/app/lib/store';
import { drawChart } from '@/app/utils/2dVisualization';

export function SvgVisualization() {
  const ref = useRef(null);
  const state = useStore();

  const throttledDrawChart = useMemo(() => throttle(drawChart, 1_500), []);

  useLayoutEffect(() => {
    throttledDrawChart(state, ref);
  }, [state, throttledDrawChart]);

  return (
    <Flex w="0px">
      <div id="svg_target" ref={ref} />
    </Flex>
  );
}
