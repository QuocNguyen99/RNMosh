import React from 'react'
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

export default function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.image} source={require('../asset/logo-red.png')} />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(value) => console.log(value)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    keyboardType='email-address'
                    name='email'
                    icon='email'
                    placeholder='Email'
                />
                <AppFormField
                    autoCapitalize='none'
                    secureTextEntry={true}
                    name='password'
                    icon='lock'
                    placeholder='Password'
                />
                <SubmitButton
                    title={'Login'}
                />
            </AppForm>
        </Screen >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20
    },
})
