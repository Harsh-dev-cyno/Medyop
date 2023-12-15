import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const ImageSlider = () => {
        const images = [
        "https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg?w=1060&t=st=1700820884~exp=1700821484~hmac=400de192b0f1abc16a7fd7aeb0b2ffac1dffd650db7edf415135c0a4e4f35d46",
        "https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-stethoscope_23-2149611234.jpg?w=1060&t=st=1700821010~exp=1700821610~hmac=935755bf6c490a5c6468873facb1ccaf00d753a7063e5cfa54225b7e97bb1544",
        "https://img.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg?w=1060&t=st=1700821072~exp=1700821672~hmac=a032f1b8976f5e3e9ea8b107d4bea187439f98615203be8952df5549c6d9912a",
      ];
  return (
    <View style={{marginVertical:10}}>
    <SliderBox
    images={images}
    autoPlay
    circleLoop
    dotColor={"#DC5151"}
    inactiveDotColor={'#D68E8E'}
    ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
    />
  </View>
  )
}

export default ImageSlider

const styles = StyleSheet.create({})