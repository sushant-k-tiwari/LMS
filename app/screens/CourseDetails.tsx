import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import CourseList from "../components/HomeScreen/CourseList";
import DetailSection from "../components/CourseDetailSection/DetailSection";
import Colors from "../utils/Colors";
import ChapterSection from "../components/CourseDetailSection/ChapterSection";
import { enrollCourse } from "../services";
import { useUser } from "@clerk/clerk-expo";

const CourseDetails = () => {
  const navigation = useNavigation();
  const params = useRoute().params;
  const { user } = useUser();
  useEffect(() => {
    // console.log(params.course);
  }, [params.course]);

  const UserEnrollCourse = () => {
    console.log("Enroll button clicked"); 
    enrollCourse(
      params.course.id,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      console.log("Enroll Success:", resp);
    }).catch(err => {
      console.error("Enroll Error:", err);
    });
  };
  
  return (
    params.course && (
      <ScrollView>
        <View style={{ padding: 10 }}>
          <View style={styles.rootcontainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons
                name="arrow-back-circle-sharp"
                size={40}
                color="black"
              />
            </TouchableOpacity>
            <Text style={styles.courseText}>Course Details</Text>
          </View>
          <DetailSection course={params.course} enrollCourse={()=>{UserEnrollCourse()}} />
          <ChapterSection chapterList={params.course.chapters} />
        </View>
      </ScrollView>
    )
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  rootcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  courseText: {
    fontFamily: "PopBold",
    fontSize: 24,
  },
});
