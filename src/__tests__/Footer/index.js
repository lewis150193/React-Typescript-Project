import { shallow } from "enzyme/build";
import Enzyme from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16/build'
import React from "react";
import {Footer} from "../../components/Footer";

Enzyme.configure({ adapter: new Adapter()});

describe('Should snapshot footer',  () => {
    it('should render footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });
});