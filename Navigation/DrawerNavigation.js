import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react';
import {FontAwesome5} from '@expo/vector-icons';



const DrawerNavigation = ({Navigation}) => {
  return (
    <View>
      <Text>DrawerNavigation</Text>
      <TouchableOpacity
      onPress={props.navigation.openDrawer}>
        <FontAwesome5    name='bars' size={24}  color='#161924'     />
      </TouchableOpacity>
    </View>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})