import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  Entypo,
  MaterialIcons,
  Feather,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Topbar from "../../components/Topbar";
import { useNavigation } from "@react-navigation/native";
import color from "../../constant/color";
import MenuBar from "../../components/MenuBar";
import ReminderDropdown from "../../components/ReminderDropdown";
import ProfileName from "../../components/ProfileName";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { Pressable } from "react-native";
import ImageSlider from "../../components/ImageSlider";
import SelectDropdown from "react-native-select-dropdown";
import Slider from "@react-native-community/slider";
import MedicineUpload from "../../components/MedicineUpload"

const AddMedicineScreen = () => {
  const navigation = useNavigation();
  const [medicineAmount, setMedicineAmount] = useState(1);
  const MedicineCounterdata = ["Pill", "tablet", "capsule"];
  const [sliderValue, setSliderValue] = useState(1);
  const [timeIntervals, setTimeIntervals] = useState(
    Array(sliderValue).fill(new Date())
  );
  const [showPicker, setShowPicker] = useState(false);
  const [selectedInterval, setSelectedInterval] = useState(null);
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState();
  const [showDate1Picker, setShowDate1Picker] = useState(false);
  const [dateChanger, setDateChanger] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filterLength,setFilterLength]=useState();
  const [lessThenArray, setLessThenArray] = useState([]);
  const [updatedIntervals,setUpdatedInterval]=useState([]);

  useEffect(() => {
    const newEndDate = new Date();
    newEndDate.setDate(date1.getDate() + calculateTotalDays());
    setDate2(newEndDate);
  }, [medicineAmount, sliderValue, date1]);

  useLayoutEffect(()=>{
    GetTimesArray();
  },[timeIntervals,medicineAmount])

  const GetTimesArray=()=>{
  //  timeIntervals.map((item,index)=>{
  //   const Format = item.toLocaleTimeString([], {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  //   const CurrentTime = currentTime.toLocaleTimeString([], {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  //  console.log(`Index :- ${index} Item :- ${Format}`);
  //  if(Format<CurrentTime){
  //   setUpdatedInterval(updatedIntervals.concat(Format));
  //  }
  //  })

  //  console.log("Updated Array :- ",updatedIntervals);

  const filteredTimesArray = timeIntervals.filter(time => new Date(time) >= currentDate);
  console.log(`Filtered Array ${filteredTimesArray}`);

  while (filteredTimesArray.length < medicineAmount) {

    // Add the times from the original array to meet the count requirement
  
    filteredTimesArray.push(...timeIntervals);
  
  }
  console.log(`Upadted Filtered Array ${filteredTimesArray}`);

  const finalArray = filteredTimesArray.slice(0, 10);

console.log(`Upadted finalArray ${filteredTimesArray}`);

const localTimesArray = finalArray.map(time => {


  const date = new Date(time);
console.log(date)
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

});
 
console.log(localTimesArray);

   
  }

  const calculateTotalDays = () => {
    return Math.ceil(medicineAmount / sliderValue);
  };
  const onValueChange = (value) => {
    setSliderValue(value);
    setTimeIntervals(Array(value).fill(new Date()));
  };
 
  const handleTimeChange = (event, selectedTime) => {
    if (selectedInterval !== null) {
      const updatedIntervals = [...timeIntervals];
      updatedIntervals[selectedInterval] = selectedTime || new Date();
      setTimeIntervals(updatedIntervals);
      selectedTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    setShowPicker(Platform.OS === "ios"); // For iOS, show the time picker again
  };

  const renderTimePicker = () => {
    if (showPicker) {
      return (
        <DateTimePicker
          value={timeIntervals[selectedInterval] || new Date()}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={(event, selectedTime) =>
            handleTimeChange(event, selectedTime)
          }
        />
      );
    }
    return null;
  };

  const incrementCounter = () => {
    setMedicineAmount(medicineAmount + 1);
    console.log("Medicine amount",medicineAmount);
  };

  const decrementCounter = () => {
    if (medicineAmount > 1) {
      setMedicineAmount(medicineAmount - 1);
    }
  };

  const TimeClock = ({ index }) => (
    <TouchableOpacity
      style={styles.howManyTimescontainer}
      onPress={() => handleClockPress(index)}
    >
      <View style={styles.howManyTimesclockTextCover}>
        <Text style={styles.howManyTimesclockText}>
          {timeIntervals[index].toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
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
    console.log(index);
  };
  const handleDateChange = (
    event,
    selectedDate,
    setDateFunction,
    setShowFunction
  ) => {
    setDateChanger(true);
    const currentDate = selectedDate || date1;
    setDateFunction(currentDate);
    setSelectedDate(currentDate);

    setShowFunction(Platform.OS === "ios"); // For iOS, show the date picker again
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        {/* topbar */}
        <View style={styles.topBarConatiner}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1 }}>
            <Topbar title={"Never miss a medication again !"} />
          </TouchableOpacity>
        </View>

        {/* menubar */}
        <MenuBar />

        {/* reminder */}
        <ReminderDropdown title={"Medicine & Pill Reminder"} />
        {/* slider */}
        <ImageSlider />

        {/* profile */}
        <View style={{ marginHorizontal: 20 }}>
          <ProfileName />
        </View>
        {/* medicine upload */}
        <MedicineUpload/>

        {/* Medicine Count */}
        <View style={styles.MedicineCountermain}>
          <View style={styles.MedicineCountermedicineAmountCover}>
            <View style={styles.MedicineCountermedicineAmountText}>
              <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                {medicineAmount}
              </Text>
            </View>
          </View>

          <View style={styles.MedicineCounterbuttonCover}>
            <TouchableOpacity onPress={incrementCounter}>
              <Feather
                name="plus-circle"
                size={25}
                color={color.colors.secondaryGreen}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.MedicineCounterbuttonCover}>
            <TouchableOpacity onPress={decrementCounter}>
              <Feather
                name="minus-circle"
                size={25}
                color={color.colors.secondaryGreen}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.MedicineCounterdropdown}>
            <SelectDropdown
              data={MedicineCounterdata}
              buttonStyle={{
                backgroundColor: color.colors.gray,
                width: 100,
                shadowColor: color.colors.black,
                elevation: 5,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                height: 30,
              }}
              buttonTextStyle={{
                fontSize: 12,
                fontWeight: "bold",
              }}
              rowTextStyle={{
                fontSize: 12,
              }}
              defaultValueByIndex={0}
              renderDropdownIcon={() => (
                <SimpleLineIcons name="arrow-down" size={15} color="black" />
              )}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
            />
          </View>
        </View>

        {/* how many times in a day  */}
        <ScrollView style={{ marginVertical: 5 }}>
          <View style={styles.howManyTimesmain}>
            <Pressable style={styles.howManyTimestitleCover}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                How many times in a day
              </Text>
            </Pressable>
            <Pressable style={styles.howManyTimesdaysMainCover}>
              <View style={styles.howManyTimesdaysCover}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: 1,
                  }}
                >
                  {sliderValue} Times
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.howManyTimeSliderCover}>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={1}
              maximumValue={12}
              onValueChange={(value) => onValueChange(value)}
              step={1}
              value={sliderValue}
              maximumTrackTintColor={color.colors.secondaryGreen}
              minimumTrackTintColor={color.colors.primaryBlue}
              thumbImage={require("../../constant/assets/icons/trang.png")}
            />
          </View>
          <View style={styles.howManyTimestimeClockContainer}>
            {timeIntervals.map((interval, index) => (
              <TimeClock key={index} index={index} />
            ))}
          </View>
          {renderTimePicker()}
        </ScrollView>

        {/* how long need to continue */}
        <View style={styles.howLongMainCover}>
          <Pressable style={styles.howLongtitleCover}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              How Long Need to continue
            </Text>
          </Pressable>
          <Pressable style={styles.howLongdaysMainCover}>
            <View style={styles.howLongdaysCover}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: 1,
                }}
              >
                {calculateTotalDays()} Days
              </Text>
            </View>
          </Pressable>
        </View>
        {/* set date */}
        <View style={styles.setDatemain}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: color.colors.secondaryGreen,
              }}
            >
              Set Date
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              START
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              LAST
            </Text>
          </View>

          <View style={styles.setDatemainContainer}>
            <TouchableOpacity
              style={styles.setDatecontainer}
              onPress={() => setShowDate1Picker(true)}
            >
              <Text></Text>
              <View style={styles.setDateclockTextCover}>
                <Text style={styles.setDateclockText}>
                  {`${date1.getDate()}-${
                    date1.getMonth() + 1
                  }-${date1.getFullYear()}`}
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
                      handleDateChange(
                        event,
                        selectedDate,
                        setDate1,
                        setShowDate1Picker
                      )
                    }
                  />
                )}
              </View>
            </TouchableOpacity>

            <Pressable style={styles.setDatecontainer}>
              <View style={styles.setDateclockTextCover}>
                <Text
                  style={[styles.setDateclockText, { textAlign: "center" }]}
                >
                  {`${date2.getDate()}-${
                    date2.getMonth() + 1
                  }-${date2.getFullYear()}`}
                </Text>
              </View>
              <View></View>
            </Pressable>
          </View>
          {/* <TouchableOpacity
        style={styles.button}
        onPress={handleDatesSelected}
      >
        <Text style={styles.buttonText}>Select Dates</Text>
      </TouchableOpacity> */}
        </View>

        {/* main buttons */}

        <View style={styles.CoverBtn}>
          <TouchableOpacity style={styles.AddBtn}>
            <Text style={styles.btnText}>Delete It</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.MainAddBtn}>
            <Text style={styles.btnText}>Add More</Text>
            <AntDesign name="pluscircleo" size={24} color={color.colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.AddBtn}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/*clock  */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddMedicineScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.colors.white,
  },
  // Top bar
  topBarConatiner: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  // main button
  AddBtn: {
    backgroundColor: color.colors.primaryBlue,
    borderRadius: 20,
    alignItems: "center",
    padding: 8,
    flex: 1,
    justifyContent: "center",
  },
  CoverBtn: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 20,
    gap: 10,
  },
  btnText: {
    color: color.colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
  MainAddBtn: {
    backgroundColor: color.colors.primaryBlue,
    borderRadius: 20,
    alignItems: "center",
    padding: 8,
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  // how long need to continue
  howLongMainCover: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 20,
    gap: 10,
  },
  howLongtitleCover: {
    backgroundColor: color.colors.white,
    padding: 8,
    shadowColor: color.colors.black,
    elevation: 5,
    borderRadius: 10,
  },
  howLongdaysMainCover: {
    backgroundColor: color.colors.white,
    padding: 8,
    shadowColor: color.colors.black,
    elevation: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flex: 1,
  },
  howLongdaysCover: {
    backgroundColor: color.colors.gray,
    width: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 8,
  },
  // medicine upload
  medicineUploadmainCover: {
    flexDirection: "row",
    backgroundColor: color.colors.white,
    shadowColor: color.colors.black,
    elevation: 5,
    alignItems: "center",
    marginHorizontal: 20,
    gap: 10,
    borderRadius: 10,
    padding: 8,
    marginVertical: 2,
  },
  medicineUploadinput: {
    backgroundColor: color.colors.gray,
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    textAlign: "center",
    color: color.colors.black,
    fontSize: 15,
    fontWeight: "bold",
  },
  medicineUploaddivider: {
    borderRightWidth: 2,
    borderColor: color.colors.gray,
    paddingRight: "2%",
  },
  // medicineCounter
  MedicineCountermain: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 5,
    gap: 15,
    flex: 1,
  },
  MedicineCountermedicineAmountCover: {
    backgroundColor: color.colors.white,
    padding: 5,
    shadowColor: color.colors.black,
    elevation: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
  },
  MedicineCountermedicineAmountText: {
    backgroundColor: color.colors.gray,
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
  },
  MedicineCounterbuttonCover: {
    backgroundColor: color.colors.white,
    shadowColor: color.colors.black,
    elevation: 5,
    padding: 5,
    borderRadius: 5,
  },
  MedicineCounterdropdown: {
    backgroundColor: color.colors.white,
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: color.colors.black,
    elevation: 5,
  },
  // how many times in a day
  howManyTimestimeClockContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 25,
  },
  howManyTimesmain: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 20,
    gap: 10,
  },
  howManyTimestitleCover: {
    backgroundColor: color.colors.white,
    padding: 8,
    shadowColor: color.colors.black,
    elevation: 5,
    borderRadius: 10,
  },
  howManyTimesdaysMainCover: {
    backgroundColor: color.colors.white,
    padding: 8,
    shadowColor: color.colors.black,
    elevation: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flex: 1,
  },
  howManyTimesdaysCover: {
    backgroundColor: color.colors.gray,
    width: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 8,
  },
  howManyTimessliderContainer: {
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: color.colors.black,
    marginVertical: 5,
  },
  howManyTimescontainer: {
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
  howManyTimesclockTextCover: {
    backgroundColor: color.colors.gray,
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
  },
  howManyTimesclockText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  howManyTimeSliderCover: {
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: color.colors.black,
    elevation: 5,
    marginVertical: 5,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  // set date
  setDatemain: {
    backgroundColor: color.colors.white,
    shadowColor: color.colors.black,
    elevation: 5,
    padding: 5,
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  setDatemainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  setDatecontainer: {
    backgroundColor: color.colors.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 5,
    borderRadius: 10,
    shadowColor: color.colors.black,
    elevation: 5,
    width: "47%",
    marginVertical: 5,
  },
  setDateclockTextCover: {
    backgroundColor: color.colors.gray,
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
  },
  setDateclockText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  setDatebutton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  setDatebuttonText: {
    color: "white",
    fontSize: 16,
  },
});
