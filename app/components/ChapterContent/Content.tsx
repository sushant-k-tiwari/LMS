import { View, FlatList, Dimensions } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Markdown from "react-native-markdown-display";

const Content = () => {
  const route = useRoute();
  const { content } = route.params;

  const sections =
    content.markdown
      ?.split(/\n\n(?=##|\*\*)/) // simple split by paragraph with headings
      .filter(Boolean) || [];

  const markdownStyles = {
    heading1: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#2C3E50",
      marginBottom: 10,
      fontFamily: "PopBold",
    },
    heading2: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#34495E",
      marginTop: 10,
      marginBottom: 8,
      fontFamily: "PopBold",
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 24,
      color: "#2F2F2F",
      fontFamily: "PopReg",
    },
    strong: {
      // fontFamily: "MonstSb",
      fontSize: 24,
    },
    code_inline: {
      backgroundColor: "#3d3d3d",
      borderRadius: 14,
      fontFamily: "MonstReg",
      color: "white",
    },
    bullet_list: {
      marginLeft: 16,
      fontFamily: "PopReg",
    },
    list_item: {
      fontSize: 16,
      color: "#2F2F2F",
    },
    codeBlock: {
      backgroundColor: "#2d2d2d",
      color: "#f8f8f2",
      padding: 12,
      borderRadius: 6,
      fontFamily: "monospace", // Customize font family
      fontSize: 14,
    },
  };

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "white",
        width: Dimensions.get("screen").width * 0.94,
        display: "flex",
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        height: "97%",
      }}
    >
      <FlatList
        data={sections}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20, marginTop: 20 }}>
            <Markdown style={markdownStyles}>{item}</Markdown>
          </View>
        )}
      />
    </View>
  );
};

export default Content;
