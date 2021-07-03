import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import ButtonOne from '../buttons/ButtonOne';
import {Picker} from '@react-native-picker/picker';

const StartSignupScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}><Image source={require('../../assets/images/resizedlogo.png')} style={styles.logo} /></View>
            <Picker
                // selectedValue={this.state.language}
                style={{height: 50, width: 100}}
                // onValueChange={(itemValue, itemIndex) =>
                //     this.setState({language: itemValue})
                // }
                >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                </Picker>
        </View>
    );
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

export default StartSignupScreen;