import {
  Flex,
  Heading,
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

import { useStore } from '@/app/lib/store';
import { PRODUCT_NAMES, PRODUCTS } from '@/app/utils/constants';
import {
  calculateMWhAndCost,
  calculateRequiredSpace,
  calculateSiteArea,
  calculateTotalBatteries,
  formatRequiredSpace,
  parseItemCounts,
} from '@/app/utils/productConversions';

export const Totals = () => {
  const state = useStore();
  const [totalMWh, totalCost] = calculateMWhAndCost(state);

  return (
    <Flex bg="white" flexDir="column">
      <Heading fontWeight={500} fontSize="2xl" p={3} alignSelf="center">
        Selection Details
      </Heading>

      <HStack justify="center" gap={40} mt={3}>
        <VStack gap={0}>
          <Text fontSize="3xl" fontWeight={500} lineHeight={10}>
            {totalMWh.toLocaleString()} MWh
          </Text>
          <Text fontSize="xs" color="#5c5e62">
            Energy
          </Text>
        </VStack>
        <VStack gap={0}>
          <Text fontSize="3xl" fontWeight={500} lineHeight={10}>
            {calculateTotalBatteries(state).toLocaleString()}
          </Text>
          <Text fontSize="xs" color="#5c5e62">
            Batteries
          </Text>
        </VStack>
      </HStack>

      <TableContainer w="100%" mt={5}>
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
            {parseItemCounts(state)
              .filter((item) => item[1])
              .map(([productName, count]) => {
                const product = PRODUCTS[productName];
                return (
                  <Tr key={productName}>
                    <Td>
                      {count.toLocaleString()} {productName}
                      {productName === PRODUCT_NAMES.TRANSFORMER ? ' *' : ''}
                    </Td>
                    <Td>{(count * product.energy).toLocaleString()} MWh</Td>
                    <Td>
                      {formatRequiredSpace(
                        calculateRequiredSpace(product, count),
                        true
                      )}
                    </Td>
                    <Td textAlign="right">
                      ${(count * product.cost).toLocaleString()}
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
          <Tfoot borderTop="1px solid #d0d1d2">
            <Tr fontWeight="semibold">
              <Td>Your Site Build</Td>
              <Td>{totalMWh.toLocaleString()} MWh</Td>
              <Td>{formatRequiredSpace(calculateSiteArea(state))}</Td>
              <Td textAlign="right">${totalCost.toLocaleString()}</Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Flex>
  );
};
