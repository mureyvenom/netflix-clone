import React from 'react';
import {View, StyleSheet, Image, ImageBackground, Text, TouchableOpacity, StatusBar} from 'react-native';
import ButtonOne from '../buttons/ButtonOne';
import ButtonThree from '../buttons/ButtonThree';
import Spacer from '../components/Spacer';


const AccountScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.welcomeBg} source={require('../../assets/images/welcomebg.png')}>
                <View style={styles.imageContainer}><Image source={require('../../assets/images/resizedlogo.png')} style={styles.logo} /></View>
                <Text style={styles.h3}>Already have an account?</Text>
                <Spacer>
                    <ButtonOne 
                    title='Login with email'
                    buttonPress={() => navigation.navigate('emailMethod')}
                    />
                </Spacer>
                <Text style={{fontSize: 18, fontWeight: "bold", textAlign: 'center', color: '#fff',}}>OR</Text>
                <Spacer>
                    <ButtonThree 
                    title='Log in with Facebook'
                    buttonPress={() => navigation.navigate('emailMethod')}
                    />
                </Spacer>
                <Spacer />
                <TouchableOpacity onPress={() => navigation.navigate('signupFlow')}>
                    <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}>I don't have an account</Text>
                </TouchableOpacity>
            </ImageBackground>
            <StatusBar barStyle='light-content' backgroundColor='#67325E' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
    },
    welcomeBg: {
        flex: 1,
        width: '100%',
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
        marginTop: 50,
        marginBottom: 80,
        justifyContent: 'center'
    },
});

export default AccountScreen;