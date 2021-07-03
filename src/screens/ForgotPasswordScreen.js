import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import ButtonOne from '../buttons/ButtonOne';
import Spacer from '../components/Spacer';
import Icon from '@expo/vector-icons/FontAwesome';

const ForgotPasswordScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}><Image source={require('../../assets/images/resizedlogo.png')} style={styles.logo} /></View>
            <Spacer>
                <Input 
                placeholderTextColor='#fff'
                inputContainerStyle={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Enter email address'
                keyboardType='email-address'
                leftIcon={
                    <Icon 
                    size={20}
                    name='envelope-o'
                    color='white'
                    style={{width: 25}}
                    />
                }
                />
            </Spacer>
            <ButtonOne 
            title='RESET PASSWORD'
            buttonPress={() => console.log('forgot pressed')}
            />
            <Spacer>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}>Back to login</Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66315D',
    },
    logo: {
        width: 216,
        height: 34,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    imageContainer: {
        alignContent: 'center',
        marginTop: 80,
        marginBottom: 80,
        justifyContent: 'center'
    },
    inputStyle: {
        color: 'white',
        borderBottomColor: '#fff',
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 15
    }
});

export default ForgotPasswordScreen;