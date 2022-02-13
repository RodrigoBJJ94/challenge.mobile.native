import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import NotLoading from "./NotLoading";
import DataOne from "./DataOne";
import DataTwo from "./DataTwo";

export default function Details({ navigation, route }) {
    const [list, setList] = useState({});
    const [loading, setLoading] = useState(true);

    animeData = route.params?.anime;

    async function fetchDetails(animeData) {
        setLoading(false);
        const kitsu = `https://kitsu.io/api/edge/anime?filter[text]=${animeData}`
        try {
            const response = await fetch(kitsu)
            if (response.status == 200) {
                const data = await response.json();
                setList(data);
            } else {
                setList(null);
            }
            setLoading(true);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        fetchDetails(animeData)
    }, [animeData]);

    if (!loading) {
        return <NotLoading />
    }

    return (
        <SafeAreaView style={Styles.viewDetails}>
            {list.data && (
                <SafeAreaView>
                    {animeData !== "naruto" ? list.data.slice(0, 1).map((anime) => (
                        <SafeAreaView key={anime.id}>
                            <DataOne navigation={navigation} anime={anime} animeData={animeData} />
                        </SafeAreaView>
                    )) : list.data.slice(2, 3).map((anime) => (
                        <SafeAreaView key={anime.id}>
                            <DataTwo navigation={navigation} anime={anime} animeData={animeData} />
                        </SafeAreaView>
                    ))}
                </SafeAreaView>
            )}
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    viewDetails: {
        flex: 1,
        backgroundColor: "#3f3f3f",
    }
});
