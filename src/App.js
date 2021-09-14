import React from "react"
import { Component } from "react";
import axios from "axios";

//App component
class App extends Component {
  constructor() {
    super()
    this.state = {
      color: "#fff"
    }
  }

  //Axios get request
  componentDidMount() {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => {
        // console.log(res);
        this.setState({ color: res.data.colors[0].hex });
      })
  }


  render() {

    return (
      <div>
        { }
        <button >Change Color</button>
      </div>
    )
  }

}

export default App;
