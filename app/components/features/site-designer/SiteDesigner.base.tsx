'use client';

import { Box, Button, Card, Flex } from '@chakra-ui/react';
import { Suspense } from 'react';

import { SiteDesignerCart } from './cart';
import { SiteDesignerHero } from './hero';
import { SiteDesignerTotals } from './totals';
import { Visualization } from './visualization';

export const SiteDesignerBase = () => {
  return (
    <Flex flexDir="column" bg="blackAlpha.100" flex={1}>
      <Suspense>
        <SiteDesignerHero />
      </Suspense>
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
            <Card position="sticky" top={3} py={4} px="5px">
              <Suspense>
                <SiteDesignerCart />
              </Suspense>
            </Card>
          </Box>
          <Flex flex="1" flexDir="column" gap={2}>
            <Card p={4}>
              <SiteDesignerTotals />
            </Card>
            <Card p={4}>
              <Suspense>
                <Visualization />
              </Suspense>
              <Button
                variant="outline"
                borderWidth={3}
                _hover={{ bg: 'black', color: 'white', border: 'inherit' }}
                transitionDuration="0.4s"
              >
                Order with Card
              </Button>
            </Card>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
