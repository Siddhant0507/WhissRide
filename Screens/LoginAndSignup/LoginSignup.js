import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "./styles"



const LoginSignup = ({navigation}) => {
  return (
    <View> <Image 
    style={styles.loginImage}
    source={require('../../assets/LoginImage.png')}
    />
        <View>
        
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
