import React, { Component } from 'react';

class TabList extends Component {
  render() {
    const { toggleState, tabLists, handleClick } = this.props;

    return (
      <>
        {this.props.tabLists.map((tablist, i) => {
          return (
            <li
              key={i}
              className={toggleState === tablist ? `tab tabActive` : `tab`}
              onClick={() => {
                handleClick(tablist, i);
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
