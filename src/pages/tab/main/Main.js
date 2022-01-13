/**
 ** Created by Bingo on 2021/12/1.
 ** desc:
 **/
import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

class Main extends React.Component {
  state = {
    // 弹出框相关
    modalVisible: false,
    typePopup: 'center',
    modelName: '',
    loading: false,
    // 操作提示
    toastTip: {
      type: 101,
      content: ['您还未进行实名认证，无法提现'],
      btn: '去认证',
    },
  };

  componentDidMount(): void {
    // this.initData();
  }
  componentWillUnmount() {
    bus.removeEventListener('back');
  }

  // 初始化bus
  initBus = () => {
    bus.addListener('back', () => {
      console.log('back');
      // this.resetPage();
    });
  };
  // 初始化页面数据
  initData = () => {
    // global.toast('123');
    toast('123');
  };
  // 页面跳转
  navigateTo = param => {};

  render() {
    return (
      <View style={styles.flexCenter}>
        <ScrollView>
          <View>
            <Text
              onPress={() => {
                this.initData();
              }}
            >
              主页1
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexCenter: {
    // marginTop: 10,
  },
});

export default Main;
