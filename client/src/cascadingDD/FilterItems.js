import React, { Component } from 'react';

class FilterItems extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(item => {
          return (<div key={item.name} className="filter-item">{item.name}</div>)
        }
        )}
      </div>

    );
  }
};

export default FilterItems;