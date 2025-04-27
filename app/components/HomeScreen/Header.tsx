import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "@/app/utils/Colors";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { types } from "@babel/core";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    isLoaded && (
      <View>
        <View
          style={[styles.headerContainer, { justifyContent: "space-between" }]}
        >
          <View style={styles.headerContainer}>
            <Image
              source={{ uri: user?.imageUrl }}
              style={styles.userProfile}
            />
            <View>
              <Text style={[styles.userText,{fontSize:14}]}>Welcome,</Text>
              <Text style={[styles.userText, { fontSize: 18 }]}>
                {user?.fullName}
              </Text>
            </View>
          </View>
          <View style={styles.headerContainer}>
            <Image
              source={require("@/assets/images/coin.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={styles.userText}>3560</Text>
          </View>
        </View>
        <View style={styles.searchBar}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput placeholder="Search Courses" style={styles.searchText}/>
        </View>
      </View>
    )
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  userProfile: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  userText: {
    fontSize: 18,
    color: "white",
    fontFamily: "PopMed",
  },

  searchBar:{
    display:"flex",
    flexDirection:"row",
    backgroundColor: "white",
    paddingLeft:20,
    gap:15,
    alignItems:"center",
    borderRadius:36, 
    marginTop:25,
  },

  searchText:{
    fontFamily:"PopReg"
  },
});
