import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Colors from "../utils/Colors";
import Individual from "../components/LeaderBoard/Individual";

const LeaderBoard = () => {
  return (
    <View>
      <View style={styles.topBanner}>
        <Text style={styles.text}>LeaderBoard</Text>
      </View>
      <View style={styles.leaderBoarContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Individual name={"Triumph"} id={49} rank={1} />
          <Individual name={"Prateek"} id={25} rank={2} />
          <Individual name={"Swarn"} id={13} rank={3} />
          <Individual name={"Priya"} id={64} rank={4} />
          <Individual name={"Prashant"} id={2} rank={5} />
          <Individual name={"Miranda"} id={66} rank={6} />
          <Individual name={"Andy"} id={30} rank={7} />
          <Individual name={"Mark"} id={11} rank={8} />
          <Individual name={"Sarah"} id={75} rank={9} />
          <Individual name={"Shikha"} id={61} rank={10} />
          <Individual name={"Sameer"} id={19} rank={11} />
          <Individual name={"Emma"} id={71} rank={12} />
        </ScrollView>
      </View>
    </View>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({
  topBanner: {
    height: 160,
    backgroundColor: Colors.PRIMARY,
    padding: 30,
  },
  text: {
    fontFamily: "PopBold",
    color: "white",
    fontSize: 30,
  },
  leaderBoarContainer: {
    backgroundColor: "white",
    marginLeft: 14,
    marginRight: 14,
    marginTop: -50,
    borderRadius: 16,
    marginBottom: 325,
  },
});
