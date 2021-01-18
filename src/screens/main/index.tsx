import React, {useEffect, useState} from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import { observer } from "mobx-react"
import Screen from "../../components/Screen";
import Button from '../../components/Button';
import BottomContent from "../../components/BottomContent";
import Item from "./Item";
// @ts-ignore
import AddPlus from './add-plus.svg';

import store from '../../store'

const _ = ({navigation}) => {

    const onCreate = () => {
        navigation.navigate('create');
    }

    return (<Screen>
        <Text style={{
            textAlign: 'center',
            marginVertical: 30,
            fontWeight: 'bold',
            fontSize: 18
        }}>НАШИ ВРАЧИ</Text>
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height: 0,
                marginBottom: 100
        }}>
            {store.list === null ? <></> : (
                store.list.map((item, ind) => (
                    <Item key={ind} item={item} />
                ))
            )}
        </ScrollView>

        <BottomContent>
            <Button title={'Добавить'} rightContent={<AddPlus />} onClick={onCreate} />
        </BottomContent>
    </Screen>)
}

export default observer(_);
