import { createMuiTheme } from '@material-ui/core/styles';

const MUITheme = createMuiTheme({
    palette: {
        primary: {
            light: '#ff867c',
            main: '#ef5350',
            dark: '#b61827',
            contrastText: '#000000',
        },
        secondary: {
            light: '#8e8e8e',
            main: '#616161',
            dark: '#373737',
            contrastText: '#ffffff',
        },
    },
});

export default MUITheme; 