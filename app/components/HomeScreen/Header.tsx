import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "@/app/utils/Colors";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";

const Header = () => {
  const [loaded, error] = useFonts({
    Pop: require("./../../../assets/fonts/Poppins-Regular.ttf"),
    Monst: require("./../../../assets/fonts/Montserrat-Medium.ttf"),
  });

  const { isLoaded, isSignedIn, user } = useUser();
  return (
    isLoaded && (
      <View>
        <View style={{ padding: 20, flex: 1, flexDirection: "row" }}>
          <Image source={{ uri: user?.imageUrl }} style={styles.userProfile} />
          <View>
            <Text style={[styles.userName, {fontFamily:"Pop"}]}>{user?.fullName}</Text>
          </View>
        </View>
      </View>
    )
  );
};

export default Header;

const styles = StyleSheet.create({
  userProfile: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  userName: {
    fontWeight: "bold",
    fontSize: 14,
    color: Colors.PRIMARY,
    marginTop: 10,
    marginLeft: 8,
  },
});
