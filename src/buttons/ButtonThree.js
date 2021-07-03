import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const ButtonThree = ({title, buttonPress}) => {
  return (
    <View>
        <TouchableOpacity onPress={buttonPress}>
            <Text style={styles.buttonThree}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonThree: {
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        paddingVertical: 8,
        borderRadius: 18,
        backgroundColor: '#4267B2',
        textAlign: 'center',
        fontSize: 15
    }
});

export default ButtonThree;
