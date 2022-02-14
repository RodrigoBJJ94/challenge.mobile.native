import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Image, Text, ScrollView, Dimensions, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Feather";

export default function Home2({ navigation }) {
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

    const data = [
        'https://media.kitsu.io/anime/44081/cover_image/76f0b283fe588a7b0c4782d4c2dc9b99.jpg',
        'https://media.kitsu.io/anime/12/cover_image/21ecb556255bd46b95aea4779d19789f.jpg',
        'https://media.kitsu.io/anime/cover_images/41370/original.jpg',
        'https://media.kitsu.io/anime/cover_images/42765/original.jpeg',
        'https://media.kitsu.io/anime/cover_images/1555/original.jpg',
        'https://media.kitsu.io/anime/cover_images/7442/original.png',
        'https://media.kitsu.io/anime/cover_images/6448/original.jpg'
    ];

    const { width, height } = Dimensions.get("screen");
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar backgroundColor="transparent" translucent={true} />

            <SafeAreaView style={StyleSheet.absoluteFillObject}>
                {data.map((image, index) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width
                    ]
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0]
                    })
                    return <Animated.Image
                        key={`image-${index}`}
                        source={{ uri: image }}
                        style={[
                            StyleSheet.absoluteFillObject,
                            {
                                opacity
                            }
                        ]}
                        blurRadius={20}
                    />
                })}
            </SafeAreaView>

            <TouchableOpacity style={Styles.buttonSearch} onPress={() => navigation.navigate("Search")}>
                <Icon name="search" size={30} color="#dd1b7c" style={Styles.search} />
            </TouchableOpacity>
            <Animated.ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
            )}>
                {kimetsu.data && (
                    <SafeAreaView style={{}}>


                        {kimetsu.data.slice(6, 7).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Details", {
                                        anime: anime.attributes.slug
                                    });
                                }}>
                                    <Image style={Styles.image}
                                        source={{ uri: anime.attributes.posterImage.original }} />
                                </TouchableOpacity>
                                <SafeAreaView style={Styles.viewText}>
                                    <Text style={Styles.title}>Demon Slayer: Kimetsu no Y</Text>
                                </SafeAreaView>
                            </SafeAreaView>
                        ))}

                    </SafeAreaView>
                )
                }
                {one.data && (
                    <SafeAreaView style={{}}>


                        {one.data.slice(0, 1).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Details", {
                                        anime: anime.attributes.slug
                                    });
                                }}>
                                    <Image style={Styles.image}
                                        source={{ uri: anime.attributes.posterImage.original }} />
                                </TouchableOpacity>
                                <SafeAreaView style={Styles.viewText}>
                                    <Text style={Styles.title}>{anime.attributes.titles.en_jp}</Text>
                                </SafeAreaView>
                            </SafeAreaView>
                        ))}

                    </SafeAreaView>
                )
                }
                {kimetsu.data && (
                    <SafeAreaView style={{}}>


                        {kimetsu.data.slice(0, 1).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Details", {
                                        anime: anime.attributes.slug
                                    });
                                }}>
                                    <Image style={Styles.image}
                                        source={{ uri: anime.attributes.posterImage.original }} />
                                </TouchableOpacity>
                                <SafeAreaView style={Styles.viewText}>
                                    <Text style={Styles.title}>Demon Slayer: Kimetsu no Y</Text>
                                </SafeAreaView>
                            </SafeAreaView>
                        ))}

                    </SafeAreaView>
                )
                }
                {jujutsu.data && (
                    <SafeAreaView style={{}}>


                        {jujutsu.data.slice(0, 1).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Details", {
                                        anime: anime.attributes.slug
                                    });
                                }}>
                                    <Image style={Styles.image}
                                        source={{ uri: anime.attributes.posterImage.original }} />
                                </TouchableOpacity>
                                <SafeAreaView style={Styles.viewText}>
                                    <Text style={Styles.title}>{anime.attributes.titles.en_jp}</Text>
                                </SafeAreaView>
                            </SafeAreaView>
                        ))}

                    </SafeAreaView>
                )
                }
                {naruto.data && (
                    <SafeAreaView style={{}}>

                        {naruto.data.slice(2, 3).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Details", {
                                        anime: anime.attributes.slug
                                    });
                                }}>
                                    <Image style={Styles.image}
                                        source={{ uri: anime.attributes.posterImage.original }} />
                                </TouchableOpacity>
                                <SafeAreaView style={Styles.viewText}>
                                    <Text style={Styles.title}>{anime.attributes.titles.en_jp}</Text>
                                </SafeAreaView>
                            </SafeAreaView>
                        ))}

                    </SafeAreaView>
                )
                }
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
                                        source={{ uri: anime.attributes.posterImage.original }} />
                                </TouchableOpacity>
                                <SafeAreaView style={Styles.viewText}>
                                    <Text style={Styles.title}>{anime.attributes.titles.en}</Text>
                                </SafeAreaView>
                            </SafeAreaView>
                        ))}

                    </SafeAreaView>
                )
                }
                {hunter.data && (
                    <SafeAreaView style={{}}>

                        {hunter.data.slice(1, 2).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Details", {
                                        anime: anime.attributes.slug
                                    });
                                }}>
                                    <Image style={Styles.image}
                                        source={{ uri: anime.attributes.posterImage.original }} />
                                </TouchableOpacity>
                                <SafeAreaView style={Styles.viewText}>
                                    <Text style={Styles.title}>{anime.attributes.titles.en_jp}</Text>
                                </SafeAreaView>
                            </SafeAreaView>
                        ))}

                    </SafeAreaView>
                )
                }
            </Animated.ScrollView>

        </SafeAreaView >
    );
};

const Styles = StyleSheet.create({
    viewDirection: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 45,
        width: Dimensions.get("screen").width
    },
    buttonSearch: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        width: "100%",
        alignItems: "center",
        height: 65,
        marginTop: 30,
    },
    search: {
        alignSelf: "flex-end",
        paddingTop: 20,
        paddingRight: 25,
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
    viewText: {
        backgroundColor: '#fe1485',
        padding: 4,
        borderRadius: 20,
        width: 206,
        height: 32,
        marginTop: 28,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },
    image: {
        width: 340,
        height: 540,
        borderRadius: 20
    }
});
/*
export default function Home({ navigation }) {
    const [list, setList] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=kimetsu`)
            .then(res => res.json())
            .then(res => {
                setList(res);
            })
    }, []);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient style={{ flex: 1 }}
                colors={['#450F20', '#3F1B45', '#8C3D6F', '#924651', '#4D3355', '#5B425C', '#D5676A']}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <TouchableOpacity style={Styles.buttonSearch} onPress={() => navigation.navigate("8")}>
                    <Icon name="search" size={30} color="#dd1b7c" style={Styles.search} />
                </TouchableOpacity>
                {list.data && (
                    <SafeAreaView style={{}}>
                        <ScrollView horizontal>
                            {list.data.slice(1, 7).map((anime) => (
                                <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate("9", {
                                            anime: anime.attributes.slug
                                        });
                                    }}>
                                        <Image style={Styles.image}
                                            source={{ uri: anime.attributes.posterImage.original }} />
                                    </TouchableOpacity>
                                    <SafeAreaView style={Styles.viewText}>
                                        <Text style={Styles.title}>Demon Slayer: Kimetsu no Y</Text>
                                    </SafeAreaView>
                                </SafeAreaView>
                            ))}
                        </ScrollView>
                    </SafeAreaView>
                )
                }
            </LinearGradient >
        </SafeAreaView >
    );
};
*/

