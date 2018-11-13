import React, { Component, Fragment } from "react";
import Info from "./info";

class App extends Component {
   render() {
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
            <Info />
         </Fragment>
      );
   }
}
export default App;
