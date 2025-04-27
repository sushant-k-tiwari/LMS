import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/HomeScreen/Header";
import Colors from "../utils/Colors";
import CourseList from "../components/HomeScreen/CourseList";
import AlsoView from "../components/HomeScreen/AlsoView";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={{ padding: 18 }}>
        <View style={{ marginTop: -120 }}>
          <CourseList/>
          <View style={styles.alsoViewContainer}>
            <AlsoView/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    backgroundColor: Colors.PRIMARY,
    height: 290,
    padding: 20,
  },
  alsoViewContainer: {
    marginTop: 20,
    marginBottom: 100,
  }
});
