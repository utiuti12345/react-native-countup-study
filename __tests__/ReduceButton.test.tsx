import 'react-native';
import React from "react";
import renderer from "react-test-renderer";
import ReduceButton from "../src/ReduceButton";
import {fireEvent, render} from "@testing-library/react-native";

describe('ReduceButton',() =>{
        describe('countが0より大きい時', () => {
            const count = 10;
            it('通常のReduceButtonを描画することができる', () => {
                const component = renderer.create(<ReduceButton count={count} setCounter={() => {}}/>);
                expect(component).toMatchSnapshot();
            });
            it('ボタンクリックでカウントが${count}から${count -1}になる',  () => {
                const onPressEvent = jest.fn();
                const {container} = render(<ReduceButton count={count} setCounter={onPressEvent}/>,);
                fireEvent.press(container.children[0]);
                expect(onPressEvent).toBeCalled();
                expect(onPressEvent.mock.calls[0][0]).toBe(count-1);
            });
        });
        describe('countが0の時',() => {
            const count = 0;
            it('グレーアウトされたのReduceButtonを描画することができる', () => {
                const component = renderer.create(<ReduceButton count={count} setCounter={() => {}}/>);
                expect(component).toMatchSnapshot();
            });
            it('ボタンをクリックできない', () => {
                const onPressEvent = jest.fn();
                const {container} = render(<ReduceButton count={count} setCounter={onPressEvent}/>,);
                fireEvent.press(container.children[0]);
                expect(onPressEvent).not.toBeCalled();
            });
        })
    }
);
