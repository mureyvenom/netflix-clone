import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import IndexScreen from "./src/screens/IndexScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AccountScreen from "./src/screens/AccountScreen";
import EmailLoginScreen from "./src/screens/EmailLoginScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import ConfirmPinScreen from "./src/screens/ConfirmPinScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import MovieListScreen from './src/screens/MovieListScreen';
import {setNavigator} from './src/navigationRef';
import {Provider as AuthProvider} from './src/context/AuthContext';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';

const switchNavigator = createSwitchNavigator({
  Home: {
    screen: IndexScreen,
    navigationOptions: ({ navigation }) => ({

    }),
  },
  welcomeFlow: createStackNavigator({
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: ({ navigation }) => ({
        header: () => null,
        title: null
      }),
    },
    signupFlow: createStackNavigator({
      SignupOption: {
        screen: SignupScreen,
        navigationOptions: ({navigation}) => ({
          title: ''
        })
      },
      ConfirmPin: {
        screen: ConfirmPinScreen,
        navigationOptions: ({navigation}) => ({
          title: null
        })
      }
    }, {
      navigationOptions: ({navigation}) => ({
        title: null
      })
    }),
    accountFlow: createStackNavigator({
      accountMethod: {
        screen: AccountScreen
      },
      emailMethod: {
        screen: EmailLoginScreen
      },
      forgotPass: {
        screen: ForgotPasswordScreen
      }
    }, {
      navigationOptions: ({navigation}) => ({
        title: null
      })
    })
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#67325E",
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: '#fff'
    }
  }),
  dashboardFlow: createBottomTabNavigator({
    Dashboard: createStackNavigator({
      dashMain: {
        screen: DashboardScreen,
        navigationOptions: ({navigation}) => ({
          title: '',  
          header: () => null        
        })
      },
      MovieDetails: {
        screen: MovieDetailsScreen,
        navigationOptions: ({navigation}) => ({
          title: '',  
          header: () => null    
        })
      }
    }, {
      navigationOptions: ({navigation}) => ({
        tabBarIcon: <AntDesign name='home' size={20} color='white' />,
        header: () => null
      })
    }),
    SearchScreen: {
      screen: DashboardScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Search',
        tabBarIcon: <AntDesign name='search1' size={20} color='white' />
      })
    },
    LatestScreen: createStackNavigator({
      latestMain: {
        screen: MovieListScreen,
        navigationOptions: ({navigation}) => ({
          title: '',
          header: () => null
        })
      },
      LatestMovieDetails: {
        screen: MovieDetailsScreen,
        navigationOptions: ({navigation}) => ({
          title: '',  
          header: () => null    
        })
      }
    }, {
      navigationOptions: ({navigation}) => ({
        title: 'Latest',
        tabBarIcon: <MaterialCommunityIcons name="movie-open-outline" size={20} color='white' />
      })
    }),
    MyListScreen: {
      screen: DashboardScreen,
      navigationOptions: ({navigation}) => ({
        title: 'My List',
        tabBarIcon: <MaterialCommunityIcons name="video-vintage" size={20} color='white' />
      })
    },
    MoreScreen: {
      screen: DashboardScreen,
      navigationOptions: ({navigation}) => ({
        title: 'More',
        tabBarIcon: <FontAwesome name="bars" size={20} color='white' />
      })
    }
  }, {
    tabBarOptions: {
      backgroundColor: '#000',
      activeTintColor: '#fff',
      inactiveTintColor: '#ccc',
      activeBackgroundColor: '#000',
      inactiveBackgroundColor: '#000'
    }
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return(
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}} />
    </AuthProvider>
  )
}
