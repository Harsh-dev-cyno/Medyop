import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import color from '../constant/color'
import Slider from '@react-native-community/slider'

const DaysRangeSlider = ({title,days}) => {
    const [sliderValue, setSliderValue] = useState(0);
    const [sliderOnChange, setSliderOnChange] = useState(false);

    console.log(days);

    const minimumValue = 1;
  const maximumValue = 10;
  

  const onValueChange = (val) => {
    setSliderValue(val);
    setSliderOnChange(true);  };

    const onSlidingComplete = () => {
        setSliderOnChange(false);
      };

    useEffect(() => {
        // Log to verify that the component re-renders when sliderOnChange changes
        console.log('sliderOnChange:', sliderOnChange);
      }, [sliderOnChange]);
    
  return (
    <View>
    <View style={styles.main}>
        <Pressable style={styles.titleCover}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>{title}</Text>
        </Pressable>
        <Pressable style={styles.daysMainCover}>
            <View style={styles.daysCover}>
            <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center',padding:1}}>{days==="" ? sliderValue : days}</Text>
            </View>
        </Pressable>
    </View>
    <View style={{marginHorizontal:20,backgroundColor:'white',borderRadius:10,shadowColor:color.colors.black,elevation:5,marginVertical:5,paddingVertical:2,paddingHorizontal:8}}>
    <Slider style={{width: '100%', height: 40}} 
        minimumValue={0} 
        maximumValue={31}
        onValueChange={onValueChange}
        onSlidingComplete={onSlidingComplete}
        onSlidingStart={() => console.log("Sliding start")}
        step={1}
        value={sliderValue}
        maximumTrackTintColor={color.colors.secondaryGreen}
        minimumTrackTintColor={color.colors.primaryBlue}
        thumbImage={require('../constant/assets/icons/trang.png')}        
      />
      </View>
    </View>
    

  )
}

export default DaysRangeSlider

const styles = StyleSheet.create({
    main :{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5,
        marginHorizontal:20,
        gap:10
        
    },
    titleCover : {
        backgroundColor:color.colors.white,
        padding:8,
        shadowColor:color.colors.black,
        elevation:5,
        borderRadius:10

    },
    daysMainCover:{
        backgroundColor:color.colors.white,
        padding:8,
        shadowColor:color.colors.black,
        elevation:5,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        flex:1
    },
    daysCover:{
        backgroundColor:color.colors.gray,
        width:'100%',
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        paddingHorizontal:8

    }

})