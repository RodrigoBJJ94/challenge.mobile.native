import React from "react";
import { SafeAreaView, Text } from "react-native";
import Styles from "./Styles";

export default function TitleEnJp({ anime }) {
    return (
        <SafeAreaView style={Styles.viewText}>
            <Text
                style={Styles.title}>
                {anime.attributes.titles.en_jp}
            </Text>
        </SafeAreaView>
    );
};
