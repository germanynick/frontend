import { useBreadcrumbMeta, useBreadcrumbTitle } from '@mylong.frontend/shared-store';
import { Head } from '@mylong.frontend/core-router';

export const SeoMeta = () => {
  const title = useBreadcrumbTitle();
  const meta = useBreadcrumbMeta();

  return (
    <Head>
      <title>Hello</title>
      <meta name="description" content={meta} />
    </Head>
  );
};
