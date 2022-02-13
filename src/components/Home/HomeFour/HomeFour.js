import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Searchbar from "./Searchbar";
import Data from "./Data";

export default function HomeFour({ navigation }) {
    const [list, setList] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=jujutsu`)
            .then(res => res.json())
            .then(res => {
                setList(res);
            })
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient style={{ flex: 1 }}
                colors={['#9B9B9D', '#5A5C5E', '#6B3433', '#796261', '#3F3F53', '#454D42', '#2B2C3E', '#514646']}>
                <Searchbar navigation={navigation} />
                {list.data && (
                    <SafeAreaView >
                        {list.data.slice(0, 1).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <Data navigation={navigation} anime={anime} />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )}
            </LinearGradient>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    viewDirection: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 45,
    }
});
