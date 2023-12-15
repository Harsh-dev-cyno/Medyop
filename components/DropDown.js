import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';
import color from '../constant/color';

const DropDown = () => {
    const tunes = ["Happy", "Sad", "Cry", "Bell"]

    
  return (
    <SelectDropdown
	data={tunes}
    buttonStyle={
        {
        width:130,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:color.colors.gray
        }
    }
    buttonTextStyle={{
        fontSize:15,
        fontWeight:'bold'
    }}
    defaultButtonText="Alert tone"
    renderDropdownIcon={()=>(
<AntDesign name="down" size={14} color="black" />
    )}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
/>
  )
}

export default DropDown

const styles = StyleSheet.create({})