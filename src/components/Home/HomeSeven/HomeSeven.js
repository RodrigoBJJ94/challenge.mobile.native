import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Searchbar from "./Searchbar";
import Data from "./Data";

export default function HomeSeven({ navigation }) {
    const [list, setList] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=hunter`)
            .then(res => res.json())
            .then(res => {
                setList(res);
            })
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient style={{ flex: 1 }}
                colors={['#F7FCB2', '#EDF4B0', '#D5E491', '#84B15B', '#A6C1A4', '#89A68A', '#69D76E']}>
                <Searchbar navigation={navigation} />
                {list.data && (
                    <SafeAreaView >
                        {list.data.slice(1, 2).map((anime) => (
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
