import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {Picker} from "@react-native-picker/picker";

export interface Props {
    items: {
        label: string,
        value: string
    }[],
    value: string,
    onChange: (string, number) => void,
    label: string
}

export default ({value, onChange, items, label}: Props) => {
    return (<View style={{
        marginTop: 20
    }}>
        <Text style={{
            color: '#575757',
            marginBottom: 5
        }}>{label}</Text>
        <View style={{
            borderStyle: 'solid',
            borderBottomWidth: 1,
            borderBottomColor: '#D9D5DC',
        }}>
            <Picker
                style={{
                    height: 40,
                    color: '#B5BBBD'
                }}
                selectedValue={value}
                onValueChange={onChange}>
                {items.map(({label, value}, ind) => (
                    <Picker.Item key={ind} label={label} value={value} />
                ))}
            </Picker>
        </View>
    </View>);
}

