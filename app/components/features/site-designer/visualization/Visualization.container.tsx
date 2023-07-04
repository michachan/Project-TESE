import { useState } from 'react';

import { VisualizationBase } from './Visualization.base';

export const VisualizationContainer = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const onTabChange = (index: number) => setTabIndex(index);

  return <VisualizationBase tabIndex={tabIndex} onTabChange={onTabChange} />;
};
