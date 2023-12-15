import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import color from "../constant/color";

const MedicineTimeClock = () => {
    const [time1, setTime1] = useState(new Date());
   
  
    const [showPicker1, setShowPicker1] = useState(false);


    const handleTimeChange = (event, selectedTime, setTimeFunction, setShowFunction) => {
        const currentTime = selectedTime || time1;
        setTimeFunction(currentTime);
        setShowFunction(Platform.OS === 'ios'); // For iOS, show the time picker again
      };



  return (
    <>
    <View>

      <View
        style={styles.container}>
        <View
          style={styles.clockTextCover}>
          <Text style={styles.clockText}>
            {time1.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => setShowPicker1(true)}>
            <Entypo
              name="clock"
              size={24}
              color={color.colors.secondaryGreen}
            />
          </TouchableOpacity>
          {showPicker1 && (
            <DateTimePicker
              value={time1}
              mode="time"
              is24Hour={false}
              display="default"
              onChange={(event, selectedTime) =>
                handleTimeChange(event, selectedTime, setTime1, setShowPicker1)
              }
            />
          )}
        </View>
      </View>

     
    </View>


  

    </>
  );
};

const styles = StyleSheet.create({

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
});

export default MedicineTimeClock;
