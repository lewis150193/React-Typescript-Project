import { Header } from "../../components/Header";
import { shallow } from "enzyme/build";
import Enzyme from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16/build'
import React from "react";

Enzyme.configure({ adapter: new Adapter()});

describe("Tests the Header", () => {
  it("should  create a snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
