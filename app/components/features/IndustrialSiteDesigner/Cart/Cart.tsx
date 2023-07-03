'use client';

import { Accordion, VStack } from '@chakra-ui/react';
import { Suspense } from 'react';

import { TeslaHeading } from '@/app/components/common/heading/Heading';
import { PRODUCTS } from '@/app/utils/constants';

import { ProductCard } from '../ProductCard/ProductCard';

export const IndustrialSiteDesignerCart = () => {
  return (
    <Suspense>
      <VStack align="center">
        <TeslaHeading>Customize Your Site</TeslaHeading>
      </VStack>
      <Accordion bg="white" allowToggle borderY="transparent">
        {Object.values(PRODUCTS).map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </Accordion>
    </Suspense>
  );
};
