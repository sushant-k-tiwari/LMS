import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons'

const SpecItems = ({icon, value}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <Ionicons name={icon} size={24} color="#1234" />
      <Text style={{ fontFamily: "PopReg" }}>
         {value}
      </Text>
    </View>
  );
};

export default SpecItems;

const styles = StyleSheet.create({
    
});
