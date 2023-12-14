import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeDashboard from './HomeDashboard';
import Search from './Search';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Profile from './Profile';
const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='home' component={HomeDashboard} options={{ tabBarShowLabel: false, headerShown: false, tabBarIcon: ({ focused }) => focused ? <Ionicons name='home' size={20} /> : <Ionicons name='home-outline' size={20} /> }}></Tab.Screen>
            <Tab.Screen name='search' component={Search} options={{ tabBarShowLabel: false, headerShown: false, tabBarIcon: ({ focused }) => focused ? <Ionicons name='search' size={20} /> : <Ionicons name='search-outline' size={20} /> }}></Tab.Screen>
            <Tab.Screen name='profile' component={Profile} options={{ tabBarShowLabel: false, headerShown: false, tabBarIcon: ({ focused }) => focused ? <FontAwesome name='user' size={20} /> : <FontAwesome name='user-o' size={20} /> }}></Tab.Screen>
        </Tab.Navigator >
    )
}

export default Tabs