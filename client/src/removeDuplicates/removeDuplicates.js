import React from "react";
import ReactDOM from "react-dom";

class RemoveDuplicates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
      countries: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  }

  render() {
    const countries = require("./countries.json");
    const uniqueCountry = this.getUnique(countries.world, "country");
    return (
      <form onSubmit={this.handleSubmit}>

        <label>
          Looping through Json File
          <select>
            {uniqueCountry.map(item => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))}
            {console.log(this.state.countries)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RemoveDuplicates;
