import * as React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native';
import { flush } from '@mylong.frontend/core-ui';

function Document() {
  return (
    <Html className="gs" lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async ({ renderPage }: any) => {
  AppRegistry.registerComponent('Main', () => Main);
  const { getStyleElement } = (AppRegistry as any).getApplication('Main');
  const page = await renderPage();
  const styles = [getStyleElement(), ...flush()];
  return { ...page, styles: React.Children.toArray(styles) };
};

export default Document;
