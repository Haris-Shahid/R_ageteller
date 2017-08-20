import React, { Component } from 'react';
import './App.css';

import { Form , FormControl , Button } from 'react-bootstrap' ;

import AgeState from './component/agestate' ;

class App extends Component {
  constructor(){
    super() ;
    this.state = {
      newDate : '' ,
      birthday : '1992-06-21',
      showStates : false
    }
  }

  changebirthday(){
    console.log(this.state);
    this.setState({
      birthday: this.state.newDate ,
      showStates: true
    })
  }

  render() {
    return (
      <div className='App'>
      <Form inline >
        <h2>Imput Your Birthday!</h2>
        <FormControl type='date'
                     onChange = { ( ev ) => this.setState({ newDate : ev.target.value })  } >
        </FormControl>
        {' '}
        <Button onClick = { ()=> this.changebirthday() } >
          Submit
        </Button>
        { this.state.showStates ?     <div className='fade age-state' >
                                         <AgeState date = {this.state.birthday} />
                                      </div>
                                 : <div></div> }
      </Form>    
      </div>
    );
  }
}

export default App;
