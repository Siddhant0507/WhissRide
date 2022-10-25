import { TextInput,View,TouchableOpacity ,Text,Image,StyleSheet} from "react-native";
import React from 'react';
import styles from "./styles"

const Otp = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');
  
 
    return (
      <View >
        <Image
        style={styles.otpImage}
        source = {require("./bike.jpg")}
              />
      <TextInput
      style={styles.textInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter OTP"
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={() => navigation.navigate('home')} >
      <View style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </View>
      </TouchableOpacity>
  </View>
  )
}

export default Otp