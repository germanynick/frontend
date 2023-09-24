import { useBreadcrumbMeta, useBreadcrumbTitle } from '@mylong.frontend/shared-store';
import { Helmet } from 'react-helmet';

export const SeoMeta = () => {
  const title = useBreadcrumbTitle();
  const meta = useBreadcrumbMeta();

  return (
    <Helmet>
      <title>Hello</title>
      <meta name="description" content={meta} />
    </Helmet>
  );
};
