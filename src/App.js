import React from "react";
import "./style.css";
 
class App extends React.Component{
  constructor(){
    super();
    this.state={
      num1:'',
      num2:'',
      result:''
    }
  }
  input1=(e)=>{
    this.setState({num1:+ e.target.value});
  }
  input2=(e)=>{
    this.setState({num2:+ e.target.value});
  }

  add=()=>{
    var addition = this.state.num1+this.state.num2;
    this.setState({result:addition})
  }
  render(){
    return(
      <div>
        <h3>Addition(controlled components)</h3>
        NUM-1:<input type="text" onKeyUp={this.input1}/><hr/>
        NUM-2:<input type="text" onKeyUp={this.input2}/><hr/>
        <button onClick={this.add}>Add</button>
        &nbsp;
         Result&nbsp;:&nbsp; <span>{this.state.result}</span>
      </div>
    )
  }

}
export default App;