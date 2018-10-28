import React from 'react';
// import { Platform, StatusBar, StyleSheet, View, Image} from 'react-native';
import { Platform, AppRegistry, StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import TabToolbar from './TabToolbar';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginForm from './LoginForm';
import { LinearGradient } from 'expo';

import SettingsScreen from './SettingsScreen';


export default class Login extends React.Component {


  static navigationOptions = {
    //header: null,
    title: 'Login'
  }

  constructor(props) {
    super(props);
    navigate = props.navigation,
      this.state = { email: '', password: '', device_token: '', device_type: '' };

  }

  //   tabBarLabel: 'inScreen',
  //   tabBarVisible:false,
  //   headerRight:
  //   <TouchableOpacity onPress={() => this.SettingsScreen}>
  //   <Image 
  //   source={require('../assets/images/profile.png')}
  //         resizeMode = {Image.resizeMode.contain}
  //         style={{ height: 30, width: 30}} 
  //         /></TouchableOpacity>,

  //    headerLeft: 
  //    <TouchableOpacity onPress={() => alert('This is a button!')}>
  //    <Image 
  //    source={require('../assets/images/menu.png')}
  //          resizeMode = {Image.resizeMode.contain}
  //          style={{ height: 30, width: 30}} 
  //          /></TouchableOpacity> 
  //   }

  // TestFunction() {

  //   Alert.alert('Button Pressed !!!')

  // }

  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
       
        <View style={styles.logocontainer}>
        <LinearGradient
          colors={['#2bcbba', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
          <Image style={styles.logo} source={require('../assets/images/obaba.jpg')} resizeMode={Image.resizeMode.contain} />
          <Text style={styles.obaba}>By Obaba</Text>
        </View>
        <View style={styles.formcontainer}>

          <LoginForm />

        </View>
        
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    

    flexDirection: 'column'
  },
  logocontainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 110,
    height: 150,
    borderRadius: 50
  },
  bar: {
    width: 110,
    height: 20,
  },
  formcontainer: {
    width: 110,
    height: 150,
  },
  obaba: {
    color: "#B53471",
  },
});
AppRegistry.registerComponent('Login', () => Login);