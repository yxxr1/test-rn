import React, {useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
// @ts-ignore
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Screen from "../../components/Screen";
import Button from "../../components/Button";
import Input from "../../components/Input";
import BottomContent from "../../components/BottomContent";
import Picker from "../../components/Picker";
// @ts-ignore
import BackArrow from './back-arrow.svg'
// @ts-ignore
import Delete from './delete.svg'
import {SPEC} from '../../const'

import store from '../../store'


export default ({navigation}) => {
    const [name, setName] = useState<string>('');
    const [spec, setSpec] = useState<number>(0);
    const [fileName, setFileName] = useState<string | null>(null);
    const [_fileSource, _setFileSource] = useState<string | null>(null);

    const onAddPhoto = () => {
        const cb = ({fileName, uri, base64}) => {
            if(uri) {
                setFileName(fileName);
                _setFileSource(base64);
            }
        }

        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true
        }, cb)
    }
    const onDeletePhoto = () => {
        setFileName(null);
        _setFileSource(null);
    }

    const onSubmit = () => {
        if(!name.length || !_fileSource) return;
        let data = {
            name,
            speciality: spec,
            photo: _fileSource
        }
        store.addListItem(data);
        navigation.goBack();
    }

    return (<Screen header={
        <View style={{
            height: 80,
            width: 60,
            justifyContent: 'center'
        }}>
            <TouchableOpacity onPress={() => navigation.goBack()}><BackArrow /></TouchableOpacity>
        </View>
    }>
        <Button title={"ДОБАВИТЬ ФОТОГРАФИЮ"} alt onClick={onAddPhoto} />

        {fileName !== null ? (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20
            }}>
                <Text style={{color: '#7D8490', maxWidth: '70%'}}>{fileName}</Text>
                <TouchableOpacity onPress={onDeletePhoto}>
                    <Delete />
                </TouchableOpacity>
            </View>
        ) : (<></>)}

        <Input value={name} onChange={setName} title={"Введите имя врача"} label={"Имя"} />
        <Picker items={SPEC} value={SPEC[spec].value} onChange={(val, ind) => setSpec(ind)} label={"Должность"} />

        <BottomContent>
            <Button title={"ДОБАВИТЬ"} onClick={onSubmit} />
        </BottomContent>
    </Screen>)
}
