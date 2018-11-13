import React, { Component, Fragment } from "react";

class JsonData extends Component {
   constructor(props) {
      super(props);
      this.state = { data: null };
   }

   componentDidMount() {
      fetch("assets/data/data.json")
         .then(res => res.json())
         .then(data => this.setState({ data: data }));
   }

   render() {
      console.log(this.state.data);
      return (
         <Fragment>
            <h2>TEST COMPONENT</h2>
         </Fragment>
      );
   }
}
export default JsonData;
