'use client';

import { Box, Flex } from '@chakra-ui/react';
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
            maxW="1120px"
            gap={4}
            my={3}
            px={3}
          >
            <Box flex={{ lg: '0 0 400px' }} h="100%">
              <IndustrialSiteDesignerCart />
            </Box>
            <Flex flex="1" flexDir="column" gap={2}>
              <Totals />
              <Visualization />
            </Flex>
          </Flex>
        </Flex>
      </Suspense>
    </Flex>
  );
}
