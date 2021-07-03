import React, {useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, TouchableOpacity, Picker, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import ButtonOne from '../buttons/ButtonOne';
import {Context} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = ({navigation}) => {
    const {state, signup, clearError} = useContext(Context);
    const [pickerValue, setPicker] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [baseError, setBaseError] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const validateEmail = (email)  => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    return(
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearError} />
        <ScrollView>
        <Text style={styles.h3}>Enter your phone number and continue</Text> 

            {baseError ? <Text style={styles.errorText}>{baseError}</Text> : null }           
            {state.errorMessage ? <Text style={styles.errorText}>{state.errorMessage}</Text> : null }   

            <Spacer>
                <View style={styles.inputHolder}>
                    <Input 
                    placeholder='Enter email address'
                    keyboardType='email-address'
                    placeholderTextColor='#fff'
                    inputContainerStyle={styles.inputStyle2}
                    autoCapitalize='none'
                    textContentType='emailAddress'
                    autoCorrect={false}
                    style={styles.inputStyle2}
                    value={email}
                    onChangeText={setEmail}
                    />
                </View>
            </Spacer>

            <Spacer>
                <View style={styles.inputHolder}>

                    <View style={styles.pickerView}>
                    <Picker
                    pickerStyle={styles.pickerStyle}
                    selectedValue={pickerValue}
                    style={styles.pickerStyle}
                    onValueChange={(itemValue, itemIndex) => {
                        setPicker(itemValue);
                    }}
                    >
                        <Picker.Item label='Code' value='' />
                        <Picker.Item label='+234' value="+234" />
                    </Picker>
                    </View>

                    <View style={styles.inputView}>
                        <Input 
                        placeholder='Enter phone number'
                        keyboardType='phone-pad'
                        placeholderTextColor='#fff'
                        inputContainerStyle={styles.inputStyle}
                        autoCapitalize='none'
                        textContentType='telephoneNumber'
                        autoCorrect={false}
                        style={styles.inputStyle}
                        value={phone}
                        onChangeText={setPhone}
                        /> 
                    </View>
                            
                </View>
            </Spacer>

            <Spacer>
                <View style={styles.inputHolder}>
                    <Input 
                    placeholder='Enter password'
                    placeholderTextColor='#fff'
                    inputContainerStyle={styles.inputStyle2}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.inputStyle2}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    />
                </View>
            </Spacer>
            
            <Spacer>
                <ButtonOne 
                title={isLoading && !state.errorMessage ? <ActivityIndicator size='small' color='#fff' /> : 'CONTINUE'}
                buttonPress={() => {
                    setIsLoading(true);
                    clearError();


                    if(!email){
                        setBaseError('Please select an email address to continue');
                        setIsLoading(false);
                        return false;
                    }else{
                        setBaseError('');
                    }

                    if(!pickerValue){
                        setBaseError('Please select a country code to continue');
                        setIsLoading(false);
                        return false;
                    }else{
                        setBaseError('');
                    }

                    if(!phone){
                        setBaseError('Please enter a phone number to continue');
                        setIsLoading(false);
                        return false;
                    }else{
                        setBaseError('');
                    }

                    if(!password){
                        setBaseError('Please enter a password to continue');
                        setIsLoading(false);
                        return false;
                    }else{
                        setBaseError('');
                    }

                    if(!validateEmail(email)){
                        setBaseError('Please enter a valid email to continue');
                        setIsLoading(false);
                    }else{
                        setBaseError('');
                    }

                    if(phone.length < 10){
                        setBaseError('Please enter a valid phone number to continue');
                        setIsLoading(false);
                    }else{
                        setBaseError('');
                    }

                    // if(phone.charAt(0) == "0"){
                    //     setPhone(phone.replace("0", ""));
                    //     setPhone(pickerValue+phone);
                    // }

                    signup({pickerValue ,phone, email, password});
                }}
                />
            </Spacer>

            <Spacer>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}>Go back</Text>
                </TouchableOpacity>
            </Spacer> 

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
        fontSize: 15,
        height: 50,
    },
    inputStyle2: {
        color: 'white',
        borderBottomColor: '#fff',
        fontSize: 15,
        height: 50,
    },
    pickerStyle: {
        fontSize: 15,
        color: 'white',
        width: '100%',
    },
    inputHolder: {
        flexDirection: "row",
        height: 50,
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    h3: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
        color: '#fff',
        marginBottom: 50,
        marginTop: 80,
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    pickerView: {
        height: 50, 
        width: '35%'
    },
    inputView: {
        height: 50,
        flex: 1
    },
    errorText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'pink',
        textDecorationLine: 'underline'
    }
});

export default SignupScreen;