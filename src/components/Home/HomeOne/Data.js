import React from "react";
import { SafeAreaView, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export default function Data({ navigation, anime }) {
    return (
        <>
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
        </>
    );
};

const Styles = StyleSheet.create({
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
