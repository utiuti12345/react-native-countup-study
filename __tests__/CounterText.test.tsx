import 'react-native';
import React from "react";
import renderer from "react-test-renderer";
import CounterText from "../src/CounterText";

describe('CounterText', () => {
    it('通常のCounterTextを描画できる', () => {
        const component = renderer.create(<CounterText count={0}/>);
        expect(component).toMatchSnapshot();
    });
    it('カウントが10以上の時のテキストが表示されているCounterTextが描画できる', () => {
        const component = renderer.create(<CounterText count={10}/>);
        expect(component).toMatchSnapshot();
    });
});
