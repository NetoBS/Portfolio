import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';

import theme from '../styles/theme';
import Home from './index'
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
       <NextNprogress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
