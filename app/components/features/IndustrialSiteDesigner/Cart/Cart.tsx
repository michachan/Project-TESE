import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Suspense } from 'react';

import { PRODUCT_NAMES, PRODUCTS } from '@/app/utils/constants';

import { ProductCard } from '../ProductCard/ProductCard';

export const IndustrialSiteDesignerCart = () => {
  return (
    <Suspense fallback={<></>}>
      <Accordion bg="white" allowToggle>
        {Object.values(PRODUCTS).map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </Accordion>
    </Suspense>
  );
};
