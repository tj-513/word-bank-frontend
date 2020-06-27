import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  homeContainer: {
      flex: 1,
      paddingTop: 22,
      paddingLeft: width*0.05,
      paddingRight: width*0.05,
      width
    },

    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    textInputView:{
        padding: 4,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop:4,
        marginBottom:4,
    }
  });

  export default styles;