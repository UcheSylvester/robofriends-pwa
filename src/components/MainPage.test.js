import { shallow } from "enzyme";
import React from "react";

import MainPage from "./MainPage";

describe("<MainPage />", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: "",
      isPending: false,
    };

    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it("expects to render MainPage component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("filters robots correctly", () => {
    const mockRobots = [
      {
        id: 1,
        name: "John Snow",
        email: "John@gmail.com",
      },
    ];

    expect(wrapper.instance().filterRobots([], "")).toEqual([]);
    expect(wrapper.instance().filterRobots(mockRobots, "josh")).toEqual([]);
    expect(wrapper.instance().filterRobots(mockRobots, "john")).toEqual(
      mockRobots
    );
  });
});
