import React from 'react'
import { StyleSheet,Image } from 'react-native'
import * as Yup from 'yup';

import Screen from "../../components/Screen";
import AppFormField from '../../components/AppFormField';
import SubmitButton from '../../components/SubmitButton';
import AppForm from '../../components/AppForm';



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen(props) {

    return (
        <Screen style={styles.container}>

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)} 
                validationSchema={validationSchema}
            >
                   <Image style={styles.logo} source={require('../assets/hklogo_full.png')}></Image>
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            name='email'
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name='password'
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"
                        />
                        <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:16
    },

    logo: {
        width: '100%',
        height: 80,
        alignSelf: "center",
        resizeMode:'contain',
        marginTop: 50,
        marginBottom: 20,
      },
})
 