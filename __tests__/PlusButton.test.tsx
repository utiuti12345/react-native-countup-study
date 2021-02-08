import 'react-native';
import React from "react";
import renderer from "react-test-renderer";
import PlusButton from "../src/PlusButton";
import {fireEvent, render} from "@testing-library/react-native";

describe('PlusButton',() =>{
        describe('countが0より大きい時', () => {
            const count = 10;
            it('通常のPlusButtonを描画することができる', () => {
                const component = renderer.create(<PlusButton count={count} setCounter={() => {}}/>);
                expect(component).toMatchSnapshot();
            });
            it('ボタンクリックでカウントが${count}から${count +1}になる',  () => {
                const onPressEvent = jest.fn();
                const {container} = render(<PlusButton count={count} setCounter={onPressEvent}/>,);
                fireEvent.press(container.children[0]);
                expect(onPressEvent).toBeCalled();
                expect(onPressEvent.mock.calls[0][0]).toBe(count+1);
            });
        });
    }
);
