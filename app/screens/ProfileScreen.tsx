import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React from "react";
import { useUser, useAuth } from "@clerk/clerk-expo";
import ProfileItem from "../components/ProfileSection/ProfileItem";

const ProfileScreen = () => {
  const { user } = useUser();
  const { signOut } = useAuth();

  if (!user) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.container}>
        <Image source={{ uri: user.imageUrl }} style={styles.profileImage} />
        <Text style={styles.name}>{user.fullName || "No Name"}</Text>
        <Text style={styles.email}>
          {user.primaryEmailAddress?.emailAddress}
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.profileItem}
      >
        <ProfileItem item={"Notification Preferences"} icon={"notifications"} />
        <ProfileItem item={"Language"} icon={"language"} />
        <ProfileItem item={"Privacy Settings"} icon={"privacy-tip"} />
        <ProfileItem item={"Theme"} icon={"wb-sunny"} />
        <ProfileItem item={"My Courses"} icon={"book"} />
        <ProfileItem item={"Terms & Conditions"} icon={"gavel"} />
        <ProfileItem item={"Privacy Policy"} icon={"policy"} />
        <ProfileItem item={"Privacy Policy"} icon={"policy"} />
        <ProfileItem item={"FAQ"} icon={"help-outline"} />
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={() => signOut()}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: "92%",
    height: 250,
    marginTop: 10,
    borderRadius: 16,
    margin: "auto",
    backgroundColor: "white",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    marginTop: 32,
  },
  name: {
    fontSize: 22,
    fontFamily: "PopSb",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: "#888",
    marginBottom: 16,
    fontFamily: "PopReg",
  },
  logoutButton: {
    backgroundColor: "#e53935",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 6,
    width: 150,
    textAlign: "center",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "PopSb",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileItem: {
    borderRadius: 16,
    backgroundColor: "white",
    width: "92%",
    marginTop: 16,
    margin: "auto",
    height: "57%",
  },
});
