import {AsyncStorage} from 'react-native';
import CreateDataContext from './CreateDataContext';
import mainApi from '../api/mainApi';
import { navigate } from '../navigationRef';

const AuthReducer = (state, action) => {
    switch(action.type){
        case 'login':
            return{
                ...state,
                errorMessage: '',
                email: action.payload.email
            }
        case 'signup':
            return {
                ...state,
                errorMessage: '',
                email: action.payload.email,
                exp_date:  null
            };
        case 'add_error':
            return {
                ...state,
                errorMessage: action.payload
            };
        case 'add_dash_movie_error':
            return {
                ...state,
                dashMovieError: action.payload
            };
        case 'clear_error':
            return {
                ...state,
                errorMessage: null
            }
        case 'confirm_pin':
            return{
                ...state,
                errorMessage: '',
                exp_date: action.payload.exp_date
            }
        case 'get_dash_movies':
            return {
                ...state,
                dashMovies: action.payload,
                movieError: ''
            }
        case 'clear_dash_movie_error':
            return {
                ...state,
                movieError: null
            }
        case 'set_view_movie':
            return {
                ...state,
                movieDetails: action.payload
            }
        case 'set_view_movie_error':
            return {
                ...state,
                movieDetailsError: action.payload
            }
        case 'clear_view_movie_error':
            return {
                ...state,
                movieDetailsError: null
            }
        case 'clear_view_movie':
            return{
                ...state,
                movieDetails: {}
            }
        default:
            return state;
    }
}

const login = (dispatch) => {
    return async ({email, password}) => {
        try{
            const bodyFormData = new FormData();
            bodyFormData.append("email", email);
            bodyFormData.append("password", password);
            
            const response = await mainApi.post('/login', bodyFormData);

            if(response.data.status == 'success'){
                await AsyncStorage.setItem("email", email);
                dispatch({
                    type: 'login',
                    payload: response.data
                });
                navigate('dashboardFlow');
            }else{
                dispatch({
                    type: 'add_error',
                    payload: response.data.errorMessage
                })
            }
        }catch(err){
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong'
            })
        }
    }
}

const signup = (dispatch) => {
    return async ({pickerValue, phone, email, password}) => {
        
        try{
            const bodyFormData = new FormData();
            bodyFormData.append("email", email);
            if(phone.charAt(0) == "0"){
                bodyFormData.append("phone", pickerValue + phone.replace("0", ""));
            }else{
                bodyFormData.append("phone", pickerValue + phone);
            }
            
            bodyFormData.append("password", password);
            const response = await mainApi.post('/signup', bodyFormData);
            
            if(response.data.status == 'failed'){
                dispatch({
                    type: 'add_error',
                    payload: response.data.errorMessage
                })
            }else{
                await AsyncStorage.setItem("email", email);
                //await AsyncStorage.setItem("exp_date", response.data.exp_date);
                dispatch({
                    type: 'signup',
                    payload: response.data
                });

                if(phone.charAt(0) == "0"){
                    navigate('ConfirmPin', {
                        phone: pickerValue + phone.replace("0", ""),
                        pin: response.data.pin
                    });
                }else{
                    navigate('ConfirmPin', {
                        phone: pickerValue + phone,
                        pin: response.data.pin
                    });
                }
            }
            
        }catch(err){
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong'
            })
        }
    }
}

const confirmPin = (dispatch) => {
    return async ({phone, pin}) => {
        try {
            const bodyFormData = new FormData();
            bodyFormData.append("phone", phone);
            bodyFormData.append("pin", pin);
            const response = await mainApi.post('/confirmPin', bodyFormData);

            if(response.data.status == 'success'){
                await AsyncStorage.setItem("exp_date", response.data.exp_date);
                dispatch({
                    type: 'confirm_pin',
                    payload: response.data
                });
                navigate('dashboardFlow');
            }

        }catch(err){
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong'
            })
        }
    }
}

const getMovies = (dispatch) => {
    return async () => {
        try {
            const response = await mainApi.get('/getMovies');
            if(response.data.length > 0){
                dispatch({
                    type: 'get_dash_movies',
                    payload: response.data
                })
            }else{
                dispatch({
                    type: 'add_dash_movie_error',
                    payload: 'Unable to fetch movies'
                })
            }
        }catch(err){
            dispatch({
                type: 'add_dash_movie_error',
                payload: 'Something went wrong'
            })
        }
    }
}

const getMovie = (dispatch) => async ({movieId}) => {
    try{
        const response = await mainApi.get('/getMovie',{
            params: {
                id: movieId
            }
        });
    
        if(response.data.name){
            dispatch({
                type: 'set_view_movie',
                payload: response.data
            })
        }else{
            dispatch({
                type: 'set_view_movie_error',
                payload: 'Unable to fetch movie'
            });
        }
    }catch(err){
        dispatch({
            type: 'set_view_movie_error',
            payload: 'Something went wrong'
        })
    }
}

const clearMovie = (dispatch) => {
    return () => {
        dispatch({
            type: 'clear_view_movie'
        })
    }
}

const clearMovieError = (dispatch) => {
    return () => {
        dispatch({
            type: 'clear_view_movie_error'
        })
    }
}

const clearDashMovieError = (dispatch) => {
    return () => {
        dispatch({
            type: 'clear_dash_movie_error'
        })
    }
}

const clearError = (dispatch) => {
    return () => {
        dispatch({
            type: 'clear_error'
        })
    }
}

export const {Provider, Context} = CreateDataContext(
    AuthReducer,
    {
        signup, 
        clearError, 
        confirmPin, 
        login, 
        getMovies, 
        clearDashMovieError, 
        getMovie, 
        clearMovie, 
        clearMovieError
    },
    {
        email: null, 
        errorMessage: '', 
        status: '', 
        dashMovies: [], 
        dashMovieError: '', 
        movieError: '', 
        movieDetailsError: '',
        movieDetails: {}
    }
);