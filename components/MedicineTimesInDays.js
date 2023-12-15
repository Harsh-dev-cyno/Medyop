import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import color from '../constant/color';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { Entypo ,AntDesign} from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';

const MedicineTimesInDays = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [timeIntervals, setTimeIntervals] = useState(Array(sliderValue).fill(new Date()));
  const [showPicker, setShowPicker] = useState(false);
  const [selectedInterval, setSelectedInterval] = useState(null);

  const onValueChange = (value) => {
    setSliderValue(value);
    setTimeIntervals(Array(value).fill(new Date()));
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedInterval !== null) {
      const updatedIntervals = [...timeIntervals];
      updatedIntervals[selectedInterval] = selectedTime || new Date();
      setTimeIntervals(updatedIntervals);
    }
    setShowPicker(Platform.OS === 'ios'); // For iOS, show the time picker again
  };

  const renderTimePicker = () => {
    if (showPicker) {
      return (
        <DateTimePicker
          value={timeIntervals[selectedInterval] || new Date()}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={(event, selectedTime) => handleTimeChange(event, selectedTime)}
        />
      );
    }
    return null;
  };

  const TimeClock = ({ index }) => (
    <TouchableOpacity style={styles.container}  onPress={() => handleClockPress(index)}x>
      <View style={styles.clockTextCover}>
        <Text style={styles.clockText}>
          {timeIntervals[index].toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
      <Pressable>
        <Entypo name="clock" size={24} color={color.colors.secondaryGreen} />
      </Pressable>
    </TouchableOpacity>
  );

  const handleClockPress = (index) => {
    setSelectedInterval(index);
    setShowPicker(true);
  };

  return (
    <ScrollView style={{marginVertical:5}}>
      <View style={styles.main}>
        <Pressable style={styles.titleCover}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>How many times in a day</Text>
        </Pressable>
        <Pressable style={styles.daysMainCover}>
          <View style={styles.daysCover}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 1 }}>
              {sliderValue}
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={{marginHorizontal:20,backgroundColor:'white',borderRadius:10,shadowColor:color.colors.black,elevation:5,marginVertical:5,paddingVertical:2,paddingHorizontal:8}}>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={12}
          onValueChange={(value) => onValueChange(value)}
          onSlidingComplete={() => console.log('Sliding complete')}
          onSlidingStart={() => console.log('Sliding start')}
          step={1}
          value={sliderValue}
          maximumTrackTintColor={color.colors.secondaryGreen}
          minimumTrackTintColor={color.colors.primaryBlue}
          thumbImage={require('../constant/assets/icons/trang.png')}
        />
      </View>
      <View style={styles.timeClockContainer}>
        {timeIntervals.map((interval, index) => (
          <TimeClock key={index} index={index} />
        ))}
      </View>
      {renderTimePicker()}
      
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    timeClockContainer:{
        flexDirection:'row',
        marginHorizontal:20,
        flexWrap:'wrap',
        justifyContent:'center',
        columnGap:25
    },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 20,
    gap: 10,
  },
  titleCover: {
    backgroundColor: color.colors.white,
    padding: 8,
    shadowColor: color.colors.black,
    elevation: 5,
    borderRadius: 10,
  },
  daysMainCover: {
    backgroundColor: color.colors.white,
    padding: 8,
    shadowColor: color.colors.black,
    elevation: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flex: 1,
  },
  daysCover: {
    backgroundColor: color.colors.gray,
    width: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 8,
  },
  sliderContainer: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal:20,
    shadowColor:color.colors.black,
    marginVertical:5
  },
  container:{
    backgroundColor: color.colors.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 5,
    borderRadius: 10,
    shadowColor: color.colors.black,
    elevation: 5,
    width: "45%",
    marginVertical:5
  },
  clockTextCover: {
    backgroundColor: color.colors.gray,
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
  },
  clockText:{
    fontSize:16,
    fontWeight:'bold'
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  AddBtn : {
    backgroundColor:color.colors.primaryBlue,
    borderRadius:20,
    alignItems:'center',
    padding:8,
    flex:1,
    justifyContent:'center',
    

  },
  CoverBtn : {
    flexDirection:'row',
    marginVertical:10,
    marginHorizontal:20,
    gap:10
  },
  btnText : {
    color:color.colors.white,
    fontSize:15,
    fontWeight:'bold'
  },
  MainAddBtn : {
    backgroundColor:color.colors.primaryBlue,
    borderRadius:20,
    alignItems:'center',
    padding:8,
    flex:2,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    
  }
  
});
export default MedicineTimesInDays;