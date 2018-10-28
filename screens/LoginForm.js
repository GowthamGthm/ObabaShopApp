import React from 'react';
// import { Platform, StatusBar, StyleSheet, View, Image} from 'react-native';
import { Platform, StatusBar, StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo';



export default class LoginForm extends React.Component {
    render() {
        return (

            <View style={styles.container}>

                <TextInput underlineColorAndroid='transparent' placeholder="Username or E-mail"
                    placeholderTextColor='#000' returnKeyType="next"
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                ></TextInput>

                <TextInput underlineColorAndroid='transparent' placeholder="Password" placeholderTextColor='#000'
                    returnKeyType="go"
                    secureTextEntry style={styles.input}
                    ref={(input) => this.passwordInput = input}></TextInput>

                <TouchableOpacity style={styles.container1}>
                    <LinearGradient
                        colors={['#D980FA', 'transparent']}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            height: 300,
                        }}
                    />
                    <Button style={styles.button}>LOGIN</Button>

                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: -70,
        padding: 20,
    },
    container1: {
        width: 310,

    },
    button: {
        height: 40,

        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',


    },
    input: {
        height: 40,
        width: 310,
        paddingLeft: 10,
        marginBottom: 20,
        backgroundColor: '#c7ecee',
        color: "#2c3e50",
    },
});
