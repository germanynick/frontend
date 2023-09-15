import type { ReactNode } from 'react';

export type Href = string | HrefObject;

export interface HrefObject {
  /** Path representing the selected route `/[id]`. */
  pathname?: string;
  /** Query parameters for the path. */
  params?: Record<string, any>;
}

export interface ILinkProps {
  href: Href;
  children?: ReactNode;
}
