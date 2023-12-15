import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  Entypo,
  Ionicons,
  SimpleLineIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import color from "../constant/color";
import ImageSlider from "../components/ImageSlider";
import Services from "../components/Services";
import Topbar from "../components/Topbar";
import MenuBar from "../components/MenuBar";
import ReminderDropdown from "../components/ReminderDropdown";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:color.colors.white}}>
      <ScrollView>
       
       {/* Topbar */}
       <Topbar title={'Ready to  assist & remind '}/>

        {/* Menu bar */}
        <MenuBar/>
        {/* reminder dropdown */}

        <ReminderDropdown title={'REMINDER'}/>

        {/* Slider */}
        <ImageSlider/>

        {/* Services */}
        <Services/>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
