import React from "react";

import { shallow } from "enzyme";
import Scroll from "./Scroll";

describe("<Scroll />", () => {
  it("renders Scroll component", () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
  });
});
