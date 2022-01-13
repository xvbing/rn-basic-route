import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image, TextInput} from 'react-native';

class Compo extends React.Component {
  state = {
    loading: false,
  };
  componentDidMount(): void {}

  render() {
    return (
      <View style={styles.btn}>
        <Text style={styles.btn} numberOfLines={1}>
          空白
        </Text>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => {
            this.pub();
          }}
        >
          <Text style={styles.btnText}>确定</Text>
        </TouchableOpacity>
        <Image style={styles.rightImg} resizeMode={'contain'} source={{uri: this.state.rightImg}} />
        <TextInput
          style={styles.input}
          placeholder={'填写手机号码'}
          keyboardType={'numeric'}
          editable={true}
          multiline={true}
          defaultValue={''}
          value={''}
          onChangeText={this.telChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexCenter: {},
});

export default Compo;
