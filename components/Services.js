import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import color from "../constant/color";
import { useNavigation } from "@react-navigation/native";

const Services = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      img: require("../constant/assets/icons/medicine.png"),
      title: "Medicine & Pill ",
      desc: "Leave your headache on us and improve your health",
      screen :'MainMedicine'
    },
    {
      id: 2,
      img: require("../constant/assets/icons/doctor.png"),
      title: "Doctors, Lab & Diagnosis",
      desc: "Always with you in the journey of improving your health ",
    },
    {
      id: 3,
      img: require("../constant/assets/icons/appointment.png"),
      title: "Appointment & Schedule",
      desc: "Let us assist you to track your health.",
    },
    {
      id: 4,
      img: require("../constant/assets/icons/document.png"),
      title: "Documents & license expiry",
      desc: "Remembering work, now leave on us",
    },
    {
      id: 5,
      img: require("../constant/assets/icons/water.png"),
      title: "Water & food intake",
      desc: "Remembering work, now leave on us",
    },
  ];
  return (
    <ScrollView>
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.mainCover} onPress={()=>navigation.navigate(item.screen)}>
          <Image source={item.img} style={styles.image} />

          <View style={styles.contentCover}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  mainCover: {
    backgroundColor: color.colors.white,
    flexDirection: "row",
    shadowColor: color.colors.black,
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 6,
  },
  image: {
    width: 50,
    height: 50,
  },
  contentCover: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    fontSize: 12,
    textAlign: "center",
    color: color.colors.secondaryGreen,
  },
});
