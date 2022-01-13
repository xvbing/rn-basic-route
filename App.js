/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-easy-toast';
import {StyleSheet, Image} from 'react-native';

import NavigationService from './src/components/global/NavigationService';
import Events from './src/common/events';
import Loading from './src/components/global/Loading';
import LoadingUtil from './src/common/LoadingUtil';

import Main from './src/pages/tab/main/Main';
import User from './src/pages/tab/user/User';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeIconNormal = require('./static/image/tabBar_home01.png');
const HomeIconActive = require('./static/image/tabBar_home_selected01.png');
const UserIconNormal = require('./static/image/tabBar_user01.png');
const UserIconActive = require('./static/image/tabBar_user_selected01.png');

// tab的文字
function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Main';
  switch (routeName) {
    case 'Main':
      return '首页';
    case 'User':
      return '我的';
    default:
      return '纪念币交易宝';
  }
}

// 主页的tab框架
function HomeScreen({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
  }, [navigation, route]);

  return (
    <Tab.Navigator
      headerMode="float"
      screenOptions={({route}) => ({
        // tabBarIcon: ({focused, color, size}) => {
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = focused ? HomeIconActive : HomeIconNormal;
          }
          if (route.name === 'User') {
            iconName = focused ? UserIconActive : UserIconNormal;
          }
          // return <Image style={style.iconStyle} source={{uri: iconName}} />;
          return <Image style={styles.iconStyle} source={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ffdb53',
        inactiveTintColor: '#7F8389',
        tabStyle: {},
        labelStyle: {
          fontSize: 12,
          marginBottom: 3,
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{tabBarLabel: '首页'}}
        // listeners={{
        //   tabPress: (e) => {
        //     // Prevent default action
        //     // console.log(e);
        //     e.preventDefault();
        //   },
        // }}
      />
      <Tab.Screen name="User" component={User} options={{tabBarLabel: '我的'}} />
    </Tab.Navigator>
  );
}

class App extends React.Component {
  componentDidMount() {
    //封装全局方法
    const that = this;
    global.toast = (message, callback, duration = 500, onPress) => {
      that.toast.show(message, duration, callback, onPress);
    };
    global.navigation = NavigationService;
    global.bus = Events;
    global.LoadingUtil = LoadingUtil;
  }

  render() {
    return (
      <>
        <SafeAreaProvider>
          <NavigationContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          >
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: {backgroundColor: '#fff'}}}>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: '主页',
                  headerShown: true,
                  headerStyle: {
                    // backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#3E3E3E',
                  headerTitleStyle: {
                    // fontWeight: 'bold',
                    textAlign: 'center',
                  },
                  animationEnabled: true,
                }}
              />
            </Stack.Navigator>
            <Toast ref={toast => (this.toast = toast)} position={'center'} opacity={0.8} />
            <Loading ref={ref => (global.mLoadingComponentRef = ref)} />
          </NavigationContainer>
        </SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    fontSize: 22,
  },
  iconStyle: {
    width: 27,
    height: 29,
    resizeMode: 'contain',
  },
});

export default App;
