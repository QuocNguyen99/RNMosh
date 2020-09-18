import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

export default function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.image} source={require('../asset/logo-red.png')} />

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(value) => console.log(value)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) =>
                    (
                        <>
                            <AppTextInput
                                autoCapitalize='none'
                                keyboardType='email-address'
                                onBlur={() => setFieldTouched('email')}
                                icon='email'
                                onChangeText={handleChange('email')}
                                placeholder='Email'
                            />
                            <ErrorMessage visiable={touched.email} error={errors.email} />
                            <AppTextInput
                                autoCapitalize='none'
                                secureTextEntry={true}
                                onBlur={() => setFieldTouched('password')}
                                icon='lock'
                                onChangeText={handleChange('password')}
                                placeholder='Password' />
                            <ErrorMessage visiable={touched.password} error={errors.password} />
                            <AppButton
                                title='Login'
                                onPress={handleSubmit}>
                            </AppButton>
                        </>
                    )
                }
            </Formik>
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
