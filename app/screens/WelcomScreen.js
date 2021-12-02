import React from 'react'
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function WelcomScreen(props) {
    return (
        

        <View style={styles.background}>
                <Image style ={styles.logo}source ={ require('../assets/hklogo_full.png')}></Image>
                <View style={styles.usernameButton}>
                    <Text>Login</Text>
                </View>    
        </View>

    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#012169'
    },
    usernameButton:{
        width: "100%",
        height: 70,
        backgroundColor: '#fff',
        
    }, 
    passwordButton:{
        width: "100%",
        height: 70,
        backgroundColor: 'gray',
        
    }, 
    logo:{
        flex: 1,
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        tintColor:'#fff',
        bottom: 100,
        marginLeft: 40
    }
})  
