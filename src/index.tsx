import React from "react";
import {StyleSheet, View} from "react-native";
import PlusButton from "./PlusButton";
import CounterText from "./CounterText";
import ReduceButton from "./ReduceButton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default function Counter() {
    const [count, setCounter] = React.useState(0);

    return (
        <View style={styles.container}>
            <PlusButton count={count} setCounter={setCounter}/>
            <CounterText count={count} setCounter={setCounter}/>
            <ReduceButton count={count} setCounter={setCounter}/>
        </View>
    )
}
