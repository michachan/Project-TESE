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

export const Visualization = () => {
  return (
    <VStack justifyContent="center">
      <Heading fontSize="2xl" fontWeight={500}>
        Preview Selection
      </Heading>
      <Box w="100%">
        <Stack spacing="16">
          <Tabs size="md" variant="indicator" alignSelf="center" w="100%">
            <TabList>
              <Tab flex="1">Preview in 2D</Tab>
              <Tab flex="1">Preview in 3D</Tab>
            </TabList>
            <TabIndicator />
            <TabPanels>
              <TabPanel>2D Preview</TabPanel>
              <TabPanel>3D Preview</TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Box>
    </VStack>
    // <Container py={{ base: '12', md: '16' }}>
    //   <Stack spacing="16">
    //     <Tabs size="sm" variant="indicator">
    //       <TabList>
    //         <Tab>Home</Tab>
    //         <Tab>Components</Tab>
    //         <Tab>Pricing</Tab>
    //       </TabList>
    //       <TabIndicator />
    //       <TabPanels>
    //         <TabPanel>grid</TabPanel>
    //         <TabPanel>grid2</TabPanel>
    //         <TabPanel>grid3</TabPanel>
    //       </TabPanels>
    //     </Tabs>
    //   </Stack>
    // </Container>
  );
};
