import { Text, View,TouchableOpacity,TextInput, Image } from 'react-native'
import React from 'react'
import styles from './signupStyles';
import { ref, set } from "firebase/database";
import { db } from '../../firebaseConfig';
import react from 'react';

const SignupScreen = ({navigation}) => {
    const [number, onChangeNumber] = React.useState("");
    const [name, onChangeName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [buttondisable , buttonenable]= React.useState(true);

    const enableButton = ()=>{
         buttonenable(false)
    }

    const submitInfo = () =>{
      // const newKey = push(child(ref(Database),'users')).key
      set(ref(db, 'users/' + name), {
        username: name,
        email: email,
        number: number,
      }).then(()=>{
        alert("data added to the database");
      }).catch((error)=>{
          alert(error);
      })

    navigation.navigate('otp')
    }
  return (
    <View  style={styles.signupContainer} >
      <Image
          style={styles.signupImage}
          source = {require("./bike.jpg")}/>
        <Text style={styles.headingText}>Few Steps Away from your journy....</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={(name) => {onChangeName(name)}}
          value={name}
          placeholder="Enter full Name"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.loginInput}
          onChangeText={(email)=>{onChangeEmail(email)}}
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
        <TouchableOpacity onPress={submitInfo} >
        <View style={styles.button}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default SignupScreen

