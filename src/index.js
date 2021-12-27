import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CustomThemeProvider } from './Context';
import { StyledEngineProvider } from '@mui/styled-engine';
import { CssBaseline } from '@mui/material';
import { StylesProvider } from '@mui/styles';


ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <StyledEngineProvider>
        <CustomThemeProvider>
          <CssBaseline />
          <App />
        </CustomThemeProvider>,
      </StyledEngineProvider>,
    </StylesProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

{/* <React.StrictMode>
    <StyledEngineProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>,
  </React.StrictMode>, */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
