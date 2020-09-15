import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import colors from '../config/color';

export default function ListitemSaparator() {
    return (
        <View style={styles.saparator} />
    )
}

const styles = StyleSheet.create({
    saparator: {
        width: '100%',
        backgroundColor: colors.light,
        height: 1
    }
})
