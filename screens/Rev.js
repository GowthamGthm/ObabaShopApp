import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, KeyboardAvoidingView, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 150;

const images = [
    "https://www.pastearticle.com/wp-content/uploads/2018/04/orignal-logo-Copy-2-500x489.jpg",
    "https://www.obaba.in/modules/mod_bannerslider/images/3Website_20development.jpg",
    "https://www.obabaerp.com/images/coollogo_com.png",
    "https://image-store.slidesharecdn.com/11c2e488-2592-421a-a757-38bfd4ef88b9-original.png",
    "https://media.licdn.com/dms/image/C5112AQHrnOfkdmX4QQ/article-inline_image-shrink_1000_1488/0?e=1542844800&v=beta&t=q-nSUX_1Y8Iyjni3ZlyUZ7y62bEi-DfImUax2Fad8g8",

];

export default class App extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} resizeMode={Image.resizeMode.contain} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth} style={styles.banner}>

                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    banner: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});