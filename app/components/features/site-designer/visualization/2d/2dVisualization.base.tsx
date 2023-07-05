import { Box } from '@chakra-ui/react';
import { forwardRef } from 'react';

export const TwoDimensionalVisualizationBase = forwardRef<HTMLDivElement>(
  (_, ref) => (
    <Box w="0">
      <div id="svg_target" ref={ref} />
    </Box>
  )
);

TwoDimensionalVisualizationBase.displayName = 'TwoDimensionalVisualizationBase';
