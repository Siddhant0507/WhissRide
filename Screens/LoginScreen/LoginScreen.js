import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles";

const Login = ({navigation}) => {
  const [number, onChangeNumber] = React.useState("");
  return (
    <View style={styles.loginContainer}>
      <View>
        <Text style={styles.headingText}>
          Enter Phone Number for varification
        </Text>
        <Text style={styles.subHeadingText}>
          This number will be used for all ride-related communication. You shall
          receive an SMS with code for varification
        </Text>
      </View>
      <TextInput
        style={styles.loginInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Your Number"
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={() => navigation.navigate('otp')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
