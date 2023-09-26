import { Link as ExpoLink } from 'expo-router';
import { FC } from 'react';
import { resolveHref } from './resolveHref';
import { ILinkProps } from './interfaces';

export const Link: FC<ILinkProps> = ({ href, ...props }) => {
  return <ExpoLink href={resolveHref(href)} {...props} />;
};
