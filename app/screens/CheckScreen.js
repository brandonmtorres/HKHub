import React,{useState} from 'react'
import { SpeedDial } from 'react-native-elements';
import {StyleSheet,Text} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Screen from '../../components/Screen';
import AppPicker from '../../components/AppPicker';
import Icon from '../../components/Icon';


    const Home = () => <Screen><Text>Home</Text></Screen>
    const Jobs = () => <Screen><Text>Jobs</Text></Screen>
  
    const Tab = createBottomTabNavigator()
  
    const TabNavigator =()=>(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {Home}/>
            <Tab.Screen name = "Jobs" component = {Jobs}/>
        </Tab.Navigator>
    )

export default function CheckScreen() {



  


    const [open, setOpen] = React.useState(false);

    
    return (
        <>
        <Screen style={styles.screen}>
            <AppPicker icon='apps' placeholder='Category' />
            <SpeedDial
                isOpen={open}
                icon={<Icon name='upload' size = {56} backgroundColor='#012169'/> }
                openIcon={<Icon name = "close" size = {56} backgroundColor='#012169'/>}
                onOpen={() => setOpen(!open)} onClose={() => setOpen(!open)}>
                
                <SpeedDial.Action
                    icon={<Icon name='account-group' backgroundColor='#012169'/>}
                    title="Upload Clients File" onPress={() => console.log('Upload Input File')} />
                <SpeedDial.Action
                    icon={<Icon name='microsoft-teams' backgroundColor='#012169'/>}
                    title="Upload Teams File" onPress={() => console.log('Upload Clients File')} />
                <SpeedDial.Action
                    icon={<Icon name='import' backgroundColor='#012169'/>}
                    title="Upload Input File" onPress={() => console.log('Upload Teams File')} />
            </SpeedDial>
        </Screen>

        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer> 
        
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
  });
  
