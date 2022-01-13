/**
 ** Created by Bingo on 2021/3/4.
 ** desc: Storage
 **/

// import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

let storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

const getStorage = (key, data) => {
  storage
    .load({
      key: key,
    })
    .then(() => {})
    .catch((err) => {
      setStorage(key, data);
    });
};

const setStorage = (key, data) => {
  storage
    .save({
      key: key,
      data: data,
      expires: null,
    })
    .then(() => {});
};

getStorage('user-info', {'app-token': ''});
getStorage('track', {});
getStorage('JPush-ID', '');

// 全局变量
global.storage = storage;
