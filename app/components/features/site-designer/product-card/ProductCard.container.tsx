import { useStore } from '@/app/lib/store';
import { Product, PRODUCT_NAMES } from '@/app/utils/constants';
import { calculateRequiredTransformers } from '@/app/utils/productConversions';

import { ProductCardBase } from './ProductCard.base';

export type ProductCardContainerProps = {
  product: Product;
};

export const ProductCardContainer: React.FC<ProductCardContainerProps> = (
  props
) => {
  const { product } = props;
  const isTransformer = product.name === PRODUCT_NAMES.TRANSFORMER;

  const [itemCount, updateCart, state] = useStore((state) => [
    state[product.name],
    state.updateCart,
    state,
  ]);

  const minimumCount = isTransformer
    ? calculateRequiredTransformers(state)
    : undefined;

  const handleUpdateCart = (value: number) => {
    updateCart(product.name, value);
  };

  const handleClearItem = () => updateCart(product.name, 0);

  return (
    <ProductCardBase
      {...props}
      handleClearItem={handleClearItem}
      itemCount={itemCount}
      handleUpdateCart={handleUpdateCart}
      minimumCount={minimumCount}
    />
  );
};
