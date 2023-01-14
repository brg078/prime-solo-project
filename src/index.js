import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App/App';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';


const theme= createTheme({
  palette:{
      // mode: 'dark',
      background: {
          default: '#0B132B',
      //     paper: '#1C2541'
      },
      primary: {
          main: '#5BC0BE',
      },
      secondary: {
          main: '#C3C3C3',
      },
      // text: {
      //     primary: '#F8F8F8'
      // }
  },


  typography:{
    fontFamily:'andale mono'
  }


  // components: {
  //     MuiTooltip: {
  //         styleOverrides: {
  //             tooltip: {
  //                 backgroundColor: '#0B132B'
  //             }
  //         }
  //     }
  // }
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


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('react-root'),
// );


// root.render(
//   <React.StrictMode>
//       <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Provider store={store}>
//               <App />
//           </Provider>
//       </ThemeProvider>
//   </React.StrictMode>
// );