import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native'

export interface Props {
    title: string,
    onClick: () => void,
    rightContent?: React.ReactNode,
    alt?: boolean
}

export default ({title, onClick, rightContent, alt}: Props) => {
    return (
        <TouchableOpacity style={{width: '100%'}} onPress={onClick}>
            <View style={[styles.button, !!alt ? styles.button__alt : styles.button__std]}>
                <Text style={styles.button__text}>{title}</Text>
                {rightContent ? (
                    <View style={styles.button__rightContent}>{rightContent}</View>
                ) : (<></>)}
            </View>
        </TouchableOpacity>
    );
}

const styles = new StyleSheet.create({
    button: {
        borderRadius: 4,
        width: '100%',
        minHeight: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    button__std: {
        backgroundColor: '#F36E20',
    },
    button__alt: {
        backgroundColor: '#0B54A6',
    },
    button__text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    button__rightContent: {
        position: 'absolute',
        right: 20
    }
});
