import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer:{
    marginTop:30,
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
  headingText:{
    fontSize:32,
    fontWeight:"600",
    marginHorizontal:15,
  },
  subHeadingText:{
    marginVertical:10,
    fontSize:20,
    fontWeight:"400",
    marginHorizontal:15,
  },
  loginInput:{
    height: 55,
   alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    fontSize: 20,
    textAlign:'center',
    fontWeight:'500'
 },
 
  

});

export default styles;