import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import ImageHome from "../ImageHome";
import TitleKimetsu from "../Titles/TitleKimetsu";
import Styles from "./Styles";

export default function KimetsuTwo({ navigation }) {
    const [kimetsu, setKimetsu] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=kimetsu`)
            .then(res => res.json())
            .then(res => {
                setKimetsu(res);
            })
    }, []);

    return (
        <>
            {
                kimetsu.data && (
                    <SafeAreaView style={{}}>
                        {kimetsu.data.slice(0, 1).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <ImageHome navigation={navigation} anime={anime} />
                                <TitleKimetsu />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )
            }
        </>
    )
};
