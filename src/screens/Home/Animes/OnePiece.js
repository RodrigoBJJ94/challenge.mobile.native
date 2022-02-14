import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import ImageHome from "../ImageHome";
import TitleEnJp from "../Titles/TitleEnJp";
import Styles from "./Styles";

export default function OnePiece({navigation}) {
    const [one, setOne] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=one`)
            .then(res => res.json())
            .then(res => {
                setOne(res);
            })
    }, []);

    return (
        <>
            {
                one.data && (
                    <SafeAreaView style={{}}>
                        {one.data.slice(0, 1).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <ImageHome navigation={navigation} anime={anime} />
                                <TitleEnJp anime={anime} />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )
            }
        </>
    )
};
