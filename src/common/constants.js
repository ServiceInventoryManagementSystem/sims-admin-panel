import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightGreen600, lightGreen400, lightGreen300, lightGreen900, grey50, lightGreen700, red700} from 'material-ui/styles/colors';

export const DEFAULT_API="http://localhost:3000/api/";




export const THEME = getMuiTheme({
  raisedButton: {
    primaryColor: lightGreen400,
    secondaryColor: red700,
    fontFamily: 'roboto',
    fontWeight: '300',
  },
  textField: {
    focusColor: lightGreen300,
  },
  toggle: {
    thumbOnColor: lightGreen600,
    trackOnColor: lightGreen300,
  },
  datePicker: {
    selectColor: lightGreen600,
    color: lightGreen600,
    headerColor: lightGreen300,
  },
  flatButton: {
    primaryTextColor: lightGreen700,
    fontFamily: 'roboto',
    fontWeight: '300',
  },
  palette: {
    primaryColor: lightGreen300,
    primary2Color: lightGreen900,
    accent1Color: lightGreen400,
    accent2Color: lightGreen900,
    disabledColor: lightGreen900,
    //textColor: grey50,
  },
});
