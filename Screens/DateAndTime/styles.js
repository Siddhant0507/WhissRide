import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    text:{
        fontSize:20,
    },
    button:{
        backgroundColor: 'rgba(123,104,238,0.8)',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white'
      },
      buttonText:{
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 0.5
      },
      calender:{
        borderRadius: 20,
            margin: 40,
            borderColor: "black",
            borderWidth: 1,
      }



})
export default styles;