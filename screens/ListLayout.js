import React, { Component } from 'react';
import { Dimensions, StyleSheet, ActivityIndicator, ListView, Text, TouchableOpacity, View, Alert, Image, Platform } from 'react-native';
import { LinearGradient } from 'expo';
import { Button } from 'react-native-elements';


class ListLayout extends Component {
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

                        <View >
                            <Image source={{ uri: rowData.flower_image_url }} style={styles.imageViewContainer} />
                            <Text style={styles.textViewContainer} >{rowData.flower_name}</Text>



                            <View style={styles.obaba} >
                                <Button style={styles.txt}>*****</Button>
                                <Button style={styles.btn}
                                >₹20000/-</Button>
                                <TouchableOpacity >
                                    <Button  >ADD TO CART  </Button>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        // Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex: 1,
        marginTop: 5,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,

    },

    obaba: {
        flexDirection: 'row',
        marginLeft: 40,
        justifyContent: 'flex-end',

    },
    btn: {
        color:'#000'
    },
    imageViewContainer: {
        width: Dimensions.get('window').width,
        height: 170,
        borderRadius: 0

    },

    textViewContainer: {

    }

});

export default ListLayout;