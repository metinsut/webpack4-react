import React, { Component, Fragment } from "react";
import Test from "./test";
import Data from "../data/data.json";

class App extends Component {
   render() {
      console.log(Data);
      return (
         <Fragment>
            <h1>Welcome Webpack with React</h1>
            <br />
            <div className="image" />
            <br />
            <div className="image1" />
            <br />
            <img className="cat" src="assets/images/cat.jpg" alt="cat" />
            <br />
            <div>{Data[0].name}</div>
            <br />
            <Test />
         </Fragment>
      );
   }
}
export default App;
