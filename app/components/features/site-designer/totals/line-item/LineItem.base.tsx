import { Td, Tr } from '@chakra-ui/react';

import { PRODUCT_NAMES } from '@/app/utils/constants';
import {
  calculateRequiredSpace,
  formatRequiredSpace,
} from '@/app/utils/productConversions';

import { LineItemBaseProps } from './LineItem.types';

export const LineItemBase: React.FC<LineItemBaseProps> = ({
  product,
  count,
}) => (
  <Tr
    key={product.name}
    h={count ? 'auto' : 0}
    opacity={count ? 1 : 0}
    visibility={count ? 'visible' : 'collapse'}
    transition="opacity 0.5s ease-in-out, visibility 0.5s linear"
  >
    <Td>
      {count.toLocaleString()} {product.name}
      {product.name === PRODUCT_NAMES.TRANSFORMER ? ' *' : ''}
    </Td>
    <Td>{(count * product.energy).toLocaleString()} MWh</Td>
    <Td>{formatRequiredSpace(calculateRequiredSpace(product, count), true)}</Td>
    <Td textAlign="right">${(count * product.cost).toLocaleString()}</Td>
  </Tr>
);
