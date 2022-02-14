import React from "react";
import { TouchableOpacity, Image } from "react-native";
import Styles from "./Animes/Styles";

export default function ImageHome({ navigation, anime }) {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("Details", {
                anime: anime.attributes.slug
            });
        }}>
            <Image
                style={Styles.image}
                source={{ uri: anime.attributes.posterImage.original }}
            />
        </TouchableOpacity>
    );
};
