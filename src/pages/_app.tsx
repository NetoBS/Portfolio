import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import Home from './index'

function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default MyApp;
