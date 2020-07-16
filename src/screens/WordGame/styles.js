import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
    paddingLeft:10,
    paddingRight:10,
  },
});

export default styles;
