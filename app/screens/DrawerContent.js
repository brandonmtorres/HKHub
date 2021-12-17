import React, {useState}from 'react'
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../../config/colors';




export default function DrawerContent(props) {


const [isAvailable, setIsAvailable] = useState(false)

const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
}


    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image source={require('../assets/hklogo_full.png')} />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}> Bo Fewey </Title>
                                <Caption style={styles.caption}>attorney@hklaw.com</Caption>
                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection} />
                        <Drawer.Item
                            label='Profile'
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name='account'
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => console.log('Pressed')}
                        />

                        <Drawer.Item
                            label='My Projects'
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name='folder-open'
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => console.log('Pressed')}
                        />

                        <Drawer.Item
                            label='Search Profiles'
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name='account-search'
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => console.log('Pressed')}
                        />

                        <Drawer.Item
                            label='Search Projects'
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name='folder-search'
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => console.log('Pressed')}
                        />



                    </View>
                    <Drawer.Section title='Preferences'>
                        <TouchableRipple onPress={()=>{toggleAvailability()}}>
                            <View style={styles.preference}>
                                <Text> My Availability </Text>
                                <View pointerEvents='none'><Switch value={isAvailable} onValueChange={toggleAvailability}/></View>
                                
                            </View>

                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Drawer.Item
                    label='Sign Out'
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name='logout-variant'
                            color={color}
                            size={size}
                        />
                    )}
                    onPress={() => console.log('Pressed')}
                />


            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfoSection:{
        paddingLeft:20
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14
    },
    row:{
        marginTop: 20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center'
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:colors.primary,
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal: 16,
    }
})