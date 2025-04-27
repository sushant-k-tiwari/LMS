import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ViewComponent,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "@/app/services";
import Colors from "@/app/utils/Colors";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler";

const CourseList = () => {
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
          <View style={styles.imageView}>
            <Image
              source={{ uri: item?.banner?.url }}
              style={{ width: 280, height: 150, borderRadius: 16 }}
            />
            <View style={{ padding: 8 }}>
              <Text style={{ fontFamily: "PopSb", fontSize: 16 }}>
                {item?.name}
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <MaterialIcons name="book" size={24} color="#1234" />
                  <Text style={{ fontFamily: "PopReg" }}>
                    {item?.chapters?.length} Chapters
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <AntDesign name="clockcircleo" size={20} color="#1234" />
                    <Text style={{ fontFamily: "PopReg" }}>{item?.time}</Text>
                  </View>
                </View>
              </View>
              <Text
                style={{ fontFamily: "PopSb", marginTop: 5, marginLeft: 5 }}
              >
                ₹ {item.price}
              </Text>
              <View></View>
            </View>
          </View>
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
  imageView: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 16,
    marginRight: 16,
  },
});
