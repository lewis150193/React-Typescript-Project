import { Header } from "../components/Header";
import { shallow } from "enzyme";
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from "react";

Enzyme.configure({ adapter: new Adapter()});

describe("Tests the Header", () => {
  it("should  create a snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
