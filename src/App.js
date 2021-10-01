import React from "react"
import { Component } from "react";
import axios from "axios";

//App component
class App extends Component {
  constructor() {
    super()
    this.state = {
      color: []
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
    // console.log(this.state.color[0])
  }

  // changeColor(color) {
  //   this.setState({ color });
  // }

  handleChange(e) {
    const newColor = e.target.value;
    this.changeColor(newColor)
  }

  nextColor() {
    console.log(this.state.color)
  }


  render() {

    return (
      <div>
        { }
        <button onClick={this.nextColor()}>Change Color</button>
        <div height="100px" width="100px" style={`background-color: ${this.state.color}`}>

        </div >
      </div>
    )
  }

}

export default App;
