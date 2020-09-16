import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppText from './AppText'

export default function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        paddingTop: 20,
        marginHorizontal: 20
    }
})
