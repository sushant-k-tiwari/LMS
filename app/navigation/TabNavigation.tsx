import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

import HomeScreen from "@/app/screens/HomeScreen";
import MyCourses from "../screens/MyCourses";
import LeaderBoard from "../screens/LeaderBoard";
import ProfileScreen from "../screens/ProfileScreen";
import Colors from "../utils/Colors";
import HomeScreenNavigation from "./HomeScreenNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={Colors.SECONDARY} />
          ),
        }}
      />
      <Tab.Screen
        name="My Courses"
        component={MyCourses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="book" size={size} color={Colors.SECONDARY} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="leaderboard"
              size={size}
              color={Colors.SECONDARY}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="supervised-user-circle"
              size={size}
              color={Colors.SECONDARY}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
