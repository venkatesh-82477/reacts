import React from "react";
export default class Toggle extends React.Component {
  constructor(){
    super();
    this.state = {
      show: false,
    }
  
    this.toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  }
    render() {
      return (
        <div id="box2">
          <button id="but2" onClick={this.toggle}>
          To see styling in class component
          </button>    
          {this.state.show && <div id="func1"><h3 id="para1">This is created using Class component</h3>
        <br></br>
        <p id="p1">This is done in external CSS</p>
        <p style={{textAlign:'center',color:"blue"}}>This is done in inline CSS</p></div>}
        </div>
       );
    }
  }