import React, { useContext, useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Image, ActivityIndicator, ScrollView} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Text, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import Icon from '@expo/vector-icons/FontAwesome';
import ButtonOne from '../buttons/ButtonOne';
import {Context as AuthContext} from '../context/AuthContext';

const EmailLoginScreen = ({navigation}) => {
    const {state, clearError, login} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [baseError, setBaseError] = useState('');

    return(
        <View style={styles.container}>
        <ScrollView >
            <NavigationEvents onWillFocus={clearError} />
            <View style={styles.imageContainer}><Image source={require('../../assets/images/resizedlogo.png')} style={styles.logo} /></View>
            {baseError ? <Text style={styles.errorText}>{baseError}</Text> : null }   
            {state.errorMessage ? <Text style={styles.errorText}>{state.errorMessage}</Text> : null }   
            <Spacer>
                <Input 
                placeholderTextColor='#fff'
                inputContainerStyle={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Email address'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
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
            <Input 
            placeholderTextColor='#fff'
            inputContainerStyle={styles.inputStyle}
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            leftIcon={
                <Icon 
                name='lock'
                size={20}
                color='white'
                style={{width: 25}}
                />
            }
            />
            <Spacer>
                <ButtonOne 
                title={isLoading && !state.errorMessage ? <ActivityIndicator size='small' color='#fff' /> : 'LOGIN'}
                buttonPress={() => {
                    setIsLoading(true);
                    setBaseError('');
                    clearError();

                    if(!email){
                        setBaseError('Enter an email address to proceed');
                        setIsLoading(false);
                        return false;
                    }

                    if(!password){
                        setBaseError('Enter password to proceed');
                        setIsLoading(false);
                        return false
                    }

                    login({email, password});

                }}
                />
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('forgotPass')}>
                <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}>Forgot Password</Text>
            </TouchableOpacity>
        </ScrollView>
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
    },
    errorText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'pink',
        textDecorationLine: 'underline'
    }
});

export default EmailLoginScreen;