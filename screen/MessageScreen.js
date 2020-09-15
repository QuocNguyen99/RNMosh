import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSaparator from '../components/ListitemSaparator';

const initMessage = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../asset/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../asset/mosh.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../asset/mosh.jpg')
    },
    {
        id: 4,
        title: 'T2',
        description: 'D2',
        image: require('../asset/mosh.jpg')
    },
    {
        id: 5,
        title: 'T3',
        description: 'D3',
        image: require('../asset/mosh.jpg')
    }
]

export default function MessageScreen() {
    const [messages, setMessage] = useState(initMessage);
    const [refeshing, setReheshing] = useState(false);

    const handlerDelete = (message) => {
        setMessage(messages.filter(m => m.id !== message.id))
        console.log('Done: ', messages);
    }

    useState(() => {
        console.log('Render');
    })

    return (
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item, index }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    index={index}
                    onPress={() => { }}
                    handlerDelete={() => handlerDelete(item)}
                />
            }
            ItemSeparatorComponent={ListItemSaparator}
            refreshing={refeshing}
            onRefresh={() => {
                setMessage(
                    [{
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../asset/mosh.jpg')
                    },
                    ]
                )
            }}
        />
    )
}

const styles = StyleSheet.create({})
