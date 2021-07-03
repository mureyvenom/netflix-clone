import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import ButtonOne from '../buttons/ButtonOne';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const ConfirmPinScreen = ({navigation}) => {
    const {state, confirmPin, clearError} = useContext(AuthContext);
    const phone = navigation.getParam('phone');
    const pin = navigation.getParam('pin');

    const [pinOne, setPinOne] = useState('');
    const [pinTwo, setPinTwo] = useState('');
    const [pinThree, setPinThree] = useState('');
    const [pinFour, setPinFour] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [baseError, setBaseError] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.h3}>Enter confirmation PIN sent to {phone}</Text>
            {baseError ? <Text style={styles.errorText}>{baseError}</Text> : null }   
            {state.errorMessage ? <Text style={styles.errorText}>{state.errorMessage}</Text> : null }   
            <View style={styles.inputHolder}>
                <TextInput
                placeholder='---'
                keyboardType='phone-pad'
                placeholderTextColor='#D6D6D6'
                autoCapitalize='none'
                textContentType='oneTimeCode'
                autoCorrect={false}
                maxLength={1}
                style={styles.pinInput}  
                onChangeText={(value) => {
                    setPinOne(value);
                    if(value.length < 1){

                    }else{
                        secondTextInput.focus(); 
                    }                     
                }}                 
                ref={(input) => { firstTextInput = input; }}
                />

                <TextInput 
                placeholder='---'
                keyboardType='phone-pad'
                placeholderTextColor='#D6D6D6'
                autoCapitalize='none'
                textContentType='oneTimeCode'
                autoCorrect={false}
                maxLength={1}
                onChangeText={(value) => {
                    setPinTwo(value);
                    if(value.length < 1){
                        firstTextInput.focus()
                    }else{
                        thirdTextInput.focus(); 
                    }                     
                }} 
                ref={(input) => { secondTextInput = input; }}
                style={styles.pinInput}
                />

                <TextInput
                placeholder='---'
                keyboardType='phone-pad'
                placeholderTextColor='#D6D6D6'
                autoCapitalize='none'
                textContentType='oneTimeCode'
                autoCorrect={false}
                maxLength={1}
                onChangeText={(value) => {
                    setPinThree(value);
                    if(value.length < 1){
                        secondTextInput.focus()
                    }else{
                        fourthTextInput.focus(); 
                    }                     
                }} 
                ref={(input3) => { thirdTextInput = input3; }}
                style={styles.pinInput}
                />

                <TextInput 
                placeholder='---'
                keyboardType='phone-pad'
                placeholderTextColor='#D6D6D6'
                autoCapitalize='none'
                textContentType='oneTimeCode'
                autoCorrect={false}
                maxLength={1}
                onChangeText={(value) => {
                    setPinFour(value);
                    if(value.length < 1){
                        thirdTextInput.focus()
                    }else{
                        fourthTextInput.blur(); 
                    }                     
                }} 
                ref={(input4) => { fourthTextInput = input4; }}
                style={styles.pinInput}
                />

            </View>
            <Spacer />
            <Spacer>
                <ButtonOne 
                title={isLoading || !state.errorMessage ? <ActivityIndicator size='small' color='#fff' /> : 'CONTINUE'}
                buttonPress={() => {
                    setIsLoading(true);
                    clearError();
                    setBaseError('');
                    if(pinOne + pinTwo + pinThree + pinFour == pin){
                        confirmPin({phone, pin})
                    }else{
                        setBaseError('Incorrect pin entered');
                        setIsLoading(false);
                    }
                    
                }}
                />
            </Spacer>
            <TouchableOpacity>
                <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}>Request PIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66315D',
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
    inputHolder: {
        flexDirection: "row",
        height: 50,
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-around',
        marginTop: 20
    },
    pinInput: {
        width: 52,
        height: 52,
        borderRadius: 7,
        backgroundColor: '#F3F2F2',
        textAlign: 'center',
        fontSize: 18
    },
    errorText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'pink',
        textDecorationLine: 'underline'
    }
});

export default ConfirmPinScreen;