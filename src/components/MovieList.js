import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import MovieThumbDetail from '../components/MovieThumbDetail';
import {withNavigation} from 'react-navigation';

const MovieList = ({results, navigation, navRoute}) => {

    if(!results.length){
        return null;
    }

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Category Title</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id.toString()}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity 
                    onPress={() => navigation.navigate(navRoute, {id: item.id})}
                    >
                        <MovieThumbDetail
                        result={item}
                        />
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        marginBottom: 10,
        paddingHorizontal: 15
    },
    titleStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 7,
        color:'#fff'
    }
});

export default withNavigation(MovieList);