import { useRouter as useNextRouter } from 'next/router';
import { Href } from './interfaces';
import { resolveHref } from './resolveHref';

export const useRouter = () => {
  const router = useNextRouter();

  const push = (href: Href) => {
    router.push(resolveHref(href));
  };

  return {
    ...router,
    push,
  };
};
