import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import color from "../constant/color";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";

const ReminderDropdown = ({title}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.mainCover}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <SimpleLineIcons name="arrow-down" size={15} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReminderDropdown;

const styles = StyleSheet.create({
  mainCover: {
    backgroundColor: color.colors.white,
    width: "90%",
    borderRadius: 30,
    shadowColor: color.colors.black,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: color.colors.textGray,
    flex: 1,
    textAlign: "center",
  },
});
