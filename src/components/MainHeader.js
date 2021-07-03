import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const MainHeader = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image 
                style={styles.imageStyle}
                source={require('../../assets/images/headerlogo.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.headerLink}>TV Shows</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.headerLink}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.headerLink}>More</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-evenly',
        paddingHorizontal: 15,
        marginBottom: 5
    },
    imageStyle: {
        height: 16,
        width: 101
    },
    headerLink: {
        color: '#fff',
        fontSize: 15
    }
});

export default MainHeader;