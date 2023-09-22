import { HStack, Slide, VStack } from '@mylong.frontend/core-ui';
import { Layout, LayoutHeader, LayoutContent, LayoutFooter } from '../Layout';
import { FC, ReactNode } from 'react';
import { AppBottomNav } from './AppBottomNav';
import { AppSideBar } from './AppSidebar';
import { AppHeader } from './AppHeader';
import { useDebounce, usePrevious } from 'ahooks';
import { usePathname } from '@mylong.frontend/core-router';

export interface IAppLayoutProps {
  children: ReactNode;
}

export const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const deferredPathname = useDebounce(pathname, { wait: 300, leading: false, trailing: true });

  return (
    <Layout>
      <HStack height="$full">
        <AppSideBar />

        <VStack width="$full" flexShrink={1}>
          <LayoutHeader sx={{ '@base': { display: 'flex' }, '@md': { display: 'none' } }}>
            <AppHeader />
          </LayoutHeader>
          <LayoutContent sx={{ '@base': { padding: '$4' }, '@lg': { maxWidth: '$3/4' } }}>
            <Slide isOpen={pathname === deferredPathname} display={pathname !== deferredPathname ? 'none' : 'flex'}>
              {children}
            </Slide>
          </LayoutContent>
          <LayoutFooter sx={{ '@base': { display: 'flex' }, '@md': { display: 'none' } }}>
            <AppBottomNav />
          </LayoutFooter>
        </VStack>
      </HStack>
    </Layout>
  );
};
