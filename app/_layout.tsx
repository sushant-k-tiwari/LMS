import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
 
    <Stack screenOptions={{ headerShown: false }} />
    
  );
}
