import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import styles from "./styles"
import Svg, { Image } from "react-native-svg";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const LoginSignup = ({navigation}) => {
  const { height, width } = Dimensions.get("window");
      
  return (
    <View style={styles.container}>
      
      <View style={StyleSheet.absoluteFill}>
        {/* <Svg style={styles.svgStyle}>
          <Image
            style={styles.imagestyle}
            href={require("./login-background.jpg")}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg> */}
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.button} >
            <Text style={styles.buttonText}>LOG IN</Text>
          </View></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </View>
          </TouchableOpacity>
        </View>    
    </View>
    );
}

export default LoginSignup
