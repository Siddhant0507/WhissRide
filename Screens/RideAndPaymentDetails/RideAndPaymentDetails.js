import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'
import styles from './styles'

const RideAndPaymentDetails = () => {
    const details = [
        {
            title :"Driving License Mandatory",
           
        },
        {
            title :"Fare and Fuel Policy",
            subtitle:"Fare is inclusive of all taxes. Kindly return the car at the same fuel as the trip start time"
        },
        {
            title :"Cancellation Policy",
            subtitle:"Hastle free cancellation and refunds at nominal charges"
        },
        {
            title :"Agreement Policy",
            subtitle:"I hereby agree to the terams and conditions of the Lease Agreement with the Host"
        }
    ]

  return (
    <View>
    <Text style={styles.title}>Keep in Mind</Text>
    <FlatList  data ={details} renderItem={(element)=>{
        return(
            <View style={styles.flatlistContainer}>
            <Text style={styles.title}>{element.item.title}</Text>
            <Text style={styles.subtitle}>{element.item.subtitle}</Text>
            </View>)
      

    }} />
    </View>
  )
}

export default RideAndPaymentDetails

