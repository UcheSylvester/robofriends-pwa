import React from "react";

import { shallow } from "enzyme";
import CardList from "./CardList";

describe("<CardList />", () => {
  it("renders CardList component", () => {
    const mockRobots = [
      {
        id: 1,
        name: "John Snow",
        email: "John@gmail.com",
      },
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });
});
