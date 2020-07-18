import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center'
  },
  optionsContainer: {
      paddingTop: 30,
  },
  option:{
    padding:10,
    borderWidth:1,
    borderRadius:5,
    marginBottom:5,
    backgroundColor:'#dbfcff',
    textAlign: "center",
  },
  buttonTitleStyle:{
    textAlign:'center',
    fontSize:12,
    fontWeight:'bold'
  },
  skipButton:{
    marginTop: 20,
    padding:10,
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'#fffef0',
    textAlign: "center",
    fontWeight:'bold',
  }
});

export default styles;
