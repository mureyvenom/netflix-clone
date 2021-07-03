import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';

const FeaturedMovie = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image 
            source={require('../../assets/images/stalker-featured.png')}
            style={styles.featuredThumb}
            />
            <Text style={styles.movieClass}>Action - Comedy - Crime</Text>
            <View style={styles.actionView}>
                <TouchableOpacity>
                    <Text style={styles.featuredPlay}>
                        <FontAwesome 
                        name='play'
                        size={15}
                        color='black'
                        />  Play
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.featuredLink}>
                        <Entypo 
                        name='plus'
                        size={12}
                        color='white'
                        />  My List
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.featuredLink}>
                        <Entypo 
                        name='info-with-circle'
                        size={12}
                        color='white'
                        />  Info
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        paddingVertical: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    featuredThumb: {
        width: 268,
        height: 286,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
    },
    movieClass: {
        fontSize: 12,
        textAlign: 'center',
        color: '#fff'
    },
    actionView: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
        marginVertical: 15
    },
    featuredPlay: {
        backgroundColor: '#fff',
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 9,
        minWidth: 123
    },
    featuredLink: {
        color: '#fff',
        paddingVertical: 11,
    }
})

export default FeaturedMovie;