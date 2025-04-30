import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Individual = ({ name, id, rank }) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>
        {rank}
      </Text>
      <Image
        source={{ uri: `https://avatar.iran.liara.run/public/${id}` }}
        style={{ width: 60, height: 60, borderRadius: 50 }}
        resizeMode="cover"
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Individual;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 16,
    borderRadius: 16,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontFamily: "PopMed",
    fontSize: 24,
    textAlign: "center",
  },
});
