import React, { useState, useEffect, useContext } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import MainHeader from '../components/MainHeader';
import FeaturedMovie from '../components/FeaturedMovie';
import { AntDesign } from '@expo/vector-icons'; 
import MovieList from '../components/MovieList';
import mainApi from '../api/mainApi';
import {Context as AuthContext} from '../context/AuthContext';

const DashboardScreen = ({navigation}) => {
    const {state, getMovies, clearDashMovieError} = useContext(AuthContext);
    
    useEffect(()=>{
        getMovies();
    }, []);
    
    return(
        <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
            <ImageBackground 
            style={styles.dashBg}
            source={require('../../assets/images/dashbg.png')}
            >
            <ScrollView>
            <MainHeader />    
            <FeaturedMovie />
            {state.dashMovieError ? <Text style={styles.errorText}>{state.dashMovieError}</Text> : null } 
            {state.dashMovies.length < 1 ? <ActivityIndicator size='large' color='white' /> : null}  
            <MovieList 
            results={state.dashMovies} 
            navRoute='MovieDetails'
            />
            <MovieList 
            results={state.dashMovies}
            navRoute='MovieDetails'
            />
            <MovieList 
            results={state.dashMovies}
            navRoute='MovieDetails'
            />
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
    }
});

export default DashboardScreen;