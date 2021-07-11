import React, { Component } from 'react';
import './StarGraph.scss';

export default class StarGraph extends Component {
  render() {
    const ratingValue = this.props.userInfo.map(user => user.rating);

    const totalPerson = ratingValue.filter(ratingPerson => ratingPerson).length;
    const percentageList = ratingValue
      .reduce(
        (preValue, ratingPerson) => {
          if (ratingPerson === 0) {
            return preValue;
          }

          preValue[ratingPerson - 1] += 1;
          return preValue;
        },
        [0, 0, 0, 0, 0]
      )
      .map(ratingPerson => Math.round((ratingPerson / totalPerson) * 100));

    const maxPercentage = Math.max(...percentageList);

    return (
      <>
        <div className="graphLayout">
          <div className="graphContainer">
            {percentageList.map((percent, index) => {
              return (
                <div
                  className={
                    percent >= maxPercentage
                      ? 'maxRatingPerson'
                      : 'ratingPerson'
                  }
                  key={index}
                  style={{ height: `${percent}%` }}
                ></div>
              );
            })}
          </div>

          <ul className="scoreNumber">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </>
    );
  }
}
