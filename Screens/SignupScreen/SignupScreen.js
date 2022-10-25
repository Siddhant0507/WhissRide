import { Text, View,TouchableOpacity,TextInput, Image } from 'react-native'
import React from 'react'
import styles from './signupStyles'

const SignupScreen = ({navigation}) => {
    const [number, onChangeNumber] = React.useState("");
    const [name, onChangeName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
  return (
    <View  style={styles.signupContainer} >
      <Image
          style={styles.signupImage}
          source = {require("./bike.jpg")}/>
        <Text style={styles.headingText}>Few Steps Away from your journy....</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={onChangeName}
          value={name}
          placeholder="Enter full Name"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.loginInput}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Enter Email"
          
        />
        <TextInput
          style={styles.loginInput}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Your Number"
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={() => navigation.navigate('otp')} >
        <View style={styles.button}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default SignupScreen

