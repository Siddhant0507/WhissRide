import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import styles from "./styles";
import { useRef,useState } from "react";
import {FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../firebaseConfig";
import firebase from "firebase/compat/app";

const Login = ({navigation}) => {
  const [PhoneNumber , setPhoneNumber] = useState(" ");
  const [code , setCode] = useState("");
  const [verificationId , setVerificationId] = useState(null);
  const recaptchaVarifier = useRef(null);

  const sendVarification =() =>{
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider.verifyPhoneNumber(PhoneNumber,recaptchaVarifier.current)
    .then(setVerificationId);
    setPhoneNumber('');
  }

  const confirmCode =() =>{
     const credentials = firebase.auth.PhoneAuthProvider.credential(
      verificationId , code
     );
     firebase.auth().signInWithCredential(credentials).then(()=>{
      setCode('');
     }).catch((error)=>{
      alert(error);
     })
     Alert.alert("Login successful .Welcome to dashboard",);
     navigation.navigate('otp')
  }

  return (
    <View style={styles.container
    }>
       <View>
       <Text style={styles.headingText}>
           Enter Phone Number for varification
         </Text>
         <Text style={styles.subHeadingText}>
           This number will be used for all ride-related communication. You shall
           receive an SMS with code for varification.
         </Text>
         <Text style={styles.subHeadingText}>Note : Start number with +91</Text>
       </View>
      <FirebaseRecaptchaVerifierModal 
      ref={recaptchaVarifier}
      firebaseConfig ={firebaseConfig}
      />
      <TextInput
      placeholder="Enter Phone Number"
      onChangeText={setPhoneNumber}
      keyboardType="phone-pad"
      autoCompleteType ="tel"
      style={styles.loginInput}
      />
      <TouchableOpacity onPress={sendVarification} >
        <View style={styles.button}> <Text style={styles.buttonText}>Send varification</Text></View>
      </TouchableOpacity>
      <TextInput
      placeholder="enter otp"
      onChangeText={setCode}
      keyboardType="number-pad"
      style={styles.loginInput}
      />
       <TouchableOpacity onPress={confirmCode}>
        <View style={styles.button} ><Text style={styles.buttonText}>Confirm varification</Text> </View>
      </TouchableOpacity>
{/* 
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={styles.backButton} ><Text style={styles.buttonText}>.</Text> </View>
      </TouchableOpacity> */}



    </View>
    
  );
};

export default Login;



