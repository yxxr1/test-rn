import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    View
} from 'react-native';

export interface Props {
    children?: React.ReactNode,
    header?: React.ReactNode
}

export default ({children, header}: Props) => {
    return (<View style={{minHeight: '100%', paddingHorizontal: 20}}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{minHeight: '100%'}}>
            {header}
            {children}
        </SafeAreaView>
    </View>)
}