import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

import colors from '../config/color';
import ListItem from '../components/ListItem';

export default function ListDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../asset/jacket.jpg')} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Red jacket for sale</Text>
                <Text style={styles.subTitle}>$100</Text>
            </View>

            <ListItem
                title="Mosh hói"
                subTitle="5 Listings"
                image={require('../asset/mosh.jpg')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250
    },
    titleContainer: {
        padding: 16
    },
    title: {
        fontSize: 20
    },
    subTitle: {
        fontSize: 18,
        marginVertical: 10,
        color: colors.secondary,
        fontWeight: 'bold'
    }
})

