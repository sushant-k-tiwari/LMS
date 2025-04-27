import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/LoginScreen";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import HomeScreen from "@/app/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";

export default function Index() {
  const [loaded, error] = useFonts({
    PopBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PopMed: require("../assets/fonts/Poppins-Medium.ttf"),
    PopReg: require("../assets/fonts/Poppins-Regular.ttf"),
    PopSb: require("../assets/fonts/Poppins-SemiBold.ttf"),
    MonstBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MonstMed: require("../assets/fonts/Montserrat-Medium.ttf"),
    MonstReg: require("../assets/fonts/Montserrat-Regular.ttf"),
    MonstSb: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={
        "pk_test_dGhhbmtmdWwtcG9sZWNhdC00OC5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <View style={styles.container}>
        
        <SignedIn>
          <TabNavigation />
        </SignedIn>

        <SignedOut>
          <LoginScreen />
        </SignedOut>

      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
