'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
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
import { useStore } from '@/app/lib/store';

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
              <TabPanel>
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
