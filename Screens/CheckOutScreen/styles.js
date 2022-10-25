import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    buttons:{
    width:"100vh",
    backgroundColor: 'rgba(123,104,238,0.8)',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 12,
    marginVertical: 10,
    marginTop:5,
    borderWidth: 1,
    borderColor: 'white'
    },
    buttonText:{
      fontSize: 20,
      fontWeight: '500',
      color: 'white',
      letterSpacing: 0.5
    }

})

export default styles;
