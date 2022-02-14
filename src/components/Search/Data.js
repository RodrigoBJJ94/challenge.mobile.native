import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export default function Data({ navigation, anime }) {
    return (
        <>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Details", {
                    anime: anime.attributes.canonicalTitle
                });
            }}>
                <Image style={Styles.image}
                    source={{ uri: anime.attributes.posterImage.small }} />
            </TouchableOpacity>
            <Text style={Styles.titles}>{anime.attributes.canonicalTitle}</Text>
        </>
    );
};

const Styles = StyleSheet.create({
    image: {
        width: 140,
        height: 165,
        borderRadius: 6,
    },
    titles: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 15.3,
        color: '#ffffff',
    }
});
