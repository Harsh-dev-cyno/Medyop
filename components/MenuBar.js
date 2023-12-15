import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import color from "../constant/color";
const MenuBar = () => {
  return (
    <View style={styles.mainCover}>
      <TouchableOpacity>
        <SimpleLineIcons name="menu" size={20} color="black" />
      </TouchableOpacity>

      <View style={styles.profileCover}>
        <Text style={styles.profileTitle}>Profile</Text>
        <TouchableOpacity>
          <SimpleLineIcons name="arrow-down" size={15} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
  mainCover: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 8,
    marginTop: 10,
    alignItems: "center",
  },
  profileCover: {
    backgroundColor: color.colors.gray,
    width: "80%",
    borderRadius: 30,
    shadowColor: color.colors.black,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  profileTitle: {
    fontSize: 15,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
});
