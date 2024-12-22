import '@/App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import Main from '@/pages/Main';
import GlobalStyles from '@/styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Preview from '@/pages/Preview';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/preview' element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
