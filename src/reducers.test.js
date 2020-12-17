import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as actions from "./actions";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  it("should return initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(
      reducers.initialStateSearch
    );
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(reducers.initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: "john doe",
      })
    ).toEqual({
      searchField: "john doe",
    });
  });
});

describe("requestRobots", () => {
  it("should return initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(
      reducers.initialStateRobots
    );
  });

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(reducers.initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ ...reducers.initialStateRobots, isPending: true });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    const mockRobots = [
      {
        id: 1,
        name: "test",
        email: "test@gmail.com",
      },
    ];

    expect(
      reducers.requestRobots(reducers.initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: mockRobots,
      })
    ).toEqual({
      ...reducers.initialStateRobots,
      isPending: false,
      robots: mockRobots,
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(reducers.initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "ERROR!!!",
      })
    ).toEqual({
      ...reducers.initialStateRobots,
      isPending: false,
      robots: [],
      error: "ERROR!!!",
    });
  });
});
