import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const ButtonOne = ({title, buttonPress}) => {
  return (
    <View>
        <TouchableOpacity onPress={buttonPress}>
            <View style={styles.buttonOne}><Text style={styles.buttonOneText}>{title}</Text></View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonOne: {
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',        
        paddingVertical: 8,
        borderRadius: 18,
        backgroundColor: '#E33FC8',
        
        
    },
    buttonOneText: {
      color: 'white',
      fontSize: 15,
      textAlign: 'center',
    }
});

export default ButtonOne;
