import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from "@react-native-community/datetimepicker";
import { Entypo,MaterialIcons } from "@expo/vector-icons";
import color from "../constant/color";
import { TouchableOpacity } from 'react-native';

const SetDate = ({onDatesSelected}) => {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [showDate1Picker, setShowDate1Picker] = useState(false);
    const [showDate2Picker, setShowDate2Picker] = useState(false);
    const [dateChanger,setDateChanger]=useState(false)

    const handleDateChange = (
        event,
        selectedDate,
        setDateFunction,
        setShowFunction,
        otherDate
      
      ) => {
        setDateChanger(true)
        const currentDate = selectedDate || date1;
        setDateFunction(currentDate);
      onDatesSelected({
        startDate: otherDate === "date1" ? currentDate.toISOString() : date1.toISOString(),
        endDate: otherDate === "date2" ? currentDate.toISOString() : date2.toISOString(),
        })
        // console.log("start",date1.toISOString(),"end",date2.toISOString());
        // console.log(selectedDate);

        setShowFunction(Platform.OS === "ios"); // For iOS, show the date picker again
      };
  
  return (
    <View style={styles.main}>
        <View><Text style={{fontSize:16,fontWeight:'bold',color:color.colors.secondaryGreen}}>Set Date</Text></View>
        <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-around'}}><Text style={{flex:1,textAlign:'center',fontWeight:'bold',fontSize:15}}>START</Text><Text style={{flex:1,textAlign:'center',fontWeight:'bold',fontSize:15}}>LAST</Text></View>
       
    <View style={styles.mainContainer}>
              <TouchableOpacity style={styles.container} onPress={() => setShowDate1Picker(true)}>
                <Text></Text>
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
    {/* <TouchableOpacity
        style={styles.button}
        onPress={handleDatesSelected}
      >
        <Text style={styles.buttonText}>Select Dates</Text>
      </TouchableOpacity> */}
    </View>

  )
}

export default SetDate

const styles = StyleSheet.create({
    main:{
        backgroundColor:color.colors.white,
        shadowColor:color.colors.black,
        elevation:5,
        padding:5,
        alignItems:'center',
        marginVertical:5,
        marginHorizontal:20,
        borderRadius:10
    },
    mainContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'center',
        gap:15
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
})