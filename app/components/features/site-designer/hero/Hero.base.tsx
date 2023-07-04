'use client';

import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const SiteDesignerHeroBase = () => (
  <Box>
    <Image
      priority
      alt="megapack"
      src="/d_megapack-hero.avif"
      sizes="100vw"
      width={0}
      height={0}
      style={{
        display: 'block',
        objectFit: 'none',
        objectPosition: '50% 52%',
        minWidth: '100%',
        maxWidth: '100%',
        height: '100%',
        maxHeight: '475px',
      }}
    />
  </Box>
);
