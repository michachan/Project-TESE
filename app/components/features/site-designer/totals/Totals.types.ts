import { PRODUCT_NAMES } from '@/app/utils/constants';

export type SiteDesignerTotalsBaseProps = {
  totalMWh: number;
  totalCost: number;
  totalBatteries: number;
  itemCounts: [PRODUCT_NAMES, number][];
  requiredSpace: {
    length: number;
    width: number;
  };
};
