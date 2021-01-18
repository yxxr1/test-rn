import React from 'react'
import {makeAutoObservable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ListItem} from "../interfaces";

class Store {
    constructor(){
        makeAutoObservable(this);

        this.loadData();
    }

    list: ListItem[] = [];

    loadData = async () => {
        try {
            const data = await AsyncStorage.getItem('list');
            const list: ListItem[] = JSON.parse(data);
            if(list !== null) this._setList(list);
        } catch(e){
            console.log(e);
        }
    }
    _setList(v: ListItem[]){
        this.list = v;
    }

    addListItem(item: ListItem){
        this.list.push(item);
        AsyncStorage.setItem('list', JSON.stringify(this.list));
    }
}

export default new Store();