import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { Image } from "react-native";
import color from "../constant/color";

const AccountForm = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

  const handleFocus1 = () => {
    setIsFocused1(true);
  };

  const handleBlur1 = () => {
    setIsFocused1(false);
  };

  const handleFocus2 = () => {
    setIsFocused2(true);
  };

  const handleBlur2 = () => {
    setIsFocused2(false);
  };

  const handleFocus3 = () => {
    setIsFocused3(true);
  };

  const handleBlur3 = () => {
    setIsFocused3(false);
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
  console.log(name, email, phone);
  return (
    <View style={styles.mainCover}>
      <View>
        <TouchableOpacity onPress={pickSomething}>
          <Image
            source={require("../constant/assets/User.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <TextInput
          placeholder={ isFocused1 ? '' : "Your Name"}       
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          onFocus={handleFocus1}
          onBlur={handleBlur1}
        />
        <TextInput
          placeholder={ isFocused2 ? '' : "Your Phone no"}
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          onFocus={handleFocus2}
          onBlur={handleBlur2}
          keyboardType={"numeric"}
        />
        <TextInput
          placeholder={ isFocused3 ? '' : "Your Email Id"}
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          onFocus={handleFocus3}
          onBlur={handleBlur3}
          keyboardType={"email-address"}
        />
      </View>
    </View>
  );
};

export default AccountForm;

const styles = StyleSheet.create({
  mainCover: {
    flexDirection: "row",
    marginVertical: 5,
    backgroundColor: color.colors.white,
    shadowColor: color.colors.black,
    elevation: 5,
    padding: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    gap: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  input: {
    backgroundColor: color.colors.gray,
    marginVertical: 3,
    color: color.colors.black,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
