import { View, Text } from 'react-native'
import React from 'react'
import Content from '../components/ChapterContent/Content'
import { useRoute } from '@react-navigation/native'

const ChapterContentScreen = () => {
  const route = useRoute();
  const params = route?.params;

  if (!params || !params.content) {
    console.log(params.content);
    
    return (
      <View>
        <Text>No content available</Text>
      </View>
    );
  }

  return params.content &&(
    <View>
      <Content content={params.content} />
    </View>
  );
};

export default ChapterContentScreen;
