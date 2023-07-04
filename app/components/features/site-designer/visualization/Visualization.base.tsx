'use client';

import {
  Box,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';

import { TeslaHeading } from '@/app/components/common/heading';

import { TwoDimensionalVisualization } from './2d';
import { ThreeDimensionalVisualization } from './3d';
import { VisualizationBaseProps } from './Visualization.types';

export const VisualizationBase: React.FC<VisualizationBaseProps> = ({
  tabIndex,
  onTabChange,
}) => {
  return (
    <VStack justifyContent="center">
      <TeslaHeading>Preview Selection</TeslaHeading>
      <Box w="100%">
        <Stack spacing="16">
          <Tabs
            onChange={onTabChange}
            size="md"
            variant="indicator"
            alignSelf="center"
            w="100%"
          >
            <TabList>
              <Tab flex="1">Preview in 3D</Tab>
              <Tab flex="1">Preview in 2D</Tab>
            </TabList>
            <TabIndicator />
            <TabPanels>
              <TabPanel>
                {tabIndex === 0 ? <ThreeDimensionalVisualization /> : null}
              </TabPanel>
              <TabPanel overflowY="scroll">
                {tabIndex === 1 ? <TwoDimensionalVisualization /> : null}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Box>
    </VStack>
  );
};
