import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  wrongWordsContainer:{
    flex:1
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center'
  },
  result: {
      fontSize: 50,
      fontWeight:'700',
      textAlign: 'center'
  },
  resultContainer:{
    padding:10,
    marginTop:20,
    marginBottom:25,
    textAlign: "center",
  },
  wrongWordsLabelText:{
    padding:5,
    textAlign:'center'
  }
});

export default styles;
