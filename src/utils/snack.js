import Snackbar from 'react-native-snackbar';
export default function Snack(msg) {
  Snackbar.show({
    text: msg,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor:'black'
  });
}