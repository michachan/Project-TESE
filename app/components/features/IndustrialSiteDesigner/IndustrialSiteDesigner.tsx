'use client';

import { Box, Flex } from '@chakra-ui/react';
import { Suspense } from 'react';

import { IndustrialSiteDesignerCart } from './Cart';
import { IndustrialSiteDesignerHero } from './Hero';
import { Totals } from './Totals';
import { Visualization } from './Visualization';

export function IndustrialSiteDesigner() {
  return (
    <Flex flexDir="column" bg="blackAlpha.100">
      <Suspense fallback={<></>}>
        <IndustrialSiteDesignerHero />
        <Flex flexDir={{ base: 'column', md: 'row' }} gap={4} m={3}>
          <Box flex={{ md: '0 0 400px' }} h="100%">
            <IndustrialSiteDesignerCart />
          </Box>
          <Flex flex={2} flexDir="column" gap={2}>
            <Totals />
            <Visualization />
          </Flex>
        </Flex>
      </Suspense>
    </Flex>
  );
}
