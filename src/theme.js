import { createTheme }  from '@material-ui/core'
import {deepPurple, amber} from '@material-ui/core/colors'


const theme = createTheme({
    palette: {
        primary: { 
            main: deepPurple[500]
            // background: deepPurple[200]
        },
        secondary: {
            main: amber[500],
            contrastText: deepPurple[900]
        }
    },
});

export default theme;