import { FC, HTMLAttributes } from 'react';
import { Head } from './Head';

export interface ITitleProps extends HTMLAttributes<HTMLTitleElement> {}

export const Title: FC<ITitleProps> = (props) => {
  return (
    <Head>
      <title {...props} />
    </Head>
  );
};
