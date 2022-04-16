import React from 'react';
import axios from 'axios'
import useState from 'react'
import './App.css'

class App extends React.Component{
  state={
    advice:"It's not about who likes you, it's about who you like."
  };

    fetchadvice=()=>{
    axios.get("https://api.adviceslip.com/advice")
    .then((response)=>{
      
       const {advice}=response.data.slip;
        this.setState({advice});
    })
    .catch((error)=>{
      // alert(error)
      console.log(error)
    })


  }
  componentDidMount(){
    // alert("message?: DOMString")
    this.fetchadvice();

  }

  render(){
    const {advice}=this.state;
    return (
      <div className="App">
        <div className="card">
          <h1 className="advice">{advice}<p>-noBody</p></h1>

          <button className="button" onClick={this.fetchadvice}>
              <span>
                Next Advice
              </span>
          </button>

        </div>
        
        

      </div>
        
      )
 } 
}
export default App;
