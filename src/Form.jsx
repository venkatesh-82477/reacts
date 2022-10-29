/*import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: " ",
      Department :" ",
      Rating :" "
    };
  }

  handleName = e => {
    this.state({
      Name :e.target.value
    })
  };
  handleDepartment = e => {
    this.state({
      Department :e.target.value
    })
  };
  handleRating = e => {
    this.state({
      Rating :e.target.value
    })
  };
    

  handleSubmit = e => {
    alert(`${this.state.Name} ${this.state.Department} ${this.state.Rating}`)
    e.preventDefault();
  }

  render() {
    const {Name,Department,Rating} = this.state
    return (
      <div>
        <center>
        <form onSubmit={this.handleSubmit}>
          <label>Name :</label>
          <input type="text"  value={Name}  onChange={this.handleName} /><br></br><br></br>
          <label>Department :</label>
          <input type="text"  value={Department} onChange={this.handleDepartment} /><br></br><br></br>
          <label>Rating :</label>
          <input type="number"  value={Rating} onChange={this.handleRating} /><br></br><br></br>
          <button type="submit">
            Submit
          </button>
          <br></br><br></br><br></br><br></br>
          <div id="container">
            <div id="msg">hi</div>
          </div>
        </form>
        </center>
      </div>
    );
  }
}
export default Input;*/


