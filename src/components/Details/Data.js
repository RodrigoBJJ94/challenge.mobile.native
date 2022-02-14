import React from "react";
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import YoutubePlayer from "react-native-youtube-iframe";
import Styles from "./Styles";

export default function DataOne({ navigation, anime, animeData }) {
    return (
        <>
            <SafeAreaView style={Styles.viewDirection}>
                <SafeAreaView style={Styles.viewGoBack}>
                    <TouchableOpacity onPress={() => navigation.goBack()}
                        style={Styles.buttonGoBack}>
                        <Icon name="chevron-left" size={28} color="#ffffff"
                            style={Styles.iconButton} />
                        <Text style={Styles.goBack}>Back</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView>
                    <Text style={Styles.title}>
                        {animeData !== "attack" ? anime.attributes.titles.en_jp
                            : anime.attributes.titles.en}
                    </Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView>
                <ScrollView>
                    <SafeAreaView style={Styles.viewImage}>
                        <Image source={{ uri: anime.attributes.posterImage.original }}
                            style={Styles.image} />
                    </SafeAreaView>
                    <SafeAreaView style={Styles.viewText}>
                        <Text style={Styles.synopsis}>
                            {anime.attributes.synopsis}
                        </Text>
                        <SafeAreaView style={Styles.viewVideo}>
                            <YoutubePlayer height={480} width={354}
                                videoId={anime.attributes.youtubeVideoId} />
                        </SafeAreaView>
                    </SafeAreaView>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};
