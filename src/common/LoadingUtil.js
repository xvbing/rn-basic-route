/**
 ** Created by Bingo on 2021/4/12.
 ** desc: LoadingUtil
 **/

/**
 * 全局唯一的Loading显示隐藏工具类。
 * use:
 *  导入：import LoadingUtil from "./LoadingUtil";
 *  显示：LoadingUtil.showLoading();
 *  隐藏：LoadingUtil.dismissLoading();
 */

let LoadingUtil = {
  showLoading(text, timeOut = 10000) {
    mLoadingComponentRef && mLoadingComponentRef.showLoading(text);
    // this.timerLoading = setTimeout(() => {
    //   this.dismissLoading();
    // }, timeOut);
  },
  dismissLoading() {
    mLoadingComponentRef && mLoadingComponentRef.dismissLoading();
    // this.timerLoading && clearTimeout(this.timerLoading);
  },
};

export default LoadingUtil;
