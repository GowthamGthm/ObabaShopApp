import React from 'react';
// import { Platform, StatusBar, StyleSheet, View, Image} from 'react-native';
import { ScrollView, StatusBar, KeyboardAvoidingView, StyleSheet, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import TabTopNavigation from './Tabss';
import Tabss from './Tabss';
import Rev from './Rev';
import ListLayout from './ListLayout';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import { LinearGradient } from 'expo';


export default class Dashboard extends React.Component {


    TestFunction() {
// git test 
        Alert.alert('Button Pressed !!!')

    }

    static navigationOptions = ({ navigation }) => {
        return {

            // headerStyle: { <LinearGradient
            //     colors={['#2bcbba', 'transparent']}
            //     style={{
            //         position: 'absolute',
            //         left: 0,
            //         right: 0,
            //         top: 0,
            //         height: 300,
            //     }}
            // />},

            title: 'Home',

            headerTintColor: '#000',
            headerStyle: {
                backgroundColor: '#7987f7'
            },

            tabBarLabel: 'inScreen',
            tabBarVisible: false,
            headerRight:
                <TouchableOpacity onPress={this.TestFunction}>

                    <Image
                        source={require('../assets/images/profile.png')}
                        resizeMode={Image.resizeMode.contain}
                        style={{ height: 25, width: 25, marginRight: 15 }}
                    /></TouchableOpacity>,
            headerLeft:
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SettingsScreen')}>
                    <Image
                        source={require('../assets/images/menu.png')}
                        resizeMode={Image.resizeMode.contain}
                        style={{ height: 25, width: 25, marginLeft: 15 }}
                    />
                </TouchableOpacity>

        };
    };



    render() {
        return (

            <ScrollView behavior="padding" style={styles.container}>
                <TextInput underlineColorAndroid='transparent' placeholder="Search Obaba.shop"
                    placeholderTextColor='#b2bec3' backgroundColor='#dfe6e9' Image={require('../assets/images/robot-dev.png')}
                    style={styles.input}></TextInput>

                <View style={styles.formcontainer}>
                    <Rev />
                </View>
                <ListLayout />

                {/* <Tabss/> */}
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: '#fff',
        height: Dimensions.get('window').height,
        padding: 5
    },
    formcontainer: {
        height: 150,
    },
    container1: {
        width: 310,

    },
    button: {
        backgroundColor: '#2980b9',
        height: 40,
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center', // <-- the magic
        fontSize: 18,
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',


    },
    input: {
        height: 40,
        margin: 10,
        paddingLeft: 10,
        backgroundColor: '#ecf0f1',
        color: "#2c3e50",
    },
});

