import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

import colors from '../config/color';
import AppText from './AppText';

export default function Card({ title, subtitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.titleContainer}>
                <AppText>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 20
    },
    image: {
        width: "100%",
        height: 200
    },
    titleContainer: {
        padding: 20
    },
    subtitle: {
        color: colors.secondary
    }
})
