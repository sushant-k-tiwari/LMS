import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const ChapterSection = ({ chapterList }) => {
  return (
    <View
      style={{
        padding: 10,
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 16,
      }}
    >
        <Text style={{fontSize:22, fontFamily:"PopSb"}}>Chapter</Text>
      {chapterList.map((item, index) => (
        <View
        key={item.id || item}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            borderWidth: 1,
            borderRadius: 16,
            marginTop: 10,
            borderColor: "gray",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text style={{ fontFamily: "PopMed", fontSize: 27, color: "gray" }}>
              {index + 1}
            </Text>
            <Text
              style={{
                fontFamily: "PopReg",
                fontSize: 20,
                flexWrap: "wrap",
                color: "gray",
              }}
            >
              {item.chapter}
            </Text>
          </View>
          <Ionicons name="lock-closed" size={25} color="gray" />
        </View>
      ))}
    </View>
  );
};

export default ChapterSection;

const styles = StyleSheet.create({});
