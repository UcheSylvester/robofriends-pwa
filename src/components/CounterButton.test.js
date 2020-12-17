import { shallow } from "enzyme";
import React from "react";

import CounterButton from "./CounterButton";

describe("<CounterButton />", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  it("expects to render CounterButton component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("correctly increases count", () => {
    wrapper.find('[id="counter"]').simulate("click");

    expect(wrapper.state()).toEqual({ count: 2 });
  });

  it("expects prop of color to equal red", () => {
    expect(wrapper.props().color).toEqual("red");
  });
});
