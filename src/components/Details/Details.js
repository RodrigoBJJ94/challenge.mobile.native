import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from "react-native-vector-icons/Feather";

export default function Details({ navigation, route }) {
    const [list, setList] = useState({});
    const [loading, setLoading] = useState(true);

    animeData = route.params?.anime;

    async function fetchDetails(animeData) {
        setLoading(false);
        const api = `https://kitsu.io/api/edge/anime?filter[text]=${animeData}`
        try {
            const response = await fetch(api)
            if (response.status == 200) {
                const data = await response.json();
                setList(data);
            } else {
                setList(null);
            }
            setLoading(true);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        fetchDetails(animeData)
    }, [animeData]);

    if (!loading) {
        return (
            <SafeAreaView style={Styles.viewDetails}>
                <SafeAreaView style={Styles.viewGoBack}>
                    <TouchableOpacity style={Styles.buttonGoBack}>
                        <Icon name="chevron-left" size={28} color="#ffffff" style={Styles.iconButton} />
                        <Text style={Styles.goBack}>Back</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <ActivityIndicator color="#fe1487" style={{ marginTop: 5 }} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={Styles.viewDetails}>
            {list.data && (
                <SafeAreaView>
                    {animeData !== "naruto" ? list.data.slice(0, 1).map((anime) => (
                        <SafeAreaView key={anime.id}>
                            <SafeAreaView style={Styles.viewDirection}>
                                <SafeAreaView style={Styles.viewGoBack}>
                                    <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.buttonGoBack}>
                                        <Icon name="chevron-left" size={28} color="#ffffff" style={Styles.iconButton} />
                                        <Text style={Styles.goBack}>Back</Text>
                                    </TouchableOpacity>
                                </SafeAreaView>
                                <SafeAreaView>
                                    <Text style={Styles.title}>
                                        {animeData !== "attack" ? anime.attributes.titles.en_jp : anime.attributes.titles.en}
                                    </Text>
                                </SafeAreaView>
                            </SafeAreaView>
                            <SafeAreaView>
                                <ScrollView>
                                    <SafeAreaView style={{ alignItems: "center" }}>
                                        <Image source={{ uri: anime.attributes.posterImage.original }} style={Styles.image} />
                                    </SafeAreaView>
                                    <SafeAreaView style={Styles.viewText}>
                                        <Text style={Styles.synopsis}>
                                            {anime.attributes.synopsis}
                                        </Text>
                                        <SafeAreaView style={Styles.viewVideo}>
                                            <YoutubePlayer height={520} width={352} videoId={anime.attributes.youtubeVideoId} />
                                        </SafeAreaView>
                                    </SafeAreaView>
                                </ScrollView>
                            </SafeAreaView>
                        </SafeAreaView>
                    )) : list.data.slice(2, 3).map((anime) => (
                        <SafeAreaView key={anime.id}>
                            <SafeAreaView style={Styles.viewDirection}>
                                <SafeAreaView style={Styles.viewGoBack}>
                                    <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.buttonGoBack}>
                                        <Icon name="chevron-left" size={28} color="#ffffff" style={Styles.iconButton} />
                                        <Text style={Styles.goBack}>Back</Text>
                                    </TouchableOpacity>
                                </SafeAreaView>
                                <SafeAreaView>
                                    <Text style={Styles.title}> {anime.attributes.titles.en_jp}</Text>
                                </SafeAreaView>
                            </SafeAreaView>
                            <SafeAreaView>
                                <ScrollView>
                                    <SafeAreaView style={{ alignItems: "center" }}>
                                        <Image source={{ uri: anime.attributes.posterImage.original }} style={Styles.image} />
                                    </SafeAreaView>
                                    <SafeAreaView style={Styles.viewText}>
                                        <Text style={Styles.synopsis}>
                                            {anime.attributes.synopsis}
                                        </Text>
                                        <SafeAreaView style={Styles.viewVideo}>
                                            <YoutubePlayer height={520} width={352} videoId={anime.attributes.youtubeVideoId} />
                                        </SafeAreaView>
                                    </SafeAreaView>
                                </ScrollView>
                            </SafeAreaView>
                        </SafeAreaView>
                    ))}
                </SafeAreaView>
            )}
        </SafeAreaView>
    );
}

const Styles = StyleSheet.create({
    viewDetails: {
        flex: 1,
        backgroundColor: "#3f3f3f",
    },
    viewVideo: {
        marginTop: 16,
    },
    goBack: {
        color: "#ffffff",
        fontSize: 16,
        position: "absolute",
        marginLeft: 26,
    },
    buttonGoBack: {
        position: "absolute",
        height: 30,
        width: "25%",
        marginTop: 42,
        justifyContent: "center",
    },
    iconButton: {
        marginLeft: -1,
    },
    viewDirection: {
        alignItems: "center",
        justifyContent: "center",
    },
    viewText: {
        padding: 20,
        marginTop: -9,
        alignItems: "center",
    },
    viewGoBack: {
        backgroundColor: "#fe1487",
        width: "100%",
        paddingTop: 74,
        paddingBottom: 6,
    },
    synopsis: {
        textAlign: "center",
        color: '#ffffff',
        fontSize: 16.8,
    },
    image: {
        width: 140,
        height: 200,
        borderRadius: 10,
        marginTop: 16,
    },
    title: {
        color: "#ffffff",
        fontSize: 17.5,
        textAlign: "center",
        fontWeight: "500",
        marginTop: -35,
    }
});
