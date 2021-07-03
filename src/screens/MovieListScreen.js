import React, {useContext, useEffect}from 'react';
import {View, StyleSheet, Text, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import MainHeader from '../components/MainHeader';
import MovieList from '../components/MovieList';
import {Context as AuthContext} from '../context/AuthContext';

const MovieListScreen = ({navigation}) => {
    const {state, getMovies, clearDashMovieError} = useContext(AuthContext);
    useEffect(()=>{
        getMovies();
    }, []);

    return (
        <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
            <ImageBackground 
            style={styles.dashBg}
            source={require('../../assets/images/dashbg.png')}
            >
            <ScrollView>
            <MainHeader />    
            {state.dashMovieError ? <Text style={styles.errorText}>{state.dashMovieError}</Text> : null } 
            {state.dashMovies.length < 1 ? <ActivityIndicator size='large' color='white' /> : null}  
            <MovieList 
            results={state.dashMovies}
            navRoute='LatestMovieDetails'
            />
            <MovieList 
            results={state.dashMovies}
            navRoute='LatestMovieDetails'
            />
            <MovieList 
            results={state.dashMovies}
            navRoute='LatestMovieDetails'
            />
            <MovieList 
            results={state.dashMovies}
            navRoute='LatestMovieDetails'
            />
            <MovieList 
            results={state.dashMovies}
            navRoute='LatestMovieDetails'
            />
            <MovieList 
            results={state.dashMovies}
            navRoute='LatestMovieDetails'
            />
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
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

export default MovieListScreen;