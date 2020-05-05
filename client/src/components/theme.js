import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const keyFrames = {
  ldsRoller: `@keyframes lds-roller: {
    0%: {
      transform: rotate(0deg)
    },
    100%: {
      transform: rotate(360deg)
    } 
  }`
}


export default createMuiTheme({
  typography: {
    useNextVariants: true,
    color: '#fff',
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#E535AB'
    },
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    contrastText: '#fff',
  },
});
