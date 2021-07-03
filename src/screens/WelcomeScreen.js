import React from "react";
import {  StatusBar, Text, StyleSheet, ImageBackground, Image, View} from "react-native";
import ButtonOne from '../buttons/ButtonOne';
import ButtonTwo from '../buttons/ButtonTwo';
import Spacer from '../components/Spacer';

const WelcomeScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
          <ImageBackground style={styles.welcomeBg} source={require('../../assets/images/welcomebg.png')}>
              <View style={styles.imageContainer}><Image source={require('../../assets/images/resizedlogo.png')} style={styles.logo} /></View>
              <Text style={styles.h3}>Unlimited Naija Movies</Text>
              <View><Text style={styles.streamText}>Stream unlimited movies and TV shows on your phone</Text></View>
              <Spacer />
              <Spacer />
              <Spacer>
                  <ButtonOne
                  title='Sign up now'
                  buttonPress={() => navigation.navigate('signupFlow')}
                  />
              </Spacer>
              <Spacer>
                  <ButtonTwo
                  title='I already have an account'
                  buttonPress={() => navigation.navigate('accountFlow')}
                  />
              </Spacer>
          </ImageBackground>
          <StatusBar barStyle='light-content' backgroundColor='#67325E' />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  welcomeBg: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover'
  },
  logo: {
    width: 216,
    height: 34,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  h3: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
    color: '#fff',
    marginBottom: 18
  },
  imageContainer: {
      alignContent: 'center',
      marginTop: 220,
      marginBottom: 80,
      justifyContent: 'center'
  },
  streamText: {
      textAlign: 'center',
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'white',
      fontSize: 15
  }
});

export default WelcomeScreen;
