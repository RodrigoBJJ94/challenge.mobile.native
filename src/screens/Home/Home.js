import React from "react";
import { SafeAreaView, StyleSheet, Dimensions, Animated } from "react-native";
import { background } from "./Background";
import Statusbar from "./Statusbar";
import Button from "./Button";
import KimetsuOne from "./Animes/KimetsuOne";
import OnePiece from "./Animes/OnePiece";
import KimetsuTwo from "./Animes/KimetsuTwo";
import Jujutsu from "./Animes/Jujutsu";
import Naruto from "./Animes/Naruto";
import Attack from "./Animes/Attack";
import Hunter from "./Animes/Hunter";
import Styles from "./Styles";

export default function Home({ navigation }) {
    const { width } = Dimensions.get("screen");
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={Styles.homeView}>
            <Statusbar />
            <SafeAreaView style={StyleSheet.absoluteFillObject}>
                {background.map((image, index) => {
                    const inputRange = [
                        (index - 1) * width, index * width, (index + 1) * width
                    ];
                    const opacity = scrollX.interpolate({
                        inputRange, outputRange: [0, 1, 0]
                    });
                    return <Animated.Image
                        key={`image-${index}`} source={{ uri: image }}
                        style={[StyleSheet.absoluteFillObject, { opacity }]}
                        blurRadius={20} />
                })}
            </SafeAreaView>
            <Button navigation={navigation} />
            <Animated.ScrollView horizontal={true} pagingEnabled={true}
                showsHorizontalScrollIndicator={false} onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true })}>
                <KimetsuOne navigation={navigation} />
                <OnePiece navigation={navigation} />
                <KimetsuTwo navigation={navigation} />
                <Jujutsu navigation={navigation} />
                <Naruto navigation={navigation} />
                <Attack navigation={navigation} />
                <Hunter navigation={navigation} />
            </Animated.ScrollView>
        </SafeAreaView >
    );
};
