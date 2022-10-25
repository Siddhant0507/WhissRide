import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity,Button} from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '../../.env'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapScreen}> </View>
      

      <GooglePlacesAutocomplete

      nearbyPlacesAPI='googlePlacesSearch'
      debounce={400}
      placeholder='Search'
      // onPress={(data, details = null) => {
      //   // 'details' is provided when fetchDetails = true
      //   console.log(data, details);
      // }}
      
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
    />
      
      {/* <View> 
        <TouchableOpacity style={styles.buttons}>
         <Text style={styles.buttonText}>Book a Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
         <Text style={styles.buttonText}>Explore Packages</Text>
        </TouchableOpacity>
        </View> */}


      </View>
  )
}
export default HomeScreen


