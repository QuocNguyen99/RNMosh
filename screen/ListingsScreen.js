import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Card from '../components/Card';
import Screen from '../components/Screen';
import color from '../config/color';


const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../asset/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 200,
        image: require('../asset/couch.jpg')
    },
    {
        id: 3,
        title: 'Red jacket for sale',
        price: 300,
        image: require('../asset/jacket.jpg')
    },
    {
        id: 4,
        title: 'Couch in great condition',
        price: 400,
        image: require('../asset/couch.jpg')
    }
]

export default function ListingsScreen() {
    return (
        <Screen style={styles.container}>
            <FlatList
                data={listings}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subtitle={'$' + item.price}
                        image={item.image} />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.light,
        padding: 20
    }
})
