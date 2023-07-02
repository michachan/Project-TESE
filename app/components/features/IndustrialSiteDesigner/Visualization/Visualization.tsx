'use client';

import {
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
        Preview
      </Heading>
      <Container>
        <Stack spacing="16">
          <Tabs size="md" variant="indicator" alignSelf="center" w="100%">
            <TabList>
              <Tab flex="1">2D Preview</Tab>
              <Tab flex="1">3D Preview</Tab>
            </TabList>
            <TabIndicator />
            <TabPanels>
              <TabPanel>2D Preview</TabPanel>
              <TabPanel>3D Preview</TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Container>
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
