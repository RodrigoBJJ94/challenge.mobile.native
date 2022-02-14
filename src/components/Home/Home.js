import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions, Animated } from "react-native";
import { background } from "./Background";
import Statusbar from "./Statusbar";
import Button from "./Button";
import ImageHome from "./ImageHome";
import TitleKimetsu from "./Titles/TitleKimetsu";
import TitleEnJp from "./Titles/TitleEnJp";
import TitleEn from "./Titles/TitleEn";
import Styles from "./Styles";

export default function Home({ navigation }) {
    const [kimetsu, setKimetsu] = useState({});
    const [one, setOne] = useState({});
    const [jujutsu, setJujutsu] = useState({});
    const [naruto, setNaruto] = useState({});
    const [attack, setAttack] = useState({});
    const [hunter, setHunter] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=kimetsu`)
            .then(res => res.json())
            .then(res => {
                setKimetsu(res);
            })
    }, []);

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=one`)
            .then(res => res.json())
            .then(res => {
                setOne(res);
            })
    }, []);

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=jujutsu`)
            .then(res => res.json())
            .then(res => {
                setJujutsu(res);
            })
    }, []);

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=naruto`)
            .then(res => res.json())
            .then(res => {
                setNaruto(res);
            })
    }, []);

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=attack`)
            .then(res => res.json())
            .then(res => {
                setAttack(res);
            })
    }, []);

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=hunter`)
            .then(res => res.json())
            .then(res => {
                setHunter(res);
            })
    }, []);

    const { width } = Dimensions.get("screen");
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
            <Animated.ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true })}>
                {kimetsu.data && (
                    <SafeAreaView style={{}}>
                        {kimetsu.data.slice(6, 7).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <ImageHome navigation={navigation} anime={anime} />
                                <TitleKimetsu />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )}
                {one.data && (
                    <SafeAreaView style={{}}>
                        {one.data.slice(0, 1).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <ImageHome navigation={navigation} anime={anime} />
                                <TitleEnJp anime={anime} />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )}
                {kimetsu.data && (
                    <SafeAreaView style={{}}>
                        {kimetsu.data.slice(0, 1).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <ImageHome navigation={navigation} anime={anime} />
                                <TitleKimetsu />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )}
                {jujutsu.data && (
                    <SafeAreaView style={{}}>
                        {jujutsu.data.slice(0, 1).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <ImageHome navigation={navigation} anime={anime} />
                                <TitleEnJp anime={anime} />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )}
                {naruto.data && (
                    <SafeAreaView style={{}}>
                        {naruto.data.slice(2, 3).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <ImageHome navigation={navigation} anime={anime} />
                                <TitleEnJp anime={anime} />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )}
                {attack.data && (
                    <SafeAreaView style={{}}>
                        {attack.data.slice(0, 1).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Details", {
                                        anime: "attack"
                                    });
                                }}>
                                    <Image style={Styles.image}
                                        source={{ uri: anime.attributes.posterImage.original }}
                                    />
                                </TouchableOpacity>
                                <TitleEn anime={anime} />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )}
                {hunter.data && (
                    <SafeAreaView style={{}}>
                        {hunter.data.slice(1, 2).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <ImageHome navigation={navigation} anime={anime} />
                                <TitleEnJp anime={anime} />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )}
            </Animated.ScrollView>
        </SafeAreaView >
    );
};
