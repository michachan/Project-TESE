import { useStore } from '@/app/lib/store';
import { balanceItemsGreedy } from '@/app/utils/balanceItemsGreedy';
import {
  calculateMWhAndCost,
  calculateSiteArea,
  calculateTotalBatteries,
  parseItemCounts,
} from '@/app/utils/productConversions';

import { SiteDesignerTotalsBase } from './Totals.base';

export const SiteDesignerTotalsContainer = () => {
  const state = useStore();

  const [totalMWh, totalCost] = calculateMWhAndCost(state);
  const totalBatteries = calculateTotalBatteries(state);
  const itemCounts = parseItemCounts(state);
  const requiredSpace = {
    length: balanceItemsGreedy(state, 10, 100).maxLength,
    width: Math.min(100, calculateSiteArea(state).width),
  };

  return (
    <SiteDesignerTotalsBase
      totalMWh={totalMWh}
      totalCost={totalCost}
      totalBatteries={totalBatteries}
      itemCounts={itemCounts}
      requiredSpace={requiredSpace}
    />
  );
};
