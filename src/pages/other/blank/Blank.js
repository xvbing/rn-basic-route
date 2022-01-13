import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, TextInput} from 'react-native';
// import screen from '../../../common/screen';
// import Popup from '../../../components/Popup';
// import Toast from '../../../components/Toast';
// import ToastTip from '../../../components/ToastTip';

class Blank extends React.Component {
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
  // 我的页信息
  postBaseInfo = () => {
    let params = {};
    // console.log(params);
    if (this.state.loading) {
      return;
    }
    this.setState({loading: true});
    global.api
      .postBaseInfo(params)
      .then((res) => {
        // console.log(res);
        this.setState({loading: false});
        let data = res.data;
        if (data.code === 1) {
          // console.log(data.data);
        } else if (data.code === 401) {
          // global.navigation.navigate('LoginView');
        } else {
          global.toast(data.msg);
        }
      })
      .catch((err) => {
        console.log('postBaseInfo', err);
        global.toast('出错了：postBaseInfo');
      });
  };
  // toast返回
  toastCallback = (res) => {
    this.closePopup();
    if (res && res.type) {
    }
  };
  // 页面跳转
  navigateTo = (param) => {};

  render() {
    return (
      <View style={styles.flexCenter}>
        <ScrollView>
          <View>
            <Text>空白</Text>
          </View>
        </ScrollView>
        <Popup modalVisible={this.state.modalVisible} type={this.state.typePopup} close={this.closePopup}>
          {this.state.modelName === 'toastTip' ? (
            <Toast toast={'toastTip'} title={'提示'} confirmText={this.state.toastTip.btn} close={this.toastCallback}>
              <ToastTip tipText={this.state.toastTip.content} />
            </Toast>
          ) : null}
        </Popup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexCenter: {
    // marginTop: 10,
  },
});

export default Blank;
