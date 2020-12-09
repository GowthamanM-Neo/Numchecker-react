import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
const num =[1,2,3,4,5,6,7,8,9,10];
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      numbers : ''
    };
    this.handleButtonOdd = this.handleButtonOdd.bind(this);
    this.handleButtonEven = this.handleButtonEven.bind(this);
    this.handleButtonReset = this.handleButtonReset.bind(this);
  }
  handleButtonOdd(){
    this.setState({
      numbers : <div class="text-center">{num.filter(n=>n%2!==0).map((z)=><h1 class="list">{z}</h1>)}</div>
    });
  }
  handleButtonEven(){
    this.setState({
      numbers : <div class="text-center">{num.filter(n=>n%2===0).map((z)=><h1 class="list">{z}</h1>)}</div>
    });
  }
  handleButtonReset(){
    this.setState({
      numbers : ''
    });
  }
  render(){
    
    return (
      <div>
        <div className="head text-center">{num.map((z)=><h1 class="list">{z}</h1>)}</div>
        <div className="text-center">
        <button type="button" id="odd" className="btn btn-info"  onClick={this.handleButtonOdd}>Pick Odd Numbers</button>
        <button type="button" id="even" className="btn btn-success" onClick={this.handleButtonEven}>Pick Even Numbers</button>
        <button type="button" id="reset" className="btn btn-warning" onClick={this.handleButtonReset}>Reset</button>
        </div>
    <div className="text-center result">{this.state.numbers}</div>
      </div>
    );
  }
}

export default App; 
  
