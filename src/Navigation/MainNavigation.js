import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SC_Program from '../Screens/S&C_Program';
import CustomTabBar from '../CustomeComponents/Navigations/CustomTabBar';
import CustomTopTabs from '../CustomeComponents/Navigations/CustomTopTabs';
import MyCalender from '../Screens/MyCalender';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <TopTab.Navigator tabBar={(props) => <CustomTopTabs {...props} />}>
            <TopTab.Screen name='S&C Programs' component={SC_Program} />
            <TopTab.Screen name='My calendar' component={BottomTab} />
        </TopTab.Navigator>
    );
}

const BottomTab = () => {
    return (
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} >
            <Tab.Screen name='My Calendar' component={MyCalender} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

const DrawerTab = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='DaruStrong' component={TopTabNavigator}
                options={{
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                }} />
        </Drawer.Navigator>
    );
}

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <>
            <>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#333333" translucent = {true}/>
            </>
            <>
                <NavigationContainer theme={MyTheme}>
                    <Stack.Navigator>
                        <Stack.Screen
                            name='DrawerTab'
                            component={DrawerTab}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </>
        </>

    );
}

const MyTheme = {
    colors: {
        background: '#333333'
    },
};

export default MainStack;
