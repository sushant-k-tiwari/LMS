import { View, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import LoginScreen from "./screens/LoginScreen";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

export default function Index() {
  const [loaded, error] = useFonts({
    'Pop': require('../assets/fonts/Poppins-Bold.ttf'),
    'Monst': require('../assets/fonts/Montserrat-SemiBoldItalic.ttf')
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
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
