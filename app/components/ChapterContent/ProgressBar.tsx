import { View, Text } from "react-native";
import React from "react";
import Colors from "@/app/utils/Colors";

const ProgressBar = ({ contentLength, contentIndex }) => {
  console.log(contentLength);
  
  const arraySize = Array.from(
    { length: contentLength },
    (_, index) => index + 1
  );
  const width = 100 / contentLength;

  // console.log('Rendering ProgressBar', contentLength, contentIndex);
  return (
    <View style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
      {arraySize.map((item, index) => (
        <View
        key={index}
          style={{
            backgroundColor: Colors.PROGRESS_BAR,
            width: width+"%",
            height: 10,
            borderRadius: 10,
            margin: 5,
          }}
        ></View>
      ))}
    </View>
  );
};

export default ProgressBar;
