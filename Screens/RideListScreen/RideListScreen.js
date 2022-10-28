import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import styles from './styles'
import { FlatList } from 'react-native-web'

const RideListScreen = () => {
    const ridelist = [
    {   id:1,
        rideName:'Honda Activa',
        price:'40 Rs/hr',
        image:"../../assets/icon.png",
        KMdriven:'43k'
    }



    ]
  return (
    <View>
      <Text style={styles.textstyle}>Select Your Ride ..</Text>

      <FlatList 
        data={ridelist}
        renderItem={(element)=>{
            return(
                <View style={styles.flatlistContainer}>
                <Text style={styles.title}>{element.item.rideName}</Text>
                <Text style={styles.subtitle}>{element.item.price}</Text>
                <Text style={styles.subtitle}>{element.item.KMdriven}</Text>
                <Image source={element.item.image} style={styles.imageStyle}/>
                </View>)
                 }}
        
      
      />


    </View>
  )
}

export default RideListScreen

