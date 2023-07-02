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

import { PRODUCT_NAMES } from '@/app/utils/constants';

import { Test } from './Test';

export const IndustrialSiteDesignerCart = () => {
  return (
    <Suspense fallback={<></>}>
      <Accordion bg="white" allowToggle>
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
                  {PRODUCT_NAMES.MEGAPACK_2XL}
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
                    <Td w={200}>M2XL</Td>
                    <Td isNumeric>-</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Size</Td>
                    <Td>40FT x 10FT</Td>
                    <Td isNumeric>800SQFT</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Input</Td>
                    <Td>2</Td>
                    <Td isNumeric>2</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Energy</Td>
                    <Td>4.2MWH</Td>
                    <Td isNumeric>8.4MWH</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Cost</Td>
                    <Td>$10,000</Td>
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
                  {PRODUCT_NAMES.MEGAPACK_2XL}
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
                    <Td w={200}>M2XL</Td>
                    <Td isNumeric>-</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Size</Td>
                    <Td>40FT x 10FT</Td>
                    <Td isNumeric>800SQFT</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Input</Td>
                    <Td>2</Td>
                    <Td isNumeric>2</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Energy</Td>
                    <Td>4.2MWH</Td>
                    <Td isNumeric>8.4MWH</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Cost</Td>
                    <Td>$10,000</Td>
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
                  {PRODUCT_NAMES.MEGAPACK_2XL}
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
                    <Td w={200}>M2XL</Td>
                    <Td isNumeric>-</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Size</Td>
                    <Td>40FT x 10FT</Td>
                    <Td isNumeric>800SQFT</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Input</Td>
                    <Td>2</Td>
                    <Td isNumeric>2</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Energy</Td>
                    <Td>4.2MWH</Td>
                    <Td isNumeric>8.4MWH</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Cost</Td>
                    <Td>$10,000</Td>
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
                  {PRODUCT_NAMES.MEGAPACK_2XL}
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
                    <Td w={200}>M2XL</Td>
                    <Td isNumeric>-</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Size</Td>
                    <Td>40FT x 10FT</Td>
                    <Td isNumeric>800SQFT</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Input</Td>
                    <Td>2</Td>
                    <Td isNumeric>2</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Energy</Td>
                    <Td>4.2MWH</Td>
                    <Td isNumeric>8.4MWH</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Cost</Td>
                    <Td>$10,000</Td>
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
                  {PRODUCT_NAMES.MEGAPACK_2XL}
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
                    <Td w={200}>M2XL</Td>
                    <Td isNumeric>-</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Size</Td>
                    <Td>40FT x 10FT</Td>
                    <Td isNumeric>800SQFT</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Input</Td>
                    <Td>2</Td>
                    <Td isNumeric>2</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Energy</Td>
                    <Td>4.2MWH</Td>
                    <Td isNumeric>8.4MWH</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={500}>Cost</Td>
                    <Td>$10,000</Td>
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
      </Accordion>
    </Suspense>
  );
};
