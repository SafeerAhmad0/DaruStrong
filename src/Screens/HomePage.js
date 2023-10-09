import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigation from '../Navigation/MainNavigation';


const Tab = createBottomTabNavigator();

const HomePage = () => {
    return (
       <Text>Hi</Text>
    )
}

export default HomePage