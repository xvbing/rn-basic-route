/**
 ** Created by Bingo on 2021/12/1.
 ** desc:
 **/
import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

class User extends React.Component {
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
    this.initData();
  }

  // 初始化页面数据
  initData = () => {};
  // 页面跳转
  navigateTo = param => {};

  render() {
    return (
      <View style={styles.flexCenter}>
        <ScrollView>
          <View>
            <Text>User</Text>
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

export default User;
