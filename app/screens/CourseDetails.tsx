import {
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import DetailSection from "../components/CourseDetailSection/DetailSection";
import Colors from "../utils/Colors";
import ChapterSection from "../components/CourseDetailSection/ChapterSection";
import { enrollCourse, getUserEnrolledCourse } from "../services";
import { useUser } from "@clerk/clerk-expo";
import ToastManager, { Toast } from "toastify-react-native";

const CourseDetails = () => {
  const navigation = useNavigation();
  const params = useRoute().params;
  const { user } = useUser();
  const [userEnrolledCourse, setUserEnrolledCourse] = useState([]);

  useEffect(() => {
    // console.log(params.course);
    if (user && params.course) {
      GetUserEnrolledCourse();
    }
  }, [params.course, user]);

  const UserEnrollCourse = () => {
    enrollCourse(params.course.id, user?.primaryEmailAddress?.emailAddress)
      .then((resp) => {
        console.log("Enroll Success:", resp);
      })
      .catch((err) => {
        console.error("Enroll Error:", err);
      });
  };

  const GetUserEnrolledCourse = () => {
    getUserEnrolledCourse(
      params?.course.id,
      user?.primaryEmailAddress?.emailAddress
    )
      .then((resp) => {
        if (resp) {
          GetUserEnrolledCourse();
        }
        setUserEnrolledCourse(resp.userEnrolledCourses);
      })
      .catch((err) => {
        console.log("Error: ", err);
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
          <DetailSection
            course={params.course}
            userEnrolledCourse={userEnrolledCourse}
            enrollCourse={() => {
              UserEnrollCourse();
            }}
          />
          <ChapterSection
            chapterList={params.course.chapters}
            userEnrolledCourse={userEnrolledCourse}
          />
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
