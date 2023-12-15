import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import color from "../constant/color";
import Topbar from "../components/Topbar";
import MenuBar from "../components/MenuBar";
import ReminderDropdown from "../components/ReminderDropdown";
import ImageSlider from "../components/ImageSlider";
import FileUpload from "../components/FileUpload";
import { TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import ProfileName from "../components/ProfileName";
import AccountForm from "../components/AccountForm";

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.mainCover}>
      <ScrollView>
        {/* Topbar */}
        <Topbar title={"Ready to  assist & remind "} />

        {/* Menu bar */}
        <MenuBar />
        {/* reminder dropdown */}

        <ReminderDropdown title={'REMINDER'} />

        {/* Slider */}
        <ImageSlider />

        {/* welcome to fileupload */}
        <FileUpload />

        {/* Account form */}
        <AccountForm />

        {/* Buttons */}

        <View style={styles.btnContainer}>
          <View style={{ width: "40%" }}>
            <TouchableOpacity style={styles.passwordbtnCover}>
              <Text
                style={styles.passwordbtnText}
              >
                Password
              </Text>
              <Ionicons
                name="md-settings-sharp"
                size={24}
                color={color.colors.secondaryGreen}
              />
            </TouchableOpacity>
          </View>

          <View style={{ width: "40%" }}>
            <AlertTone />
          </View>
        </View>

        {/*   react to us know more */}

        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Reach to us & Know more
          </Text>

          <TouchableOpacity style={styles.btnCover}>
            <View>
              <AntDesign
                name="sharealt"
                size={30}
                color={color.colors.iconColor}
              />
            </View>

            <View style={styles.btnTextCover}>
              <Text style={styles.btnText}>Share the App</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.heading}>
        All reminders and schedule of the profile
      </Text>
          <ProfileName />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const AlertTone = () => {
  const tunes = ["Happy", "Sad", "Cry", "Bell"];
  return (
    <SelectDropdown
      data={tunes}
      defaultButtonText="Alert tone"
      buttonStyle={{
        backgroundColor: color.colors.gray,
        borderRadius: 50,
        width: "100%",
        shadowColor: color.colors.black,
        elevation: 5,
      }}
      buttonTextStyle={{
        fontSize: 15,
        fontWeight: "bold",
      }}
      renderDropdownIcon={() => (
        <AntDesign name="down" size={14} color="black" />
      )}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
    />
  );
};
export default AccountScreen;

const styles = StyleSheet.create({
  mainCover: {
    backgroundColor: color.colors.white,
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    marginVertical: 5,
  },
  passwordbtnCover: {
    backgroundColor: color.colors.gray,
    padding: 11,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: color.colors.black,
    elevation: 5,
  },
  passwordbtnText :{
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  btnCover: {
    flexDirection: "row",
    backgroundColor: color.colors.white,
    borderRadius: 10,
    shadowColor: color.colors.black,
    elevation: 5,
    padding: "1%",
    alignItems: "center",
    marginVertical: 5,
  },
  btnTextCover: {
    flex: 1,
    backgroundColor: color.colors.gray,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
    marginLeft: 5,
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: color.colors.secondaryGreen,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
