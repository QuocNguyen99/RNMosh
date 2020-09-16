import React from 'react'
import { StyleSheet, Text, Platform } from 'react-native';

import defaultStyles from '../config/styles'

export default function AppText({ children, style }) {
    return (
        <Text style={[defaultStyles.text, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
})
