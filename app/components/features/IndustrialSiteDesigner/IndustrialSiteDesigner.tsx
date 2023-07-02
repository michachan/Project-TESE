'use client';

import { Box, Card, Flex } from '@chakra-ui/react';
import { Suspense } from 'react';

import { IndustrialSiteDesignerCart, IndustrialSiteDesignerHero } from './';
import { Totals } from './Totals';
import { Visualization } from './Visualization';

export function IndustrialSiteDesigner() {
  return (
    <Flex flexDir="column" bg="blackAlpha.100" flex={1}>
      <Suspense fallback={<></>}>
        <IndustrialSiteDesignerHero />
        <Flex flexDir="column" alignItems="center">
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            w="100%"
            maxW={1120}
            gap={4}
            my={3}
            px={3}
          >
            <Box flex={{ lg: '0 0 400px' }} h="100%">
              <Card>
                <IndustrialSiteDesignerCart />
              </Card>
            </Box>
            <Flex flex="1" flexDir="column" gap={2}>
              <Card p={4}>
                <Totals />
              </Card>
              <Card p={4}>
                <Visualization />
              </Card>
            </Flex>
          </Flex>
        </Flex>
      </Suspense>
    </Flex>
  );
}
