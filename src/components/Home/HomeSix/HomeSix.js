import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Searchbar from "./Searchbar";
import Data from "./Data";

export default function HomeSix({ navigation }) {
    const [list, setList] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=attack`)
            .then(res => res.json())
            .then(res => {
                setList(res)
            })
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient style={{ flex: 1 }}
                colors={['#E0E8F6', '#D8EAFF', '#92BFFF', '#6376A3', '#645E52', '#A69C75', '#393426']}>
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
