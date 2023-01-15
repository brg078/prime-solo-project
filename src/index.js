import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App/App';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';


const theme= createTheme({
  palette:{
      background: {
          default: '#F0F8FF',
      },
      primary: {
          main: '#34BBFB',
      },
      secondary: {
          main: '#C3C3C3',
      },

  },


  typography:{
    fontFamily:'andale mono'
  }

});


ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('react-root'),
);