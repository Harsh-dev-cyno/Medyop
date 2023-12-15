import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useState } from "react";
import color from "../constant/color";
import ToggleSwitch from "./ToggleSwitch";
import DropDown from "./DropDown";
import TimeSetClock from "./TimeClock";
import DateTimeClock from "./DateTimeClock";
const ReminderDate = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <>
      <View style={styles.mainCover}>
        <View>
          <Switch
            trackColor={{ false: "#D9D9D9", true: "#60CCDB" }}
            thumbColor={isEnabled ? "#F47C8C" : "#18616C"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
          />
        </View>

        <View style={styles.titleCover}>
          <Text style={styles.title}>{props.title}</Text>
        </View>

        <View>
          <DropDown />
        </View>
      </View>
      {isEnabled ? <DateTimeClock /> : null}
    </>
  );
};

export default ReminderDate;

const styles = StyleSheet.create({
  mainCover: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: color.colors.white,
    shadowColor: color.colors.black,
    elevation: 5,
    borderRadius: 10,
    marginVertical: 5,
    padding: 4,
  },
  titleCover: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 1,
  },
});
