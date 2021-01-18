import React from 'react'
import {
    View
} from 'react-native';

export interface Props {
    children?: React.ReactNode,
}

export default ({children}: Props) => {
    return (<View style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    }}>{children}</View>)
}