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
});

interface Props {
    count:number;
    setCounter:(count:number) => void;
};

export default function ReduceButton(props:Props) {
    const {count,setCounter} = props;
    const reduceCounter = React.useCallback(() => {
        setCounter(count - 1);
    }, [count,setCounter]);
    return(
        <TouchableOpacity style={styles.button} onPress={reduceCounter} disabled={count <= 0}>
            <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    )
}
