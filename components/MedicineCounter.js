import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather,AntDesign,SimpleLineIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import color from '../constant/color';

const MedicineCounter = () => {
    const data = ['Pill','tablet','capsule']
    const [medicineAmount,setMedicineAmount]=useState(1);
    

    const incrementCounter = () => {
        setMedicineAmount(medicineAmount + 1);
      };
    
      const decrementCounter = () => {
        if (medicineAmount > 1) {
            setMedicineAmount(medicineAmount - 1);
        }
      };
  return (
    <View style={styles.main}>

        <View style={styles.medicineAmountCover}>
            <View style={styles.medicineAmountText}>
            <Text style={{textAlign:'center',fontWeight:'bold'}}>{medicineAmount}</Text>
            </View>
        </View>

        <View style={styles.buttonCover}>
            <TouchableOpacity onPress={incrementCounter}><Feather name="plus-circle" size={25} color={color.colors.secondaryGreen} /></TouchableOpacity>
        </View>

        <View style={styles.buttonCover}> 
            <TouchableOpacity onPress={decrementCounter}><Feather name="minus-circle" size={25} color={color.colors.secondaryGreen} /></TouchableOpacity>
        </View>
        
        <View style={styles.dropdown}>
        <SelectDropdown
            data={data}
            buttonStyle={{
              backgroundColor:color.colors.gray,
              width:100,
              shadowColor:color.colors.black,
              elevation:5,
              borderTopRightRadius:10,
              borderBottomRightRadius:10,
              height:30,
              }}
            buttonTextStyle= {{
              fontSize:12,
              fontWeight:'bold'

            }}
            rowTextStyle={{
              fontSize:12
             }}
             defaultValueByIndex={0}
             renderDropdownIcon={()=>(
                <SimpleLineIcons name="arrow-down" size={15} color="black" />
             )}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
          />
        </View>


      
    </View>
  )
}

export default MedicineCounter

const styles = StyleSheet.create({
    main:{
        flexDirection:'row',alignItems:'center',
        marginHorizontal:20,
        marginVertical:5,
        gap:15,
        flex:1
        
    },
    medicineAmountCover:{
        backgroundColor:color.colors.white,
        padding:5,
        shadowColor:color.colors.black,
        elevation:5,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        flex:1

    },
    medicineAmountText:{
        backgroundColor:color.colors.gray,
        padding:5,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        flex:1
    },
    buttonCover :{
        backgroundColor:color.colors.white,
        shadowColor:color.colors.black,
        elevation:5,
        padding:5,
        borderRadius:5
    },
    dropdown:{
        backgroundColor:color.colors.white,
        padding:5,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        shadowColor:color.colors.black,
        elevation:5
    },
})