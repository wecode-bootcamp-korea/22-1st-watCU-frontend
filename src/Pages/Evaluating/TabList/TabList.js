import React, { Component } from 'react';

class TabList extends Component {
  render() {
    const { toggleState, tabLists } = this.props;

    return (
      <>
        {this.props.tabLists.map((tablist, i) => {
          const tabNum = i + 1;
          return (
            <li
              className={toggleState === tabNum ? `tab tabActive` : `tab`}
              onClick={() => {
                this.props.toggleTab(tabNum);
              }}
            >
              {tabLists[i]}
            </li>
          );
        })}
      </>
    );
  }
}

export default TabList;
