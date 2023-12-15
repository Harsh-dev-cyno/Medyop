import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View>
      <Switch
        trackColor={{ false: '#D9D9D9', true: '#60CCDB' }}
        thumbColor={isEnabled ? '#F47C8C' : '#18616C'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default ToggleSwitch;
