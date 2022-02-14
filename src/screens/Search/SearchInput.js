import React from "react";
import { TextInput } from "react-native";
import Styles from "./Styles";

export default function SearchInput({ value, setText }) {
    return (
        <TextInput
            onChangeText={(text) => setText(text)}
            value={value}
            style={Styles.search}
        />
    );
};
