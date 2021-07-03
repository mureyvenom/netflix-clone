import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native';
import MainHeader from '../components/MainHeader';
import mainApi from '../api/mainApi';
import {Context as AuthContext} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation';
import {FontAwesome} from '@expo/vector-icons';


const MovieDetailsScreen = ({navigation}) => {
    const movieId = navigation.getParam('id');
    const {state, clearMovie, clearMovieError, getMovie} = useContext(AuthContext);
    

    useEffect(() => {   
        clearMovie(); 
        clearMovieError();
        getMovie({movieId})
    }, []);

    return(
        <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
            <NavigationEvents onWillFocus={() => {
                clearMovie(); 
                clearMovieError();
            }} 
            onWillBlur={() => {
                clearMovie();
                clearMovieError();
            }}
            />
            <ImageBackground            
            style={styles.dashBg}
            source={require('../../assets/images/dashbg.png')}
            >
                
                {state.movieDetailsError ? <Text style={styles.errorText}>{state.movieDetailsError}</Text> : null } 
                
                <ScrollView>
                <MainHeader />
                {
                !state.movieDetails.name ? <View style={{flex: 1, justifyContent: 'center', paddingTop: 200}}><ActivityIndicator size='large' color='white' /></View> : 
                <>
                <View>
                    <Image 
                    source={{uri: state.movieDetails.thumbnail}}
                    style={styles.thumbnail}
                    />
                </View>

                <View style={styles.movieInfo}>
                    <View>
                        <Text style={styles.normalInfo}>{state.movieDetails.year}</Text>
                    </View>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>{state.movieDetails.movie_rating}</Text>
                    </View>
                    <View>
                        <Text style={styles.normalInfo}>{state.movieDetails.duration}</Text>
                    </View>
                </View>

                <View style={styles.playHolder}>
                    <TouchableOpacity>
                        <View style={styles.playView}>
                            <Text style={styles.playText}><FontAwesome name='play' size={20} color='black' /> Play</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.summary}>
                    <Text style={styles.summaryText}>
                        An adorable couple elects to test strength of their marriage when they run against each other for the office of state governor
                    </Text>
                </View>

                <View style={styles.cast}>
                    <Text style={styles.castText}>
                        {state.movieDetails.cast_summary}
                    </Text>
                </View>
                </>

}
                
            </ScrollView>
                 
        
            
            
            </ImageBackground>
        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dashBg: {
        resizeMode: 'cover',
        flex: 1
    },
    errorText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline'
    },
    thumbnail: {
        width: 141,
        height: 191,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        marginTop: 20
    },
    normalInfo: {
        fontSize: 15,
        color: '#C9C9C9',
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    movieInfo: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
    },
    rating: {
        backgroundColor: '#4E4E4E',
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 6
    },
    ratingText: {        
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    playHolder: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    playView: {
        backgroundColor: '#fff',
        color: '#000',
        paddingVertical: 8,
        paddingHorizontal: 40,
        marginTop: 12
    },
    playText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },
    summary: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        paddingTop: 25
    },
    summaryText: {
        fontSize: 13,
        color: '#fff'
    },
    castText: {
        color: '#B5B5B5',
        fontSize: 13
    },
    cast: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        paddingTop: 0
    }
});

export default MovieDetailsScreen;