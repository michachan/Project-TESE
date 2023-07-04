import {
  Flex,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';

import { TeslaHeading } from '@/app/components/common/heading';
import { PRODUCTS } from '@/app/utils/constants';
import { formatRequiredSpace } from '@/app/utils/productConversions';

import { LineItem } from './line-item';
import { SiteDesignerTotalsBaseProps } from './Totals.types';

export const SiteDesignerTotalsBase: React.FC<SiteDesignerTotalsBaseProps> = ({
  totalMWh,
  totalCost,
  totalBatteries,
  itemCounts,
  requiredSpace,
}) => (
  <Flex bg="white" flexDir="column" alignItems="center">
    <TeslaHeading>Selection Details</TeslaHeading>

    <HStack justify="space-between" mt={3} w="80%" maxW="320px">
      <VStack gap={0}>
        <TeslaHeading color="#3a3c42">
          {Math.round(totalMWh).toLocaleString()} MWh
        </TeslaHeading>
        <Text fontSize="xs" color="#5c5e62">
          Energy
        </Text>
      </VStack>
      <VStack gap={0}>
        <TeslaHeading color="#3a3c42">
          {totalBatteries.toLocaleString()}
        </TeslaHeading>
        <Text fontSize="xs" color="#5c5e62">
          Batteries
        </Text>
      </VStack>
    </HStack>

    <TableContainer w="100%" mt={5} transition="height 0.5s linear">
      <Table variant="unstyled" size="sm">
        <TableCaption>
          * For every 4 industrial batteries bought, 1 transformer is needed
        </TableCaption>
        <Thead>
          <Tr>
            <Th w={200}>Product</Th>
            <Th w={150}>Energy</Th>
            <Th>Land Dimension (ft)</Th>
            <Th textAlign="right">Cost</Th>
          </Tr>
        </Thead>
        <Tbody>
          {itemCounts.map(([productName, count]) => (
            <LineItem
              key={productName}
              product={PRODUCTS[productName]}
              count={count}
            />
          ))}
        </Tbody>
        <Tfoot borderTop="1px solid #d0d1d2">
          <Tr fontWeight="semibold">
            <Td>Your Site Build</Td>
            <Td>{totalMWh.toLocaleString()} MWh</Td>
            <Td>{formatRequiredSpace(requiredSpace)}</Td>
            <Td textAlign="right">${totalCost.toLocaleString()}</Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  </Flex>
);
