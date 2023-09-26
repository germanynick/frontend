import { FC, MetaHTMLAttributes } from 'react';
import { Head } from './Head';

export interface IMetaProps extends MetaHTMLAttributes<HTMLMetaElement> {}

export const Meta: FC<IMetaProps> = (props) => {
  return (
    <Head>
      <meta {...props} />
    </Head>
  );
};
