import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#008080',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    disabledButton:{
        backgroundColor: 'gray',
    }
});

interface Props {
    disabled?:boolean,
    label:string,
    onPress:() => void,
}

export default function Button(props:Props) {
    const {disabled,label,onPress} = props;

    return(
        <TouchableOpacity
            style={[styles.button,disabled && styles.disabledButton]}
            onPress={onPress}
            disabled={disabled}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}
