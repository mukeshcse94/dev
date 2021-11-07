import React, { Component } from 'react';
import '../styles/dynamicGet.css';
import axios from 'axios';

import FilterOptions from './FilterOptions';
import FilterItems from './FilterItems';

class DynamicGet extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      carMake: '',
      model: '',
      multiple: true
    }
  }

  componentDidMount() {
    axios.get('/api')
      .then(response => {
        const data = response.data
        this.setState({ data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  filterItems = (val, type) => {
    switch (type) {
      case 'carMake':
        this.setState({ carMake: val });
        break;
      case 'model':
        this.setState({ model: val });
        break;
      default:
        break;
    }
  }

  render() {

    let filteredItems = this.state.data;
    let state = this.state;
    let filterProperties = ["carMake", "model"];

    filterProperties.forEach(filterBy => {
      let filterValue = state[filterBy];

      if (filterValue) {
        filteredItems = filteredItems.filter(item => item[filterBy] === filterValue);
      }
    });

    let carMakeArray = this.state.data.map(item => item.carMake);
    let modelArray = this.state.data.map(item => item.model);

    // In the drop-down add an extra empty row at the beginning.
    carMakeArray.unshift("");
    modelArray.unshift("");


    return (
      <div>
        <FilterOptions
          data={this.state.data}
          carMakeOptions={carMakeArray}
          modelOptions={modelArray}
          changeOptionProp={this.filterItems}
        />
        <div>
          <FilterItems key={filteredItems.name} data={filteredItems} />
        </div>
      </div>
    )
  }
};

export default DynamicGet;

/*
The changeOptionProp above is an example of how data is being passed from parent to child - https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17
Within the parent component, I have the 'filterItems' variable which has access to the data. But I need my child component to have access too. So, I pass it as a prop to the child.
  */