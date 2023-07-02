'use client';

import { Box, Button, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { PiGlobe } from 'react-icons/pi';

export const Header = () => {
  return (
    <Box flex="1 0 42px" bg="white">
      <Flex justify="space-between" align="center" px="1.3em" w="100%" h="100%">
        <Link href="#">
          <Image priority src="/logo.svg" alt="Logo" width={150} height={40} />
        </Link>

        <Button
          variant="ghost"
          leftIcon={<PiGlobe size={25} />}
          fontWeight={500}
          justifySelf="flex-end"
          position={['absolute', 'static']}
          right={0}
        >
          US
        </Button>
      </Flex>
    </Box>
  );
};
