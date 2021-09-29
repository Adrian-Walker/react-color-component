import React from "react"
import { Component } from "react";
import axios from "axios";

//App component
class App extends Component {
  constructor() {
    super()
    this.state = {
      color: " "
    }

    this.handleChange = this.handleChange.bind(this)
  }

  //Axios get request
  componentDidMount() {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => {
        // console.log(res);
        this.setState({ color: res.data.colors[0].hex });
      })
  }

  changeColor(color) {
    this.setState({ color });
  }

  handleChange(e) {
    const newColor = e.target.value;
    this.props.changeColor(newColor)
  }


  render() {

    return (
      <div>
        { }
        <button onChange="{this.handleChange}">Change Color</button>
      </div>
    )
  }

}

export default App;
