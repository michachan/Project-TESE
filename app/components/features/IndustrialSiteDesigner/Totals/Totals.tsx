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

import { TeslaHeading } from '@/app/components/common/heading/Heading';
import { useStore } from '@/app/lib/store';
import { PRODUCT_NAMES, PRODUCTS } from '@/app/utils/constants';
import { greedyBalancing } from '@/app/utils/greedyBalancing';
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
            {calculateTotalBatteries(state).toLocaleString()}
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
            {parseItemCounts(state).map(([productName, count]) => {
              const product = PRODUCTS[productName];
              return (
                <Tr
                  key={productName}
                  h={count ? 'auto' : 0}
                  opacity={count ? 1 : 0}
                  visibility={count ? 'visible' : 'collapse'}
                  transition="opacity 0.5s ease-in-out, visibility 0.5s linear"
                >
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
              <Td>
                {formatRequiredSpace({
                  length: greedyBalancing(state, 10, 100).maxLength,
                  width: Math.min(100, calculateSiteArea(state).width),
                })}
              </Td>
              <Td textAlign="right">${totalCost.toLocaleString()}</Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Flex>
  );
};
