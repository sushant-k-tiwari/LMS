import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler";

type CourseItemProps = {
  item: {
    id: string;
    name: string;
    price: number;
    time: string;
    banner: {
      url: string;
    };
    chapters: Array<any>; 
  };
};

const CourseItem = ({ item }: CourseItemProps) => {
  return (
    <View style={styles.imageView}>
      <Image
        source={{ uri: item?.banner?.url }}
        style={{ width: 280, height: 150, borderRadius: 16 }}
      />
      <View style={{ padding: 8 }}>
        <Text style={{ fontFamily: "PopSb", fontSize: 16 }}>{item?.name}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <MaterialIcons name="book" size={24} color="#1234" />
            <Text style={{ fontFamily: "PopReg" }}>
              {item?.chapters?.length} Chapters
            </Text>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <AntDesign name="clockcircleo" size={20} color="#1234" />
              <Text style={{ fontFamily: "PopReg" }}>{item?.time}</Text>
            </View>
          </View>
        </View>
        <Text style={{ fontFamily: "PopSb", marginTop: 5, marginLeft: 5 }}>
          ₹ {item.price}
        </Text>
        <View></View>
      </View>
    </View>
  );
};

export default CourseItem;

const styles = StyleSheet.create({
  heading: {
    fontFamily: "PopBold",
    fontSize: 24,
    color: "white",
  },
  imageView: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 16,
    marginRight: 16,
  },
});
