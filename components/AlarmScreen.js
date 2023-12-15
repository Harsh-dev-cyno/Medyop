import React from 'react';
import { View, Text, Image } from 'react-native';

const AlarmScreen = ({ currentTime }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../constant/assets/icons/doctor.png')}
        style={{ width: 100, height: 100 }}
      />
      <Text style={{ fontSize: 24, marginTop: 20 }}>{currentTime}</Text>
    </View>
  );
};

export default AlarmScreen;
