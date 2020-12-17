import { shallow } from "enzyme";
import React from "react";

import Header from "./Header";

describe("<Header />", () => {
  const wrapper = shallow(<Header />);

  it("expects to render Header component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("excepts shouldComponentUpdate to return false", () => {
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({}, {});

    expect(shouldUpdate).toBe(false);
  });
});
