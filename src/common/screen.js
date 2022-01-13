/**
 ** Created by Bingo on 2021/3/3.
 ** desc: 屏幕适配
 **/

import {Dimensions, PixelRatio} from 'react-native';

// 获取屏幕的dp
let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;
let fontScale = PixelRatio.getFontScale();
let pixelRatio = PixelRatio.get();
// 高保真的宽度和告诉
const designWidth = 750.0;
const designHeight = 1334.0;

// 根据dp获取屏幕的px
let screenPxW = PixelRatio.getPixelSizeForLayoutSize(screenW);
let screenPxH = PixelRatio.getPixelSizeForLayoutSize(screenH);

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
// export function setSpText(size: Number) {
const setSpText = (size: Number) => {
  // console.log('screenW======' + screenW);
  // console.log('screenPxW======' + screenPxW);
  let scaleWidth = screenW / designWidth;
  let scaleHeight = screenH / designHeight;
  let scale = Math.min(scaleWidth, scaleHeight);
  size = Math.round((size * scale) / fontScale + 0.5);
  return size;
};

/**
 * 设置高度
 * @param size  px
 * @returns {Number} dp
 */
// export function scaleSizeH(size: Number) {
const scaleSizeH = (size: Number) => {
  let scaleHeight = (size * screenPxH) / designHeight;
  size = Math.round(scaleHeight / pixelRatio + 0.5);
  return size;
};

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
// export function scaleSizeW(size: Number) {
const scaleSizeW = (size: Number) => {
  let scaleWidth = (size * screenPxW) / designWidth;
  size = Math.round(scaleWidth / pixelRatio + 0.5);
  return size;
};

export default {
  scaleSizeH,
  scaleSizeW,
  setSpText,
};

// global.scaleSizeH = scaleSizeH;
// global.scaleSizeW = scaleSizeW;
// global.setSpText = setSpText;
