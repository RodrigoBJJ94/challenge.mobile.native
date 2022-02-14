import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import SearchInput from "./SearchInput";
import Button from "./Button";
import Data from "./Data";
import Styles from "./Styles";

export default function Search({ navigation }) {
    const [text, setText] = useState("");
    const [textSearch, setTextSearch] = useState("");
    const [list, setList] = useState({});

    useEffect(() => {
        if (text) {
            fetch(`https://kitsu.io/api/edge/anime?filter[text]=${textSearch}`)
                .then(res => res.json())
                .then(res => {
                    setList(res);
                })
        }
    }, [text, textSearch]);

    return (
        <SafeAreaView style={Styles.searchMain}>
            <SearchInput value={text} setText={(search) => setText(search)} />
            <Button setTextSearch={setTextSearch} text={text} />
            {list.data && (
                <SafeAreaView style={Styles.searchDirection}>
                    {list.data.map((anime) => (
                        <SafeAreaView key={anime.id} style={Styles.searchContainer} >
                            <Data navigation={navigation} anime={anime} />
                        </SafeAreaView>
                    ))}
                </SafeAreaView>
            )}
        </SafeAreaView>
    );
};
