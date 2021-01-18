import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

export interface Props {
    value: string,
    onChange: (string) => void,
    label?: string,
    title?: string
}

export default ({value, onChange, label, title}: Props) => {
    return (<View style={{
        marginTop: 20
    }}>
        <Text style={{
            color: '#575757',
            marginBottom: 5
        }}>{title}</Text>
        <TextInput
            style={{
                height: 40,
                borderStyle: 'solid',
                borderBottomWidth: 1,
                borderBottomColor: '#D9D5DC',
                color: '#B5BBBD'
            }}
            autoCompleteType="off"
            autoCorrect={false}
            value={value}
            onChangeText={onChange}
            placeholder={label}
        />
    </View>);
}

