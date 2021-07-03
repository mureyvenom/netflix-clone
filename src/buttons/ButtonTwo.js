import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const ButtonTwo = ({title, buttonPress}) => {
  return (
    <View>
        <TouchableOpacity onPress={buttonPress}>
            <View style={styles.buttonTwo}><Text style={styles.buttonTwoText}>{title}</Text></View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonTwo: {
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',        
        paddingVertical: 8,
        borderRadius: 18,
        backgroundColor: '#fff',        
    },
    buttonTwoText: {
      textAlign: 'center',
      fontSize: 15,
      color: 'black',
    }
});

export default ButtonTwo;
