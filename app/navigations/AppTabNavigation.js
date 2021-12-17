import React from 'react'
import {StyleSheet,Text} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import Screen from '../../components/Screen';
import colors from '../../config/colors';


const Home = () => <Screen><Text>Home</Text></Screen>
const Jobs = () => <Screen><Text>Jobs</Text></Screen>
const Post = () => <Screen><Text>Post</Text></Screen>


const Tab = createBottomTabNavigator()

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarStyle:{
                borderTopColor: colors.primary,
                borderTopWidth: 1
            }
        }}
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />

            }} />
        <Tab.Screen
            name="Post"
            component={Post}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="plus-box" size={size} color={color} />
            }} />
        <Tab.Screen
            name="Jobs"
            component={Jobs}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="briefcase" size={size} color={color} />
            }}
        />

    </Tab.Navigator>
)

export default function AppTabNavigation() {
    return (

        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer> 

    )
}
