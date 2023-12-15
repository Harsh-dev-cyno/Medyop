import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import color from "../constant/color";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
const MedicineUpload = () => {
  const [medicineName, setMedicineName] = useState();
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
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
        <TextInput
          placeholder={isFocused ? '' : "Medicine Name"}
          style={styles.input}
          onChangeText={(text) => setMedicineName(text)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
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

export default MedicineUpload;

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
    marginVertical: 2,
  },
  input: {
    backgroundColor: color.colors.gray,
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    textAlign: "center",
    color: color.colors.black,
    fontSize: 15,
    fontWeight: "bold",
  },
  divider: {
    borderRightWidth: 2,
    borderColor: color.colors.gray,
    paddingRight: "2%",
  },
});
