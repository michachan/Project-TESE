import { Accordion } from '@chakra-ui/react';
import { Suspense } from 'react';

import { PRODUCTS } from '@/app/utils/constants';

import { ProductCard } from '../ProductCard/ProductCard';

export const IndustrialSiteDesignerCart = () => {
  return (
    <Suspense>
      <Accordion bg="white" allowToggle>
        {Object.values(PRODUCTS).map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </Accordion>
    </Suspense>
  );
};
