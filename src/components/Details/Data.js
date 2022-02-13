import React from "react";
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Data({ navigation, anime, animeData }) {
    return (
        <>
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
        </>
    );
};

const Styles = StyleSheet.create({
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
