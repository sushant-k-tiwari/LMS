import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../utils/Colors";
import CourseItem from "../components/HomeScreen/CourseItem";
import CourseList from "../components/HomeScreen/CourseList";
import EnrolledCourses from "@/app/components/MyCourse/EnrolledCourses";

const MyCourses = () => {
  return (
    <View style={styles.topBanner}>
      <Text style={styles.text}>My Courses</Text>
      <View
        style={{
          width: 320,
          height: 590,
          margin: "auto",
          display: "flex",
        }}
      >
        <EnrolledCourses />
      </View>
    </View>
  );
};

export default MyCourses;

const styles = StyleSheet.create({
  topBanner: {
    height: 160,
    backgroundColor: Colors.PRIMARY,
    padding: 30,
  },
  text: {
    fontFamily: "PopBold",
    color: "white",
    fontSize: 30,
  },
});
