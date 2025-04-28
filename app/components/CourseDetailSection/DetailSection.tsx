import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SpecItems from "./SpecItems";
import Colors from "@/app/utils/Colors";
import { getBackgroundColorAsync } from "expo-system-ui";

const DetailSection = ({ course }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: course?.banner?.url }}
        style={{
          width: Dimensions.get("screen").width * 0.88,
          height: 200,
          borderRadius: 16,
          marginTop: 5,
        }}
      />

      <View style={{ padding: 10 }}>
        <Text style={styles.titleStyle}>{course.name}</Text>

        <View style={styles.rowStyle}>
          <SpecItems
            icon={"book-outline"}
            value={course?.chapters?.length + " Chapters"}
          />
          <SpecItems icon={"time-outline"} value={course?.time} />
          <SpecItems icon={"person-outline"} value={course?.author} />
        </View>
        <View>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionText}>
            {course.description?.markdown}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity style={styles.buttonWrap}>
            <Text style={styles.buttonText}>Enroll for ₹{course.price}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonWrap, { backgroundColor: Colors.SECONDARY }]}
          >
            <Text style={styles.buttonText}>Membership ₹99/Mon</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailSection;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: 10,
  },
  titleStyle: {
    fontSize: 22,
    fontFamily: "PopSb",
  },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  description: {
    fontSize: 20,
    fontFamily: "PopSb",
    marginTop: 16,
  },
  descriptionText: {
    fontFamily: "PopReg",
    color: "gray",
    lineHeight: 25,
  },
  buttonWrap: {
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "PopMed",
    textAlign: "center",
  },
});
