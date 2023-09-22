import { default as NextLink } from 'next/link';
import { FC } from 'react';
import { resolveHref } from './resolveHref';
import { ILinkProps } from './interfaces';

export const Link: FC<ILinkProps & { onPress: any }> = ({ href, onPress, ...props }) => {
  return <NextLink href={resolveHref(href)} onClick={onPress} {...props} />;
};
