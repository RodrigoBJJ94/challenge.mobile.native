import React from "react";
import { SafeAreaView, Text } from "react-native";
import Styles from "./Styles";

export default function TitleKimetsu() {
    return (
        <SafeAreaView style={Styles.viewText}>
            <Text
                style={Styles.title}>
                Demon Slayer: Kimetsu no Y
            </Text>
        </SafeAreaView>
    );
};
