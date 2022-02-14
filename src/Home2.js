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
        'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'

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
                        blurRadius={50}
                    />
                })}
            </SafeAreaView>

            <TouchableOpacity style={Styles.buttonSearch} onPress={() => navigation.navigate("Search")}>
                <Icon name="search" size={30} color="#dd1b7c" style={Styles.search} />
            </TouchableOpacity>
            <Animated.ScrollView horizontal pagingEnabled={true} onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
            )}>
                {kimetsu.data && (
                    <SafeAreaView style={{}}>


                        {kimetsu.data.slice(7, 8).map((anime) => (
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

                        {naruto.data.slice(3, 4).map((anime) => (
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

