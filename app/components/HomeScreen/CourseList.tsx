import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "@/app/services";

import CourseItem from "./CourseItem";
import { useNavigation } from "@react-navigation/native";

const CourseList = () => {
  const navigation = useNavigation();
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList().then((resp) => {
      // console.log("RESP:", resp);
      setCourseList(resp?.courses);
    });
  };
  return (
    <View>
      <Text style={styles.heading}>Popular Courses</Text>
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("course-details", {
                course:item
              });
            }}
          >
            <CourseItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  heading: {
    fontFamily: "PopBold",
    fontSize: 24,
    color: "white",
  },
});
