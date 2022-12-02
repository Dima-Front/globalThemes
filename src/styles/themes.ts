import {createTheme} from "@mui/material";


let themes = createTheme({
    palette: {
        primary: {
            main: '#A1C0FE',
            contrastText: '#182F83',

        },
        secondary: {
            main: '#182F83'
        },

    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
               root: ({ownerState}) => ({
                   ...ownerState.color === 'primary' && {
                       color: '#fff'
                   }
               })

               }
            }
        }

})

export default themes;