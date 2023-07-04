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
import { useState } from 'react';

import { TeslaHeading } from '@/app/components/common/heading/Heading';

import { CanvasVisualization } from './CanvasVisualization';
import { SvgVisualization } from './SvgVisualization';

export const Visualization = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const onTabChange = (index: number) => setTabIndex(index);

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
                {tabIndex === 0 ? <CanvasVisualization /> : null}
              </TabPanel>
              <TabPanel overflowY="scroll">
                {tabIndex === 1 ? <SvgVisualization /> : null}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Box>
    </VStack>
  );
};
