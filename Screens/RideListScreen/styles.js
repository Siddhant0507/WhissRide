import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
textstyle:{
    fontSize:25,
    fontWeight:'400',
    margin:10,

},
imageStyle:{
    height:30,
    width:width
}




})
export default styles;