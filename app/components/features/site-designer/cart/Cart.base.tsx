'use client';

import { Accordion, VStack } from '@chakra-ui/react';
import { Suspense } from 'react';

import { TeslaHeading } from '@/app/components/common/heading';
import { PRODUCTS } from '@/app/utils/constants';

import { ProductCard } from '../product-card';

export const SiteDesignerCartBase = () => {
  return (
    <Suspense>
      <VStack align="center">
        <TeslaHeading>Pick Your Devices</TeslaHeading>
      </VStack>
      <Accordion bg="white" allowToggle borderY="transparent">
        {Object.values(PRODUCTS).map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </Accordion>
    </Suspense>
  );
};
