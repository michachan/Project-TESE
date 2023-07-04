import { Heading } from '@chakra-ui/react';

export const TeslaHeadingBase = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) => {
  return (
    <Heading
      color={color}
      fontWeight={500}
      fontSize={['2xl', '3xl']}
      lineHeight={5}
      p={3}
    >
      {children}
    </Heading>
  );
};
