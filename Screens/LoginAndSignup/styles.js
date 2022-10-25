import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
  },
  button: {
    backgroundColor: 'rgba(123,104,238,0.8)',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5
  },
  bottomContainer: {
    justifyContent: 'center',
    height: height / 3,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10
  },
  imagestyle:{
    height:"100vh",
    width:"100vh"
  },
  svgStyle:{
    height:"100vh",
    width:"100vh"
  }
 
});

export default styles;