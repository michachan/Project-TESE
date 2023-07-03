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

import { TeslaHeading } from '@/app/components/common/heading/Heading';

import { SvgVisualization } from './SvgVisualization';

export const Visualization = () => {
  return (
    <VStack justifyContent="center">
      <TeslaHeading>Preview Selection</TeslaHeading>
      <Box w="100%">
        <Stack spacing="16">
          <Tabs size="md" variant="indicator" alignSelf="center" w="100%">
            <TabList>
              <Tab flex="1">Preview in 2D</Tab>
              <Tab flex="1">Preview in 3D</Tab>
            </TabList>
            <TabIndicator />
            <TabPanels>
              <TabPanel overflowY="scroll">
                <SvgVisualization />
              </TabPanel>
              <TabPanel>3D Preview</TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Box>
    </VStack>
  );
};
