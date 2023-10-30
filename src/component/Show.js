import React, { Component } from 'react'

 class Show extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"aswin",
      };
    }
    handleclick=()=>{
        this.setState({
            name:"ravichandran",
        });
    };
    
  render() {
    return (
      <div>
        <h1> i am changing my name</h1>
        <h2>
            {this.state.name}
        </h2>
        <button onClick={this.handleclick}>Click mec</button>
      </div>
    );
  }
}

export default Show
