import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Entypo,MaterialIcons } from "@expo/vector-icons";
import color from "../constant/color";
const DateTimeClock = () => {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [time1, setTime1] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  const [showDate1Picker, setShowDate1Picker] = useState(false);
  const [showDate2Picker, setShowDate2Picker] = useState(false);
  const [showTime1Picker, setShowTime1Picker] = useState(false);
  const [showTime2Picker, setShowTime2Picker] = useState(false);

  const handleDateChange = (
    event,
    selectedDate,
    setDateFunction,
    setShowFunction
  ) => {
    const currentDate = selectedDate || date1;
    setDateFunction(currentDate);
    setShowFunction(Platform.OS === "ios"); // For iOS, show the date picker again
  };

  const handleTimeChange = (
    event,
    selectedTime,
    setTimeFunction,
    setShowFunction
  ) => {
    const currentTime = selectedTime || time1;
    setTimeFunction(currentTime);
    setShowFunction(Platform.OS === "ios"); // For iOS, show the time picker again
  };

  return (
    <>
    
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.container} onPress={() => setShowDate1Picker(true)}>
        <View style={styles.clockTextCover}>
          <Text style={styles.clockText}>
            {`${date1.getDate()}-${date1.getMonth()}-${date1.getFullYear()}`}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <MaterialIcons
              name="date-range"
              size={24}
              color={color.colors.secondaryGreen}
            />
          </TouchableOpacity>
          {showDate1Picker && (
            <DateTimePicker
            value={date1}
            mode="date"
            display="default"
            onChange={(event, selectedDate) =>
              handleDateChange(event, selectedDate, setDate1, setShowDate1Picker)
            }
          />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => setShowDate2Picker(true)}>
        <View style={styles.clockTextCover}>
          <Text style={styles.clockText}>
            {`${date2.getDate()}-${date2.getMonth()}-${date2.getFullYear()}`}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <MaterialIcons
              name="date-range"
              size={24}
              color={color.colors.secondaryGreen}
            />
          </TouchableOpacity>
          {showDate2Picker && (
            <DateTimePicker
            value={date2}
            mode="date"
            display="default"
            onChange={(event, selectedDate) =>
                handleDateChange(event, selectedDate, setDate2, setShowDate2Picker)
              }
          />
          )}
        </View>
      </TouchableOpacity>

    </View>

    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.container} onPress={() => setShowTime1Picker(true)}>
        <View style={styles.clockTextCover}>
          <Text style={styles.clockText}>
          {time1.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Entypo
              name="clock"
              size={24}
              color={color.colors.secondaryGreen}
            />
          </TouchableOpacity>
          {showTime1Picker && (
           <DateTimePicker
           value={time1}
           mode="time"
           is24Hour={false}
           display="default"
           onChange={(event, selectedTime) =>
             handleTimeChange(event, selectedTime, setTime1, setShowTime1Picker)
           }
         />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => setShowTime2Picker(true)}>
        <View style={styles.clockTextCover}>
          <Text style={styles.clockText}>
          {time2.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Entypo
              name="clock"
              size={24}
              color={color.colors.secondaryGreen}
            />
          </TouchableOpacity>
          {showTime2Picker && (
           <DateTimePicker
           value={time2}
           mode="time"
           is24Hour={false}
           display="default"
           onChange={(event, selectedTime) =>
             handleTimeChange(event, selectedTime, setTime2, setShowTime2Picker)
           }
         />
          )}
        </View>
      </TouchableOpacity>

    </View>

    </>
  );
};

export default DateTimeClock;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: color.colors.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 5,
    borderRadius: 10,
    shadowColor: color.colors.black,
    elevation: 5,
    width: "45%",
    marginVertical: 5,
  },
  clockTextCover: {
    backgroundColor: color.colors.gray,
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
  },
  clockText: {
    fontSize: 16,
    fontWeight: "bold",
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
