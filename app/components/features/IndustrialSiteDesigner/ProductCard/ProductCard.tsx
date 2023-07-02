import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';

import { Product, PRODUCT_NAMES } from '@/app/utils/constants';

import { Test } from '../Cart/Test';

type ProductCardProps = { product: Product };

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton _hover={{ bg: 'whiteAlpha.600' }}>
          <Flex
            as="span"
            flex="1"
            textAlign="left"
            justify="space-between"
            align="center"
          >
            <Text fontWeight={500} fontSize="lg">
              {product.name}
            </Text>
            <Flex gap={3} mr={4}>
              <Test />
            </Flex>
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <TableContainer>
          <Table variant="simple" size="sm">
            <Tbody>
              <Tr>
                <Td w={0} fontWeight={500}>
                  Name
                </Td>
                <Td w={200}>{product.name}</Td>
                <Td isNumeric>-</Td>
              </Tr>
              <Tr>
                <Td fontWeight={500}>Size</Td>
                <Td>
                  {product.dimensions.length}FT x {product.dimensions.width}FT
                </Td>
                <Td isNumeric>800SQFT</Td>
              </Tr>
              <Tr>
                <Td fontWeight={500}>Input</Td>
                <Td>2</Td>
                <Td isNumeric>2</Td>
              </Tr>
              <Tr>
                <Td fontWeight={500}>Energy</Td>
                <Td>{product.energy} MWH</Td>
                <Td isNumeric>8.4MWH</Td>
              </Tr>
              <Tr>
                <Td fontWeight={500}>Cost</Td>
                <Td>${product.cost.toLocaleString()}</Td>
                <Td isNumeric>$40,000</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justify="flex-end" gap={3}>
          <Button mt={4} bg="#3e6ae1" color="white" size="sm" fontSize="xs">
            Change Property
          </Button>
          <Button
            mt={4}
            variant="ghost"
            size="sm"
            fontSize="xs"
            bg="#f4f4f4"
            border="1px solid gray"
            color="#3a3c42"
          >
            Clear Selection
          </Button>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};
