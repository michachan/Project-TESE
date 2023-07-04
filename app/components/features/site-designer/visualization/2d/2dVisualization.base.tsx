import { Box } from '@chakra-ui/react';

import { TwoDimensionalVisualizationBaseProps } from './2dVisualization.types';

export const TwoDimensionalVisualizationBase: React.FC<
  TwoDimensionalVisualizationBaseProps
> = ({ ref }) => {
  return (
    <Box w="0">
      <div id="svg_target" ref={ref} />
    </Box>
  );
};
