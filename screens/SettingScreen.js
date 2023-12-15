import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Topbar from "../components/Topbar";
import color from "../constant/color";
import MenuBar from "../components/MenuBar";
import ReminderDropdown from "../components/ReminderDropdown";
import { MaterialCommunityIcons ,Entypo,Feather,AntDesign,Octicons,Fontisto} from "@expo/vector-icons";
import ReminderTime from "../components/ReminderTime";
import ReminderDate from "../components/ReminderDate";
import Animated, {
  FadeIn,
  FadeOut,
  BounceInRight,
  SlideOutLeft,
  BounceOutLeft,
  SlideInRight,
} from 'react-native-reanimated';
import ImageSlider from "../components/ImageSlider";

const SettingScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: color.colors.white, flex: 1 }}>
      <ScrollView>
        {/* Topbar */}
        <Topbar title={"Never miss a medication again !"} />

        {/* menubar */}
        <MenuBar />

        {/* Reminder */}
        <ReminderDropdown title={'REMINDER'}/>

        {/* Slider */}
        <ImageSlider />

        {/* In App Purchase */}
        <View style={styles.MainBtnCover}>
          <Text style={styles.heading}>In App Purchase</Text>

          <TouchableOpacity style={styles.btnCover}>
            <View>
              <MaterialCommunityIcons
                name="crown-outline"
                size={30}
                color={color.colors.iconColor}
              />
            </View>

            <View style={styles.btnTextCover}>
              <Text style={styles.btnText}>Upgrade to premium</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnCover}>
            <View>
              <Entypo
                name="cycle"
                size={30}
                color={color.colors.iconColor}
              />
            </View>

            <View
              style={styles.btnTextCover}
            >
              <Text
                style={styles.btnText}
              >
                Restore Purchase
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Spread the word */}

        <View style={styles.MainBtnCover}>
          <Text style={styles.heading}>
            Spread the word
          </Text>

          <TouchableOpacity
            style={styles.btnCover}
          >
            <View>
              <Feather
                name="star"
                size={30}
                color={color.colors.iconColor}
              />
            </View>

            <View
              style={styles.btnTextCover}
            >
              <Text style={styles.btnText}>
                Rate the App
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnCover}
          >
            <View>
              <AntDesign
                name="sharealt"
                size={30}
                color={color.colors.iconColor}
              />
            </View>

            <View
              style={styles.btnTextCover}
            >
              <Text
                style={styles.btnText}
              >
                Share the App
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*   react to us know more */}

        <View style={styles.MainBtnCover}>
          <Text style={styles.heading}>
          Reach to us & Know more           
          </Text>

          <TouchableOpacity
            style={styles.btnCover}
          >
            <View>
              <MaterialCommunityIcons
                name="email-receive-outline"
                size={30}
                color={color.colors.iconColor}
              />
            </View>

            <View
              style={styles.btnTextCover}
            >
              <Text style={styles.btnText}>
              E-Mail Us / Feed Back
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnCover}
          >
            <View>
              <MaterialCommunityIcons
                name="security"
                size={30}
                color={color.colors.iconColor}
              />
            </View>

            <View
              style={styles.btnTextCover}
            >
              <Text
                style={styles.btnText}
              >
                Privacy Policy
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnCover}
          >
            <View>
              <MaterialCommunityIcons
                name="file-document-edit-outline"
                size={30}
                color={color.colors.iconColor}
              />
            </View>

            <View
              style={styles.btnTextCover}
            >
              <Text
                style={styles.btnText}
              >
                Terns & Conditions
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnCover}
          >
            <View
            >
              <MaterialCommunityIcons
                name="book-information-variant"
                size={30}
                color={color.colors.iconColor}
              />
            </View>

            <View
              style={styles.btnTextCover}
            >
              <Text style={styles.btnText}>
              About us
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/*  Reminder  alert*/}
        <View style={styles.MainBtnCover}>
          
        <Animated.Text style={[styles.heading,{textAlign:'center'}]} entering={SlideInRight} exiting={SlideOutLeft}>
        Reminder alart and notification Settings 
          </Animated.Text>

<ReminderTime title={'Medicine & pill'}/>
<ReminderDate title={'Doctors, Lab & Diagnosis'}/>
<ReminderDate title={'Appointment & schedule'}/>
<ReminderDate title={'Document & License expiry'}/>
<ReminderTime title={'Water & food intake '}/>


          </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  MainBtnCover: {
    marginHorizontal: "5%",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  btnCover: {
    flexDirection: "row",
    backgroundColor: color.colors.white,
    borderRadius: 10,
    shadowColor: color.colors.black,
    elevation: 5,
    padding: '1%',
    alignItems: "center",
    marginVertical: 5,
  },
  btnTextCover: {
    flex: 1,
    backgroundColor: color.colors.gray,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
    marginLeft:5
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: color.colors.secondaryGreen,
    fontWeight: "bold",
  }
});
