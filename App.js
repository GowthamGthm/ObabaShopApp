import React from 'react';
import { Platform, StatusBar, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { LinearGradient } from 'expo';



//library imports 
import { Container, Content, Header, Text, Body } from 'native-base'
import { createDrawerNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

import AppNavigator from './navigation/AppNavigator';
import Splash from './screens/Splash';
import SettingsScreen from './screens/SettingsScreen';
import Dashboard from './screens/Dashboard';
import MainTabNavigator from './navigation/MainTabNavigator';
import Login from './screens/Login';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Splash />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}


const CustomDrawerContentComponent = (props) => (

  <Container style={styles.container1} >
    <TouchableOpacity onPress={() => this.navigation.navigate('DrawerClose')}>
      <Header style={styles.drawerHeader} >
        <LinearGradient
          colors={['#e84393', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
        <Body>
          <Image
            style={styles.drawerImage} resizeMode={Image.resizeMode.contain}
            source={require('./assets/images/obaba.jpg')} />
          <Text style={styles.txt}>obabaerp.shop@gmail.com</Text>
        </Body>

      </Header>
    </TouchableOpacity>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

//ACTION BAR
const Settings = createStackNavigator({
  SettingsScreen: SettingsScreen,

});

const DashboardS = createStackNavigator({
  Dashboard: Dashboard,

});

const LoginS = createStackNavigator({
  Dashboard: Login,

});

const MyApp = createDrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: DashboardS,
  },
  Settings: {
    screen: Settings
  },
  Login: {
    screen: LoginS
  }
},
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  container1: {
    marginTop: 24
  },
  drawerHeader: {
    height: 150,
    backgroundColor: '#0984e3'
  },
  drawerImage: {
    marginTop: 30,
    height: 80,
    width: 80,
    borderRadius: 0
  },
  txt: {
    paddingTop: 0,

  }

});
