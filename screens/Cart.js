import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Image, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo';

class Cart extends Component {

    static navigationOptions = {
        //header: null,
        title: 'MyCart'
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    GetItem(flower_name) {

        Alert.alert(flower_name);

    }

    componentDidMount() {

        return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function () {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .9,
                    width: "100%",
                    marginBottom: 5,
                    marginTop: 5,
                    backgroundColor: "#6c5ce7",
                }}
            />
        );
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (

            <View style={styles.MainContainer}>

                <ListView

                    dataSource={this.state.dataSource}

                    renderSeparator={this.ListViewItemSeparator}

                    renderRow={(rowData) =>
                        <TouchableOpacity>
                            <View style={{ flex: 1, flexDirection: 'row' }}>

                                <LinearGradient
                                    colors={['#c8d6e5', 'transparent']}
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        height: 300,
                                    }}
                                />

                                <Image source={{ uri: rowData.flower_image_url }} style={styles.imageViewContainer} />
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Text onPress={this.GetItem.bind(this, rowData.flower_name)} style={styles.textViewContainer} >{rowData.flower_name}</Text>

                                    <Button onPress={() => {
                                        Alert.alert('Checking this item, please wait...!');
                                    }} style={styles.btn}>CHECKOUT</Button>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />

                <Text> Rs.35400.00</Text>
                <TouchableOpacity onPress={() => {
                    Alert.alert('Checking,,, please wait...!');
                }}>
                    <Button style={styles.btn1} >Proceed to Checkout</Button>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        // Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex: 1,
        margin: 0,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,

    },

    imageViewContainer: {
        width: '50%',
        height: 100,
        margin: 10,
        borderRadius: 10

    },

    textViewContainer: {

    },
    btn: {
        height: 30,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        margin: 5,
        bottom: 0,
        right: 0
    },
    btn1: {
        right: 0,
        bottom: 0,

    }

});

export default Cart;