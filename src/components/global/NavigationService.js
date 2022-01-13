/**
 ** Created by Bingo on 2021/3/5.
 ** desc:
 **/

import {CommonActions, StackActions} from '@react-navigation/native';

let navigator;
function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params = {}) {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}

function push(routeName, params = {}) {
  navigator.dispatch(StackActions.push(routeName, params));
}

function replace(routeName, params = {}) {
  navigator.dispatch(StackActions.replace(routeName, params));
}

function reset(routeName) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [CommonActions.navigate({routeName: routeName})],
  });
  navigator.dispatch(resetAction);
  // 5.x以下
  // const resetAction = StackActions.reset({
  //     index: 0,
  //     actions: [NavigationActions.navigate({ routeName })]
  //   });
  //   navigation.dispatch(resetAction);
}

function goBack() {
  navigator.dispatch(CommonActions.goBack());
}

export default {
  navigate,
  reset,
  push,
  replace,
  goBack,
  setTopLevelNavigator,
};
