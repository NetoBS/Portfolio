import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import Home from './index'
import GlobalStyles from '../styles/global';

function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
