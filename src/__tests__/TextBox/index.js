import {TextBox} from "../../components/TextInput";
import { shallow } from "enzyme/build";
import Enzyme from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16/build'
import React from "react";

Enzyme.configure({ adapter: new Adapter()});

const myMock = jest.fn();

const Props = {
    onChange: myMock,
    name: 'name',
    value: 'valueType',
    className: 'string',
    placeHolder: 'placeholder'

};

describe('should test TextBox', function () {
    it('should render TextBox', function () {
        const wrapper = shallow(<TextBox {...Props}/>)
        expect(wrapper).toMatchSnapshot();
    });
    it('should simulate TextBox change', function () {
        const wrapper = shallow(<TextBox {...Props}/>)
        const input = wrapper.find('input').simulate('change');
        expect(input).toBeTruthy();
    });
});