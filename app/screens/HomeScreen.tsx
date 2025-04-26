import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/HomeScreen/Header'
import Colors from '../utils/Colors'

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
      <Header/>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor: Colors.PRIMARY,
    height:250,
  }
})