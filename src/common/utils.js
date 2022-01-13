/**
 ** Created by Bingo on 2021/3/3.
 ** desc: 工具类
 **/

import {Linking} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

// 时间字符统一
function timeFormat(param) {
  return param < 10 ? '0' + param : param;
}

global.utils = {
  // 节流
  throttle(func, delay) {
    let timer = null;
    let startTime = Date.now();
    return function () {
      let curTime = Date.now();
      let remaining = delay - (curTime - startTime);
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      if (remaining <= 0) {
        func.apply(context, args);
        startTime = Date.now();
      } else {
        timer = setTimeout(func, remaining);
      }
    };
  },
  // 判断为空
  isEmpty(obj) {
    return typeof obj === 'undefined' || obj == null || obj === '';
  },
  // 判断字符是否为数字
  isNumber(val) {
    return parseFloat(val).toString() !== 'NaN';
  },
  // 判断为电话号码
  isMobile(str) {
    let reg = /^1[3456789]\d{9}$/;
    return reg.test(str);
  },
  // 判断身份证号
  isCnNewID(cid) {
    let arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //加权因子
    let arrValid = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]; //校验码
    if (/^\d{17}\d|x$/i.test(cid)) {
      let sum = 0;
      let idx = null;
      for (let i = 0; i < cid.length - 1; i++) {
        // 对前17位数字与权值乘积求和
        sum += parseInt(cid.substr(i, 1), 10) * arrExp[i];
      }
      // 计算模（固定算法）
      idx = sum % 11;
      // 检验第18为是否与校验码相等
      return arrValid[idx].toString() === cid.substr(17, 1).toUpperCase();
    } else {
      return false;
    }
  },
  // 去除空格
  trim(str, model) {
    if (model === 'l') {
      return str.replace(/^\s*/, '');
    } else if (model === 'r') {
      return str.replace(/(\s*$)/g, '');
    } else if (model === 'b') {
      return str.replace(/^\s+|\s+$/g, '');
    } else {
      return str.replace(/\s+/g, '');
    }
  },
  // 日期时间格式化
  dateTimeFormat(time, model) {
    let date = time ? new Date(time * 1000) : new Date();
    // console.log(date)
    let year = date.getFullYear();
    let month = timeFormat(date.getMonth() + 1);
    let day = timeFormat(date.getDate());
    let hours = timeFormat(date.getHours());
    let minutes = timeFormat(date.getMinutes());
    let seconds = timeFormat(date.getSeconds());
    // 拼接
    if (model === 'endTime') {
      return year + '-' + month + '-' + day + ' ' + timeFormat(parseInt(hours, 10) + 1) + ':00';
    } else if (model === 'end-time') {
      return year + '-' + month + '-' + day + ' ' + hours + ':00';
    } else if (model === 'start_time') {
      return year + '/' + month + '/' + day + ' ' + '01' + ':01' + ':01';
    } else if (model === 'end_time') {
      return year + '/' + month + '/' + (day + 1) + ' ' + '01' + ':01' + ':01';
    } else if (model === 'start_time2') {
      return [year, date.getMonth() + 1, day, 0, 0, 0];
    } else if (model === 'end_time2') {
      return [year, date.getMonth() + 1, day + 1, 0, 0, 0];
    } else if (model === 'second') {
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    } else if (model === 'minute') {
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
    } else if (model === 'hour') {
      return year + '-' + month + '-' + day + ' ' + hours;
    } else if (model === 'day') {
      return year + '-' + month + '-' + day;
    } else {
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }
  },
  // 格式化日期（日期选择器需要用到）
  formatTime(dateTime) {
    let year = timeFormat(dateTime[0]);
    let month = timeFormat(dateTime[1]);
    let day = timeFormat(dateTime[2]);
    let hours = timeFormat(dateTime[3]);
    let minutes = timeFormat(dateTime[4]);
    let seconds = timeFormat(dateTime[5]);
    return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  },
  // 拨打电话
  makePhoneCall(tel) {
    let url = 'tel:' + tel;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  },
  // 复制到剪切板
  setClipboardData(str) {
    Clipboard.setString(str);
    global.toast('复制成功！');
  },
};
