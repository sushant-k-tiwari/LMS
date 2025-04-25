import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import Colors from './../utils/Colors'


const LoginScreen = () => {
    const [loaded, error] = useFonts({
        'Pop': require('./../../assets/fonts/Poppins-Bold.ttf'),
        'Monst': require('./../../assets/fonts/Montserrat-SemiBoldItalic.ttf')
      });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.contentContainer}>
        
        
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/images/login-image.png")}/>
        </View>
        

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Grow Your Soft Skill</Text>
          <Text style={styles.titleText}>And</Text>
          <Text style={styles.titleText}>Be More Creative</Text>
        </View>
        
        {/* Google Sign In Button */}
        <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
          <View style={styles.googleButtonContent}>
            <View style={{marginRight:20}}>
              {/* <Text style={styles.googleIconText}>G</Text> */}
              <Image source={require('./../../assets/images/google.png')}
              style={{width:35,
                height:35,
              }}
               />
            </View>
            <Text style={styles.buttonText}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PRIMARY,
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    imageContainer: {
        width: 200,
        height: 220,
        marginTop:80,
        marginBottom: 60,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
      marginTop:60,
        marginBottom: 50,
        alignItems: 'center',
    },
    titleText: {
        color: 'white',
        fontSize: 24,
        fontFamily:"Pop",
        textAlign: 'center',
        lineHeight: 36,
    },
    googleButton: {
        backgroundColor: 'white',
        borderRadius: 25,
        paddingVertical: 13,
        paddingHorizontal: 20,
        width: '90%',
        maxWidth: 300,
    },
    googleButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    googleIconText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#32073f',
    },
    
})


