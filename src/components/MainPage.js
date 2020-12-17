import React, { Component } from "react";
import CardList from "./CardList";
import ErrorBoundary from "./ErrorBoundry";
import Header from "./Header";

import Scroll from "./Scroll";
import SearchBox from "./SearchBox";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = (robots, searchField) => {
    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = this.filterRobots(robots, searchField);
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
