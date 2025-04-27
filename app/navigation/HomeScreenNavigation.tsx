import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CourseDetails from "../screens/CourseDetails";

const Stack = createStackNavigator();

const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="course-details" component={CourseDetails} />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigation;

const styles = StyleSheet.create({});
