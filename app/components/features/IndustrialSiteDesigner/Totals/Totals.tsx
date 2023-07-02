import {
  Divider,
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

export const Totals = () => {
  return (
    <Flex bg="white" flexDir="column">
      <Heading fontWeight={500} fontSize="2xl" p={3} alignSelf="center">
        Site Specifications
      </Heading>

      <HStack justify="center" gap={40} mt={3}>
        <VStack gap={0}>
          <Text fontSize="3xl" fontWeight={500} lineHeight={10}>
            4.9 MWh
          </Text>
          <Text fontSize="xs" color="#5c5e62">
            Energy
          </Text>
        </VStack>
        <VStack gap={0}>
          <Text fontSize="3xl" fontWeight={500} lineHeight={10}>
            3
          </Text>
          <Text fontSize="xs" color="#5c5e62">
            Batteries
          </Text>
        </VStack>
      </HStack>

      <TableContainer w="100%" mt={5}>
        <Table variant="unstyled" size="sm">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Energy</Th>
              <Th>Land Dimension</Th>
              <Th textAlign="right">Cost</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>2 MegaPack 2XL</Td>
              <Td>20 MWh</Td>
              <Td>20 x 20</Td>
              <Td textAlign="right">$40,000</Td>
            </Tr>
            <Tr>
              <Td>2 MegaPack 2XL</Td>
              <Td>20 MWh</Td>
              <Td>20 x 20</Td>
              <Td textAlign="right">$40,000</Td>
            </Tr>
            <Tr>
              <Td>2 MegaPack 2XL</Td>
              <Td>20 MWh</Td>
              <Td>20 x 20</Td>
              <Td textAlign="right">$40,000</Td>
            </Tr>
          </Tbody>
          <Tfoot borderTop="1px solid gray">
            <Tr fontWeight="semibold">
              <Td>Your Site Build</Td>
              <Td>50 MWh</Td>
              <Td>20 x 20</Td>
              <Td textAlign="right">$100000</Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Flex>
  );
};
