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
    source={require('../../assets/bike3.png')}
    />
        <View style={styles.bottomContainer}>
        <Text style={styles.headingText}>Explore new ways to travel with WhissRide</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.button} >
            <Text style={styles.buttonText}>LOG IN</Text>
          </View></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </View>
          </TouchableOpacity>
          <Text style={styles.tandc}>By continuing, you agree that you have read and accept our T&Cs and Privacy Policy</Text>
        </View> 

    </View>
    );
}

export default LoginSignup
