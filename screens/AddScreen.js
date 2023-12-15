import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import color from "../constant/color";

const AddMedicineScreen = () => {
  // ... (your existing code)

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date()); // Set default end date here
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
      // Update the end date when the start date changes
      const newEndDate = new Date(selectedDate);
      newEndDate.setDate(selectedDate.getDate() + totalDays);
      setEndDate(newEndDate);
    }
  };

  const handleEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(false);
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  const showStartDate = () => {
    setShowStartDatePicker(true);
  };

  const showEndDate = () => {
    setShowEndDatePicker(true);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* ... (your existing code) */}

      {/* set date */}
      <View style={styles.setDatemain}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: color.colors.secondaryGreen }}>Set Date</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={showStartDate}>
            <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>{formatDate(startDate)}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showEndDate}>
            <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>{formatDate(endDate)}</Text>
          </TouchableOpacity>
        </View>

        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleStartDateChange}
          />
        )}

        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleEndDateChange}
          />
        )}
      </View>

      {/* ... (your existing code) */}
    </SafeAreaView>
  );
};

// Helper function to format date
const formatDate = (date) => {
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return formattedDate;
};

const styles = StyleSheet.create({

})
export default AddMedicineScreen;
