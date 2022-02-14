import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Styles from "./Animes/Styles";

export default function Button({ navigation }) {
    return (
        <TouchableOpacity style={Styles.buttonSearch}
            onPress={() => navigation.navigate("Search")}>
            <Icon
                name="search"
                size={30}
                color="#dd1b7c"
                style={Styles.search} />
        </TouchableOpacity>
    );
};
