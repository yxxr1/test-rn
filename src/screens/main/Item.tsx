import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import {ListItem} from "../../interfaces";
import {SPEC} from "../../const";

export interface Props {
    item: ListItem,
    key?: any
}

export default ({item: {name, speciality, photo}}: Props) => {

    return (<View style={styles.item}>
        <Image
            style={{
                width: 100,
                height: 140,
                marginRight: 20
            }}
            source={{uri: `data:image/jpeg;base64,${photo}`}}
        />
        <View style={{justifyContent: 'center'}}>
            <Text style={styles.item__name}>{name}</Text>
            <Text style={styles.item__spec}>{SPEC[speciality].label}</Text>
        </View>
    </View>)
}

const styles = new StyleSheet.create({
    item: {
        padding: 20,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#DFDFDF',
        flexDirection: 'row'
    },
    item__name: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 16
    },
    item__spec: {
        color: '#333333',
        fontSize: 16
    },
})