import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import WordCollection from '../screens/WordCollection';


const HomeStack = createStackNavigator();

const HomeNavigation = ()=>(
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="WordCollection" component={WordCollection} />
    </HomeStack.Navigator>
);

export default HomeNavigation;
