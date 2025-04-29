import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/app/utils/Colors";
import { useNavigation } from "@react-navigation/native";

const ChapterSection = ({ chapterList, userEnrolledCourse }) => {
  const navigation = useNavigation();
  const onChapterPress = (content) => {
    if (userEnrolledCourse.length == 0) {
      return;
    } else {
      navigation.navigate("chapter-content", {content});
    }
  };
  return (
    <View style={styles.rootContainer}>
      <Text style={{ fontSize: 22, fontFamily: "PopSb" }}>Chapter</Text>
      {chapterList.map((item, index) => (
        <TouchableOpacity
          key={item.id || item}
          style={[styles.chapterWrapper]}
          onPress={() => {
            onChapterPress(item?.content);
          }}
        >
          <View style={styles.chapterContainer}>
            <Text style={styles.chapterList}>{index + 1}</Text>
            <Text style={styles.chapterTitle}>{item.chapter}</Text>
          </View>
          {userEnrolledCourse == 0 ? (
            <Ionicons name="lock-closed" size={25} color="gray" />
          ) : (
            <Ionicons name="play-circle" size={25} color={Colors.SECONDARY} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChapterSection;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 16,
  },
  chapterWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 10,
    borderColor: "gray",
  },
  chapterContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  chapterList: {
    fontFamily: "PopMed",
    fontSize: 27,
    color: "gray",
  },
  chapterTitle: {
    fontFamily: "PopReg",
    fontSize: 20,
    flexWrap: "wrap",
    color: "gray",
  },
});
