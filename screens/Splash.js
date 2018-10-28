import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import { LinearGradient } from 'expo';

//library imports 
import { Container, Content, Header, Text, Body } from 'native-base'
import { createDrawerNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

import SettingsScreen from './SettingsScreen';
import Dashboard from './Dashboard';
import Login from './Login';
import Cart from './Cart';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timePassed: false,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setTimePassed();
        }, 4000);
    }

    setTimePassed() {
        this.setState({ timePassed: true });
    }

    render() {
        // getting width according to device screen size for fitting loading image on screen
        var width = Dimensions
            .get('window')
            .width;

        if (this.state.timePassed) {
            return <MyApp />;
        }

        return (
            <TouchableOpacity style={styles.indexContainer}>
                <LinearGradient
                    colors={['#00d8d6', 'transparent']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 300,
                    }}
                />
                <Image style={styles.welcomeImage}
                    source={require('../assets/images/obaba.jpg')} />
            </TouchableOpacity>
        );
    }
}


const CustomDrawerContentComponent = (props) => (

    <Container style={styles.container1} >
        <TouchableOpacity onPress={() => this.navigation.navigate('DrawerClose')}>
            <Header style={styles.drawerHeader} >
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
                <Body>
                    <Image
                        style={styles.drawerImage} resizeMode={Image.resizeMode.contain}
                        source={require('../assets/images/obaba.jpg')} />
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
    Login: Login,

});

const Carts = createStackNavigator({
    MyCart: Cart,

});

const MyApp = createDrawerNavigator({

    // For each screen that you can navigate to, create a new entry like this:
    Home: {
        screen: DashboardS,
    },
    Login: {
        screen: LoginS
    },
    MyCart: {
        screen: Carts
    },
    Settings: {
        screen: Settings
    },
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
    indexContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcometxt: {
        textAlign: 'center',
        fontSize: 20,
        color: '#10598F'
    },
    welcomeImage: {
        width: 200,
        height: 160,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },

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

AppRegistry.registerComponent('LoadingScreen', () => rewindcapsdev);