import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  imageStyle:{
    height:'45vh',
    width:width,
    marginTop:'24vh'


  },
  container:{
    
    flexDirection:"column",
    justifyContent:"center",
     
  }



})
export default styles;