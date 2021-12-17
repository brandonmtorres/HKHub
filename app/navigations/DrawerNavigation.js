import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

import DrawerContent from '../screens/DrawerContent'
import Screen from '../../components/Screen';

const Drawer = createDrawerNavigator(); 

const Home = () => <Screen><Text>Home</Text></Screen>
const Jobs = () => <Screen><Text>Jobs</Text></Screen>

export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Jobs" component={Jobs} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
