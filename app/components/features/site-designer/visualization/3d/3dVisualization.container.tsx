import { useStore } from '@/app/lib/store';
import { balanceItemsGreedy } from '@/app/utils/balanceItemsGreedy';

import { ThreeDimensionalVisualizationBase } from './3dVisualization.base';

export const ThreeDimensionalVisualizationContainer = () => {
  const state = useStore();
  const { flattenedPlots } = balanceItemsGreedy(state, 10, 100);

  return <ThreeDimensionalVisualizationBase flattenedPlots={flattenedPlots} />;
};
