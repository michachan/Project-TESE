import { Suspense } from 'react';

import { SiteDesigner } from './components/features/site-designer';

export default function Home() {
  return (
    <Suspense>
      <SiteDesigner />
    </Suspense>
  );
}
