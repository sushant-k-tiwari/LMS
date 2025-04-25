import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/LoginScreen";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Next from "./screens/Next";

export default function Index() {
  const [loaded, error] = useFonts({
    Pop: require("../assets/fonts/Poppins-Bold.ttf"),
    Monst: require("../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
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
          <Next/>
        </SignedIn>
        <SignedOut>
          <LoginScreen/>
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
