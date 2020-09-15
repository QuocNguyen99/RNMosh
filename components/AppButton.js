import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from "../config/color";

export default function AppButton({ title, color = "primary", onPress }) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, { backgroundColor: colors[color] }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 40,
        width: "100%",
        padding: 15,
        marginVertical: 5
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    }
})
