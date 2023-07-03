import { Suspense } from 'react';

import { IndustrialSiteDesigner } from './components/features/IndustrialSiteDesigner';

export default function Home() {
  return (
    <Suspense>
      <IndustrialSiteDesigner />
    </Suspense>
  );
}
