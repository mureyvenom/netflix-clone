import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';

const MovieThumbDetail = ({result}) => {
    return (
        <View style={styles.thumbDimesions}>
            <Image 
            source={{uri: `${result.thumbnail}`}}
            style={styles.imgStyle}
            />
            <View style={styles.detailView}>
                <Text style={styles.durationStyle}>{result.duration}</Text>
                <TouchableOpacity>
                    <Text><Entypo name='info-with-circle' size={12} color='white' /></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    thumbDimesions: {
        width: 87,
        marginRight: 10
    },
    imgStyle: {
        height: 120,
        width: '100%'
    },
    durationStyle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff'
    },
    detailView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        backgroundColor: '#000',
        paddingVertical: 7
    }
});

export default MovieThumbDetail;