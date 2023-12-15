import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import color from "../constant/color";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
const FileUpload = () => {
  const navigation = useNavigation();
  const pickSomething = async () => {
    try {
      const docRes = await DocumentPicker.getDocumentAsync({
        type: "image/*",
      });

      console.log(docRes);
    } catch (error) {
      console.log("Error while selecting file: ", error);
    }
  };
  return (
    <View style={styles.mainCover}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Welcome To Account</Text>
      </View>

      <View style={styles.divider}>
        <TouchableOpacity onPress={pickSomething}>
          <Entypo name="upload" size={24} color={color.colors.primaryBlue} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <FontAwesome
            name="camera-retro"
            size={24}
            color={color.colors.primaryBlue}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FileUpload;

const styles = StyleSheet.create({
  mainCover: {
    flexDirection: "row",
    backgroundColor: color.colors.white,
    shadowColor: color.colors.black,
    elevation: 5,
    alignItems: "center",
    marginHorizontal: 20,
    gap: 10,
    borderRadius: 10,
    padding: 8,
    marginVertical: 5,
  },
  title: {
    color: color.colors.secondaryGreen,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  divider: {
    borderRightWidth: 2,
    borderColor: color.colors.gray,
    paddingRight: "2%",
  },
});
