import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import color from "../constant/color";
import SelectDropdown from "react-native-select-dropdown";
import { Alert } from "react-native";

const ProfileName = () => {
  const [profileName, setProfileName] = useState("");
  const [profileNames, setProfileNames] = useState([]);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const addUser = () => {
    if (profileName.trim() !== "") {
      setProfileNames([...profileNames, profileName]);
      Alert.alert("Notification", "Added Succesfully", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      setProfileName(profileName);
    }
  };

  const DropDown = () => {
    return (
      <SelectDropdown
        data={profileNames.map((text) => text)}
        buttonStyle={{
          backgroundColor: color.colors.white,
          width: 65,
        }}
        buttonTextStyle={{
          fontSize: 12,
        }}
        rowTextStyle={{
          fontSize: 12,
        }}
        defaultButtonText={
          <AntDesign
            name="downsquare"
            size={30}
            color={color.colors.iconColor}
          />
        }
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setSelectedUserName(selectedItem);
        }}
      />
    );
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={styles.mainCover}>
        <View>
          <TouchableOpacity onPress={addUser} style={{ paddingHorizontal: 15 }}>
            <FontAwesome
              name="plus-square"
              size={30}
              color={color.colors.iconColor}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputCover}>
          <TextInput
            style={styles.input}
            placeholder={isFocused ? "" : "Profile Name "}
            value={selectedUserName === "" ? profileName : selectedUserName}
            onChangeText={(text) => setProfileName(text)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        <View>
          <TouchableOpacity>
            {/* <AntDesign
              name="downsquare"
              size={30}
              color={color.colors.iconColor}
            /> */}
            <DropDown />
          </TouchableOpacity>
        </View>
      </View>
      {/* <DropDown /> */}
    </View>
  );
};

export default ProfileName;

const styles = StyleSheet.create({
  mainCover: {
    flexDirection: "row",
    backgroundColor: color.colors.white,
    shadowColor: color.colors.black,
    elevation: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  inputCover: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.colors.gray,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 5,
  },
  input: {
    fontSize: 14,
    fontWeight: "bold",
    color: color.colors.secondaryGreen,
    textAlign: "center",
  },
});
