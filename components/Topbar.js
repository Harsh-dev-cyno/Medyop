import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Topbar = (props) => {
  return (
     <View style={{ alignItems: "center" }}>
     <TouchableOpacity>
       <Text style={{ fontSize: 16, fontWeight: "500" }}>
         {props.title}
       </Text>
     </TouchableOpacity>
   </View>
  )
}

export default Topbar

const styles = StyleSheet.create({})