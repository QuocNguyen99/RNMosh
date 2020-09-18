import React from 'react'
import { useFormikContext } from 'formik';
import { StyleSheet, Text, View } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';

export default function AppFormField({ name, ...otherProps }) {
    const { setFieldTouched, handleChange, touched, errors } = useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            <ErrorMessage visiable={touched[name]} error={errors[name]} />
        </>
    )
}

const styles = StyleSheet.create({})
